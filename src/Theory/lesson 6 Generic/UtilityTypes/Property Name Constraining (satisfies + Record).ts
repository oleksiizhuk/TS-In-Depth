type Props1 = 'id' | 'title' | 'pages';

const book1 = { // type: { id: number }
    id: 1,
    title: 'Learn TypeScript',
    // pages: 1000,
    // author: '' // ERROR
} satisfies Partial<Record<Props1, unknown>>;

book1.title.toUpperCase(); // OK
// book1.author.toUpperCase(); // ERROR
