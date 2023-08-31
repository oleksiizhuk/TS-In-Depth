function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProperty: any): string[] {
    let foundTitles: string[] = [];
    if (typeof bookProperty === 'string') {
    // Получить книги по автору и добавить в foundTitles
    } else if (typeof bookProperty === 'boolean') {
    // Получить книги по доступности и добавить в foundTitles
    }
    return foundTitles;
}

getTitles('');
getTitles(false);
// @ts-ignore
getTitles(1);
