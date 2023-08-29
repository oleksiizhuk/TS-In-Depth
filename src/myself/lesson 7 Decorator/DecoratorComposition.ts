
function decorator1(){
    console.log('decorator1 evaluated');
    return function () {
        console.log('decorator1 called');
    };
}

function decorator2() {
  console.log('decorator2 evaluated');
  return function () {

  }
}
