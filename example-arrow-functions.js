var names = ['Aca', 'Milos', 'Fedja'];
//
// names.forEach(function (name) {
//   console.log('foreach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrow', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Alex'));

var person = {
  name: 'Alex',
  greet: function () {
      names.forEach((name) => {
        console.log(this.name + ' says ho to ' + name);
      });
  }
}

person.greet();

function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}

console.log(addStatement(4, 7));

var addExpresion = (a, b) => a + b;

console.log(addExpresion(3, 2));
console.log(add(1, 3));
console.log(add(9, 0));
