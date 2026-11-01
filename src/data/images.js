const images = import.meta.glob('../../assets/images/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

// Import catalogue images through Vite so production builds include them.
export function objectImage(cover) {
  return images[`../../${cover}`];
}
