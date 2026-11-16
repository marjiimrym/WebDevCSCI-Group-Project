// AI-assisted - see AI-USAGE.md #2

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FAVOURITES_KEY, loadFavourites, saveFavourites, toggleId } from '../src/lib/favourites.js';

function fakeStorage(initial = {}) {
  const data = { ...initial };
  return {
    getItem: (key) => (key in data ? data[key] : null),
    setItem: (key, value) => { data[key] = String(value); },
  };
}

test('toggleId adds a missing id and removes an existing one', () => {
  assert.deepEqual(toggleId([], 'mars'), ['mars']);
  assert.deepEqual(toggleId(['mars', 'moon'], 'mars'), ['moon']);
});

test('toggleId does not mutate the original array', () => {
  const ids = ['mars'];
  toggleId(ids, 'moon');
  assert.deepEqual(ids, ['mars']);
});

test('favourites survive a save and load round trip', () => {
  const storage = fakeStorage();
  saveFavourites(storage, ['mars', 'saturn']);
  assert.deepEqual(loadFavourites(storage), ['mars', 'saturn']);
});

test('loadFavourites returns an empty list for missing, broken or wrong data', () => {
  assert.deepEqual(loadFavourites(fakeStorage()), []);
  assert.deepEqual(loadFavourites(fakeStorage({ [FAVOURITES_KEY]: 'not json' })), []);
  assert.deepEqual(loadFavourites(fakeStorage({ [FAVOURITES_KEY]: '{"a":1}' })), []);
  assert.deepEqual(loadFavourites(null), []);
});

test('saveFavourites does not throw when storage is blocked', () => {
  const blocked = { setItem() { throw new Error('QuotaExceeded'); } };
  assert.doesNotThrow(() => saveFavourites(blocked, ['mars']));
});
