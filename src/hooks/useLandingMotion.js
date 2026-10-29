// AI-assisted - see AI-USAGE.md #5
import { useEffect, useRef, useSyncExternalStore } from 'react';

const motionQuery = '(prefers-reduced-motion: reduce)';
const subscribe = (callback) => {
  const query = window.matchMedia(motionQuery);
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
};
const getSnapshot = () => window.matchMedia(motionQuery).matches;

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}

export function useHeroParallax(enabled) {
  const ref = useRef(null);
  useEffect(() => {
    const hero = ref.current;
    if (!hero || !enabled) return;
    const finePointer = window.matchMedia('(pointer: fine)');
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    const update = () => {
      frame = 0;
      const bounds = hero.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
      hero.style.setProperty('--pointer-x', `${pointerX}px`);
      hero.style.setProperty('--pointer-y', `${pointerY}px`);
      hero.style.setProperty('--scroll-y', `${Math.min(65, Math.max(0, -bounds.top * 0.12))}px`);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const move = (event) => {
      if (!finePointer.matches) return;
      const bounds = hero.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12;
      schedule();
    };
    const reset = () => { pointerX = 0; pointerY = 0; schedule(); };
    hero.addEventListener('pointermove', move, { passive: true });
    hero.addEventListener('pointerleave', reset);
    window.addEventListener('scroll', schedule, { passive: true });
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener('pointermove', move);
      hero.removeEventListener('pointerleave', reset);
      window.removeEventListener('scroll', schedule);
      ['--pointer-x', '--pointer-y', '--scroll-y'].forEach((name) => hero.style.removeProperty(name));
    };
  }, [enabled]);
  return ref;
}

export function useSectionReveal(enabled) {
  const ref = useRef(null);
  useEffect(() => {
    if (!enabled || !('IntersectionObserver' in window)) return;
    const elements = [...ref.current.querySelectorAll('[data-reveal]')];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.remove('reveal-pending');
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.08 });
    // Visible content stays visible, including when JS or the observer is unavailable.
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add('reveal-pending');
        observer.observe(element);
      }
    });
    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove('reveal-pending'));
    };
  }, [enabled]);
  return ref;
}
