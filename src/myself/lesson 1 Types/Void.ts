function warnUser(name: void): void {
    alert('This is my warning message');
}

warnUser(); // OK
warnUser(undefined);// OK
warnUser(void 2);// OK

// @ts-ignore
warnUser(null);// ERROR

