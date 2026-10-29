// AI-assisted - see AI-USAGE.md #5
import objects from '../../data/objects.json';
import sun from '../../assets/images/landing/sun.webp';
import moon from '../../assets/images/landing/moon.webp';
import mars from '../../assets/images/landing/mars.webp';
import jupiter from '../../assets/images/landing/jupiter.webp';
import saturn from '../../assets/images/landing/saturn.webp';
import galaxy from '../../assets/images/landing/galaxy.webp';

const images = { sun, moon, mars, jupiter, saturn, galaxy };
export const objectCount = objects.length;
export const categories = ['Planet', 'Moon', 'Star', 'Galaxy', 'Nebula'].map((name) => ({
  name,
  label: { Planet: 'Planets', Moon: 'Moons', Star: 'Stars', Galaxy: 'Galaxies', Nebula: 'Nebulae' }[name],
  count: objects.filter((object) => object.tag === name).length,
}));
export const categoryCount = new Set(objects.map((object) => object.tag)).size;
export const featuredObjects = ['sun', 'moon', 'mars', 'jupiter', 'saturn', 'galaxy'].map((id) => {
  const object = objects.find((entry) => entry.id === id);
  return { ...object, image: images[id], href: `pages/${id === 'sun' ? 'thesun' : id}.html` };
});
export const saturnImage = saturn;
export const galaxyImage = galaxy;
