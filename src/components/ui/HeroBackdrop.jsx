import HalftoneNebula from './halftone-nebula.jsx';

/**
 * Shared WebGL backdrop for every hero on the site. The variants keep one
 * visual system while tuning density and motion to the job each hero does.
 */
const SKY_VARIANTS = {
  home: {
    planetX: 0.78,
    planetY: 0.22,
    planetRadius: 0.065,
    stars: 0.6,
    sparkles: 6,
    lens: 0.38,
    speed: 0.5,
  },
  catalogue: {
    planetX: 0.82,
    planetY: 0.68,
    planetRadius: 0.06,
    stars: 0.72,
    sparkles: 5,
    lens: 0.36,
    speed: 0.44,
  },
  article: {
    planetX: 0.84,
    planetY: 0.7,
    planetRadius: 0.05,
    stars: 0.5,
    sparkles: 4,
    lens: 0.32,
    speed: 0.34,
  },
};

export default function HeroBackdrop({ variant = 'article', className = '' }) {
  return (
    <HalftoneNebula
      className={`hero-backdrop hero-backdrop--${variant} ${className}`.trim()}
      height="100%"
      params={SKY_VARIANTS[variant] ?? SKY_VARIANTS.article}
      touch="scroll"
    />
  );
}
