

function assertCondition(condition: any): asserts condition {
    if(!condition) {
        throw new TypeError('value should have benn a string');
    }
}


function doSomethingTitle1(title: any) {
    assertCondition(typeof title === 'string');
    return title.toUpperCase();
}


doSomethingTitle1('tr')
