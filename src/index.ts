// Basic Types
let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
//qq
ids.push(6, 7)
ids.push(8, 9)
ids.push(10, 11)
ids.push(12, 13)
ids.push(14, 15)
ids.push(16, 17)
ids.push(18, 19)
console.log('IDS: ', ids)

let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]
// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill'],
]

// Union
let pid: string | number
pid = 22
pid = '22'
pid = '23'
pid = '24'

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'John',
}

// Type Assertion is explicitly telling the compiler that we want to treat an
// entity as a different type.
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Errors because customerId is defined as a number.
// customerId = true

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

// Void
function log(message: string | number): void {
  console.log(message)
}

// Should be able to pass in a number or string but not a boolean.
log('Hey Brad.')
log('\n')
log(25)
log('\n')
log(27)

// Should show an error. 
// log(true)

// ? means optional parameter.
// Interfaces.  Just like type but with no equals sign.
// Can't use unions? No sure.
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}

log("\nUser1: " + user1)
console.log("\nUser1.b: " + user1)
console.log("\nUser1.id: " + user1.id)
console.log("\nUser1.name: " + user1.name)

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  register(): string
}

type Point = number | string
const p1: Point = 1
const p2: Point = 'Hey now'

interface PointInterface {
  id: number | string,
  name: string
}

const p4: PointInterface = {
  id: '77',
  name: 'Ricky'
}

console.log("\np4.id: " + p4.id)
console.log("\np4.name: " + p4.name)

// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    console.log('Constructor entered.')
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered.`
  }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Michael Jordan')
console.log(brad.register())

console.log('\n')
console.log(brad)
console.log('\n')
console.log(mike)

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

// Shawn is registered because the employee class was extended.
const emp = new Employee(3, 'Shawn', 'Developer')
console.log(emp.register())

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['Brad', 'John', 'Jill'])

//strArray.push(1) // Throws error

console.log('ID: ', id)