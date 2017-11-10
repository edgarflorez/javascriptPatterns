// THE CONSTRUCTOR PATTERN

/**
 * Object constructors are used to create specific types of objects - both preparing the object for
 * use and accepting arguments which a constructor can use to set the values of member properties
 * and methods when the object is first created.
 */

/**
 * ***********************************
 * Object creation
 * ***********************************
 */

var newObject = {};
var newObject = Object.create( Object.prototype );
var newObject = new Object();

/**
 * There are then 10 ways in which keys and values can then be assign to an object
 */
//ECMAScript 3 compatible approaches

// 1. Dot syntax
// Set properties
var newObject.someKey = 'Hello World';
// Get properties
var value = newObject.someKey;

// 2. Square bracket syntax
// Set properties
newObject['someKey'] = 'Hello World';
// Get properties
var value = newObject['someKey'];

// ECMAScript 5 only compatible approaches
// 3. Object.defineProperty
// Set properties
Object.defineProperties( newObject, 'someKey', {
  value: "for more control of the property's behavior",
  writable: true,
  enumerable: true,
  configurable: true
})
// If the above feels a little difficult to read, a short-hand could
// be written as follow
var defineProp = function (obj, key, value) {
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  }
  Object.defineProperties( obj, key, config);
}
// To use, we then create a new empty "person" object
var person = Object.create( Object.prototype );
//populate the object with properties
defineProp( person, 'car', 'Delorean');
defineProp( person, 'dateOfBirth', '1981');
defineProp( person, 'hasBeard', false);
console.log(person);

// 4. Object defineProperties
//Set properties
Object.defineProperties( newObject, {
  'someKey': {
    value: 'Hello World',
    writable: true
  },
  'anotherKey': {
    value: 'Foo Bar',
    writable: false
  }
})
// Getting properties for 3. and 4. can be done using any of
// the options in 1. and 2.

// Usage for inheritance
// Create a race car driver that inherits from the person object
var driver = Object.create( person );
// Set some properties for the driver
defineProp( driver, 'topSpeed', '100mph');
// Get an inherited property (1981)
console.log( driver.dateOfBirth );
// Get the property we set (100mph)
console.log( driver.topSpeed );


/**
 * ***********************************
 * Basic Constructor
 * ***********************************
 * As we saw earlier, JavaScript doesn't support the concept of
 * classes but it does support special constructor functions
 * that work with objects. By simply prefixing a call to a
 * constructor function with the keyword "new", we can tell
 * JavaScript we would like the function to behave like a
 * constructor and instantiate a new object with the members
 * defined by that function.
 *
 * Inside a constructor, the keyword this references the
 * new object that's being created. Revisiting object creation,
 * a basic constructor may look as follows:
 */

function Car( model, year, miles ) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}
// Usage:
// We can create new instances of the car
var civic = new Car( 'Honda Civic', 2009, 20000 );
var mondeo = new Car( 'Ford Mondeo', 2010, 5000);
//
console.log( civic.toString() );
console.log( mondeo.toString() );

/**
 * ***********************************
 * Constructors With Prototypes
 * ***********************************
 * Bellow, a single instance of toString() will now be shared between all of the Car objects.
 */
function Car( model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}
// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefinig the prototype object
Car.prototype.toString = function () {
    return this.model + ' has done ' + this.miles + 'miles';
}
// Usage:
var civic = new Car( 'Honda Civic', 2009, 20000);
var mondeo = new Car( 'Ford Mondeo', 2010, 5000);
//
console.log( civic.toString() );
console.log( mondeo.toString() );
