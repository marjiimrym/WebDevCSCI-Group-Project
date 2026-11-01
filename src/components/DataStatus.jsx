// AI-assisted - see AI-USAGE.md #5.
export default function DataStatus({ resource }) {
  const { meta, loading, offline, error, retry } = resource;
  return (
    <div className="data-status">
      <p role="status" aria-live="polite" aria-atomic="true">
        {offline ? 'Offline. ' : loading ? 'Updating NASA data… ' : ''}
        {meta.source === 'fallback' ? 'Historical sample — not current approaches. ' : ''}
        {meta.source === 'nasa' && (meta.stale ? 'Showing previously cached NASA data. ' : meta.cached ? 'Showing cached NASA data. ' : 'Live NASA data. ')}
        {meta.fetchedAt && <>Last successful update: <time dateTime={meta.fetchedAt}>{new Date(meta.fetchedAt).toLocaleString()}</time>. </>}
        {error || meta.message || (!loading && meta.source === 'unavailable' ? 'No NASA data is available yet.' : '')}
      </p>
      {(error || meta.stale) && <button className="btn btn--ghost" type="button" disabled={loading || offline} onClick={retry}>Retry update</button>}
    </div>
  );
}
