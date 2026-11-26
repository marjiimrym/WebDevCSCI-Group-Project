import NasaImageSearch from '../components/NasaImageSearch.jsx';
import HeroBackdrop from '../components/ui/HeroBackdrop.jsx';

export default function GalleryPage() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="page-hero page-hero--explore" aria-labelledby="page-title">
        <HeroBackdrop variant="catalogue" />
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h1 id="page-title" className="page-hero__title">Image Gallery</h1>
          <p className="lede page-hero__lede">Search NASA's archive of mission photographs, telescope images and spacecraft imagery, from Apollo to James Webb.</p>
        </div>
      </section>
      <NasaImageSearch />
    </main>
  );
}
