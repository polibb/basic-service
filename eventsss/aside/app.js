// var person = {
//     firstname: '',
//     lastname: '',
//     greet: function() {
//         return this.firstname + ' ' + this.lastname;
//     }
// }

// var john = Object.create(person);
// john.firstname = 'john';
// john.lastname = 'doe';
// console.log(john.greet());

// person.firstname = 'kalina';
// person.lastname = 'fog';

// var jane = Object.create(person);
// jane.firstname = 'jane';

// console.log(jane.greet());

var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${this.name}`);
    },
    give: function(stuff, isGiving) {
        console.log(stuff);
        console.log(isGiving);
    }
}

obj.greet();
obj.greet.call({ name: 'Polina' }); // gives a new object for the this keyword
obj.greet.apply({ name: 'Polina wow' }); // gives a new object for the this keyword

obj.give.call(null, { book: 'store' }, false); // params passed as expected
obj.give.apply(null, [{ reprogram: 'brain' }, true]); // params passed in an array