// AI-assisted - see AI-USAGE.md #5.
import { useState } from 'react';
import useNasa from '../hooks/useNasa.js';
import DataStatus from './DataStatus.jsx';
import { ResilientImage } from './NasaHighlights.jsx';

function ImageResults({ query }) {
  const resource = useNasa('images', query);
  return <>
    <DataStatus resource={resource} />
    <p role="status">{resource.loading ? 'Searching NASA imagery…' : `${resource.data.length} images for “${query}”`}</p>
    <ul className="nasa-image-grid" role="list">
      {resource.data.map((item) => <li key={item.id} className="nasa-image-card">
        <ResilientImage src={item.imageUrl} alt={item.title} width="480" height="320" loading="lazy" />
        <div><h3><a href={item.pageUrl} rel="external">{item.title}</a></h3>
          <p>{item.description.slice(0, 300)}{item.description.length > 300 ? '…' : ''}</p>
          {item.credit && <p className="notice">Credit: {item.credit}</p>}
        </div>
      </li>)}
    </ul>
    {!resource.loading && !resource.data.length && resource.meta.source === 'nasa' && <p>No NASA images match. Try a different search.</p>}
  </>;
}

export default function NasaImageSearch() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  return <section className="section section--alt nasa-live" aria-labelledby="nasa-images-title">
    <div className="container">
      <h2 id="nasa-images-title" className="section-title">Search NASA imagery</h2>
      <p>Discover photographs from the NASA Image and Video Library.</p>
      <form className="nasa-search" onSubmit={(event) => {
        event.preventDefault();
        const value = input.trim().replace(/\s+/g, ' ').toLowerCase();
        if (value) setQuery(value);
      }}>
        <div className="field">
          <label className="field__label" htmlFor="nasa-image-query">NASA image keywords</label>
          <input id="nasa-image-query" className="input" type="text" required maxLength={120} value={input} onChange={(event) => setInput(event.target.value)} placeholder="Try Orion, Mars or Apollo" />
        </div>
        <button className="btn btn--primary" type="submit">Search NASA images</button>
      </form>
      {query ? <ImageResults key={query} query={query} /> : <p>Enter a topic to search NASA’s image collection.</p>}
    </div>
  </section>;
}
