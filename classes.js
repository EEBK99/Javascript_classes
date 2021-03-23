console.clear();

// function declare karny ka tareeka
function fn() {}

// class declare karny ka tareeka
class clas {}

// function myn set value karny ka tareeka
let globallengthf, globalwidthf;
function setValueForFunc(lengthf, widthf) {
  globallengthf = lengthf;
  globalwidthf = widthf;
}

class rectangle {
  // attributes/ members
  length;
  width;

  // constructor

  //functions.... it conatains setter and getter and other required functions
  setValue(length, width) {
    this.length = length;
    this.width = width;
  }

  getValue() {
    return {
      length: this.length,
      width: this.width,
    };
  }
}

let recOne = new rectangle();
recOne.setValue(9, 10);
let recTwo = new rectangle();
recTwo.setValue(11, 12);

console.log(recOne);
console.log(recTwo);
console.log(recOne.getValue());
console.log(recTwo.getValue());

function echoValues(valOne, valTwo, valThree) {
  console.log(valOne, valTwo, valThree);
}
echoValues(1, 2, 3);
echoValues(1, 2);
echoValues(1);
