var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic Types
var id = 5;
var company = 'Traversy Media';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4, 5];
//qq
ids.push(6, 7);
ids.push(8, 9);
ids.push(10, 11);
ids.push(12, 13);
ids.push(14, 15);
ids.push(16, 17);
ids.push(18, 19);
console.log('IDS: ', ids);
var arr = [1, true, 'Hello'];
//qq
console.log("Hello world 3 from TypeScript.");
// Tuple
var person = [1, 'Brad', true];
// Tuple Array
var employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Union
var pid;
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
var user = {
    id: 1,
    name: 'John'
};
// Type Assertion is explicitly telling the compiler that we want to treat an
// entity as a different type.
var cid = 1;
// let customerId = <number>cid
var customerId = cid;
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
var user1 = {
    id: 1,
    name: 'John'
};
log("\nUser1: " + user1);
console.log("\nUser1.b: " + user1);
console.log("\nUser1.id: " + user1.id);
console.log("\nUser1.name: " + user1.name);
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var p1 = 1;
var p2 = 'Hey now';
var p4 = {
    id: '77',
    name: 'Ricky'
};
console.log("\np4.id: " + p4.id);
console.log("\np4.name: " + p4.name);
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        console.log('Constructor entered.');
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return this.name + " is now registered.";
    };
    return Person;
}());
var brad = new Person(1, 'Brad Traversy');
var mike = new Person(2, 'Michael Jordan');
console.log(brad.register());
console.log('\n');
console.log(brad);
console.log('\n');
console.log(mike);
// Subclasses
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
// Shawn is registered because the employee class was extended.
var emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(['Brad', 'John', 'Jill']);
// Throws error
//numArray.push("hello")
//strArray.push(1)
console.log('ID: ', id);
