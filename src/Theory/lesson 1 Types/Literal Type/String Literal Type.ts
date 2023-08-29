type Easing = 'ease-in' | 'ease-our' | 'ease-in-out';
function animate(easing: Easing){}
animate('ease-in'); // OK
// @ts-ignore
animate('test'); // ERROR
