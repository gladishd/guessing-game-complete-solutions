let age = 1;
let dog = {
  name: 'Cody',
  bark() {
    return 'ruff ruff!';
  },
  age: 2,
};
let blah = 'blah';

let {age: renameAge, name, bark} = dog;
console.log(age, renameAge, name, bark, bark());

dog = {
    name: 'Cody',
    bark() {
      return 'raf raf!';
    },
    age: 2,
  };

dog = {
    name: 'Cody',
    bark() {
      return 'raf rafeeeeee!';
    },
    age: 2,
  };
let {bark: bark2} = dog;
console.log(bark2());
console.log(bark2());
console.log(bark2());
console.log(name);