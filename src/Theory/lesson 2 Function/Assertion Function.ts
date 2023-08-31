
function doSomethingWithTitle(title: any) {
    if( typeof title !== 'string') {
        throw new TypeError('title should have been a string');
    }
    return title.toUpperCase();
}

doSomethingWithTitle('');
