function assertValue(val: any): asserts val is string {
    if(typeof val !== 'string') {
        throw new TypeError('value should have benn a string');
    }
}

function doSomethingTitle(title: any) {
    assertValue(title);
    return title.toUpperCase();
}

doSomethingTitle('ad')
