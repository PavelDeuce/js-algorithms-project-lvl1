// @ts-check

import buildSearchEngine from '../src/searchEngine.js';

describe('search-engine', () => {
  it('empty documents', () => {
    const searchEngine = buildSearchEngine([]);
    expect(searchEngine.search('yo')).toEqual([]);
  });

  it('clear search with word processing and metrics', () => {
    const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
    const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
    const doc3 = { id: 'doc3', text: "I'm your shooter." };
    const docs = [doc1, doc2, doc3];

    const searchEngine = buildSearchEngine(docs);

    expect(searchEngine.search('shoot at me')).toEqual(['doc2', 'doc1']);
    expect(searchEngine.search('pint!')).toEqual(['doc1']);
    expect(searchEngine.search('pint')).toEqual(['doc1']);

    expect(searchEngine.search('')).toEqual([]);
    expect(searchEngine.search('yo 1')).toEqual([]);
  });
});
