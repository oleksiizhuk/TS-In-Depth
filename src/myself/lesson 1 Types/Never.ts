
// Return Never
function error(message: string): never {
    throw new Error(message);
}

// Return type is never
function fail() {
    return error('Something failed');
}

// return never
function infiniteLoop(): never{
    while (true){}
}
