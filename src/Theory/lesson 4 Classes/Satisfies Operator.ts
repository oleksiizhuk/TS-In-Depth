

type bookOrMagazine =
  {title: string; kind: string} | {title: string; author: string; kind: string};


const obj10 = { title: 'book', } as bookOrMagazine;
const obj2 = { title: 'title', kind: 'kind', author:'author' } satisfies bookOrMagazine;
