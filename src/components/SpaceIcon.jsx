// AI-assisted - see AI-USAGE.md #5
const paths = {
  orbit: <><circle cx="12" cy="12" r="3" /><ellipse cx="12" cy="12" rx="11" ry="5" transform="rotate(-35 12 12)" /><path d="M5 4l1 1M18 19l1 1" /></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5M10.5 7v7M7 10.5h7" /></>,
  filter: <><path d="M3 6h18M3 12h18M3 18h18" /><circle cx="8" cy="6" r="2" /><circle cx="16" cy="12" r="2" /><circle cx="10" cy="18" r="2" /></>,
  star: <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z" />,
  image: <><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="9" cy="9" r="2" /><path d="m3 18 6-5 4 3 4-6 4 4" /></>,
  asteroid: <><path d="m5 8 5-5 7 1 4 7-2 7-7 3-8-5Z" /><circle cx="10" cy="10" r="2" /><path d="m14 15 2 1M17 8h.01M8 16h.01" /></>,
  arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
  external: <path d="M6 18 18 6M6 6h12v12" />,
};

export default function SpaceIcon({ name, className = '' }) {
  return <svg className={`space-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.star}</svg>;
}
