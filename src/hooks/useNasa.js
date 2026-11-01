// AI-assisted - see AI-USAGE.md #5.
import { useMemo, useSyncExternalStore } from 'react';
import { getResource } from '../lib/nasa-client.js';

export default function useNasa(kind, query = '') {
  const resource = useMemo(() => getResource(kind, query), [kind, query]);
  const state = useSyncExternalStore(resource.subscribe, resource.getSnapshot);
  return { ...state, retry: resource.retry };
}
