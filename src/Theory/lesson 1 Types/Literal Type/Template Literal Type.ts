type In = 'in';
type Out = 'out';
type InOut = 'in-out';

type Easing1 = `ease-${In} | ease-${Out} | ease-in-${InOut}`; // ERROR

type EasingImprove = `ease-${In | Out | InOut}`;

type All = 'in' | 'out' | 'in-out';

type EasingAdvanced = `ease-${All}`;

function animate1(easing: Easing1){}
function animate2(easing: EasingImprove){}
function animate3(easing: EasingAdvanced){}

// @ts-ignore
animate1('ease-in'); // ERROR
animate2('ease-in');
animate3('ease-in');

