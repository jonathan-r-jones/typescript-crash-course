"use strict";
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
//qq
ids.push(6, 7);
ids.push(8, 9);
ids.push(10, 11);
ids.push(12, 13);
ids.push(14, 15);
ids.push(16, 17);
ids.push(18, 19);
console.log('IDS: ', ids);
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Brad', true];
// Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Union
let pid;
pid = 22;
pid = '22';
pid = '23';
pid = '24';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion is explicitly telling the compiler that we want to treat an
// entity as a different type.
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Errors because customerId is defined as a number.
// customerId = true
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
// Should be able to pass in a number or string but not a boolean.
log('Hey Brad.');
log('\n');
log(25);
log('\n');
log(27);
const user1 = {
    id: 1,
    name: 'John',
};
log("\nUser1: " + user1);
console.log("\nUser1.b: " + user1);
console.log("\nUser1.id: " + user1.id);
console.log("\nUser1.name: " + user1.name);
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const p1 = 1;
const p2 = 'Hey now';
const p4 = {
    id: '77',
    name: 'Ricky'
};
console.log("\np4.id: " + p4.id);
console.log("\np4.name: " + p4.name);
// Classes
class Person {
    constructor(id, name) {
        console.log('Constructor entered.');
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const brad = new Person(1, 'Brad Traversy');
const mike = new Person(2, 'Michael Jordan');
console.log(brad.register());
console.log('\n');
console.log(brad);
console.log('\n');
console.log(mike);
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
// Shawn is registered because the employee class was extended.
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', 'John', 'Jill']);
//strArray.push(1) // Throws error
console.log('ID: ', id);
