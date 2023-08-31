function createBook(title: string, publishDate?: number){}
function createBookByTitle(title: string = 'CSS Secrets'){
    return title;
}
function createBookByTitle1(title: string = createBookByTitle()){}
function createBook1(title = 'TypeScript', author: string){}
