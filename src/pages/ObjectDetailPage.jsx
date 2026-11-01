
import { useParams } from 'react-router-dom';
import objects from '../../data/objects.json';

export default function ObjectDetailPage() {
  const { id } = useParams();
  const object = objects.find((item) => item.id === id);

  if (!object) {
    return <main id="main"><h1>Object not found</h1></main>;
  }

  return (
    <main id="main">
      <div className="container">
        <h1>{object.title}</h1>
        <p>{object.tag}</p>
        <p>{object.summary}</p>

        {object.facts && (
        <ul className="detail-facts">
            {object.facts.map((fact) => (
            <li key={fact}>{fact}</li>
            ))}
        </ul>
        )}

        {object.sections &&
        object.sections.map((section) => (
            <section
            className="detail-section"
            key={section.title}
            >
            <h2>{section.title}</h2>
            <p>{section.content}</p>
            </section>
        ))
        }

      </div>
    </main>
  );
}
