/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default Binding: If 'this' is used in the global scope - 'this' is a window/console object, so it will pull other variables that are in the global scope.

* 2. Implicit Binding: If 'this' has a dot (.) in front of it, whatever object is in front of the dot is 'this'.

* 3. New Binding: Uses the keyword 'new' to call an existing constructor function and return it as a new object.

* 4. Explicit Binding: You are able to force 'this' to reference an object using call(), bind() and apply().
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var aFunction = function(){
    console.log(this);
}
aFunction();
// Principle 2

// code example for Implicit Binding
function aFunction(){
    console.log(this.b);
} 

var anObject = {
    a : 1,
    b : 'Something',
    aFunction:aFunction
};
anObject.aFunction();
// Principle 3

// code example for New Binding
function aPerson(person){
    this.person = person;
    this.hello = function () {
        return "I am " + this.person;
    }
    console.log(this);

}

const me2 = new aPerson('Jenn');
me2.hello('Jenn');

// Principle 4

// code example for Explicit Binding
let me = {
    name: 'Jenn',
    age: 43
}

function iAm(){
    console.log(this.name, this.age);
}

iAm.call(me);