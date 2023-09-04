interface LibraryResource {
    catalogNumber: number;
}

interface Book8 {
    title: string;
}

interface Encyclopediaaaa extends LibraryResource, Book8  {
    volume: number;
}

const test3: Encyclopediaaaa= {
    catalogNumber: 1,
    title: 'title',
    volume: 1
};

console.log(test3);
