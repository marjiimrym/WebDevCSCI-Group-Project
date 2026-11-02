import { lazy } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage.jsx';

// Preserve the complete profiles, including facts and section anchors.
const profiles = Object.fromEntries(
  Object.entries(import.meta.glob('./objects/*.jsx')).map(([path, load]) => [path, lazy(load)]),
);

export default function ObjectDetailPage() {
  const { id } = useParams();
  const Profile = profiles[`./objects/${id}.jsx`];
  return Profile ? <Profile /> : <NotFoundPage object />;
}
