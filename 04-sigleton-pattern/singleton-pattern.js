// THE SINGLETO PATTERN

/**
 * The Singleton pattern is thus known because it restricts instantiation of a class to a single
 * object. Classically, the Singleton pattern can be implemented by creating a class with a
 * method that creates a new instance of the class if one doesn't exist. In the event of an
 * instance already existing, it simply returns a reference to that object.
 *
 * In JavaScript, Singletons serve as a shared resource namespace which isolate implementation
 * code from the global namespace so as to provide a single point of access for functions.
 */

var mySingleton = (function () {
  // Instance stores a reference to the singleton
  var instance;

  function init(){
    // Singleton

    // Private methods and variables
    function privateMethod() {
      console.log( "I'm private" );
    }

    var privateVariable = "I'm also private";

    var privateRandomNumber = Math.random();

    return {
      // Public methods and variables
      publicMethod: function () {
        console.log( 'The public can see me!' );
      },

      publicProperty: 'I\'m also public',

      getRandomNumber: function () {
        return privateRandomNumber;
      }
    }
  }

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if( !instance ){
        instance = init();
      }
      return instance;
    }
  }
})();

var myBadSingleton = (function () {
  // Instance stores a reference to the Singleton
  var instance;

  function init() {
    var privateRandomNumber = Math.random();

    return {
      getRandomNumber: function () {
        return privateRandomNumber;
      }
    }
  }

  return {
    // Always create a new singleton instance
    getInstance: function () {
      instance = init();
      return instance;
    }
  }
})();

// Usage:
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true

var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log( badSingleA.getRandomNumber() !== badSingleB.getRandomNumber() ) // true

// Note: As we are working with random numbers, there is a
// mathematical possibility both numbers will be the same,
// however unlikely. The above example should otherwise still
// be valid

/**
 * In the GoF book, the applicability of the Singleton pattern is described as follows:
 *  + There must be exactly one instance of a class, and it must be accessible to clients
 *    from a well-known access point.
 *  + When the sole instance should be extensible by subclassing, and clients should be
 *    able to use an extended instance without modifying their code.
 */

// The second of these points refers to a case where we might need code such as:
mySingleton.getInstance = function () {
  if (this._instance == null) {
    if (isFoo()) {
      this._instance = new FooSingleton();
    } else {
      this._instance = new BasicSingleton();
    }
  }
  return this._instance;
};

/**
 * In practice, the Singleton pattern is useful when exactly one object is needed
 * to coordinate others across a system. Here is one example with the pattern being used in this context:
 */
var SingletonTester = (function () {
  // options: an object containing configuration options for the singleton
  // e.g. var options = { name: 'test', pointX: 5}
  function Singleton( options ) {
    // Set the options to the options supplied
    // or an empty object if none are provided
    options = options || {};

    // Set some properties for our singleton
    this.name = 'SingletonTester';

    this.pointX = options.pointX || 6;

    this.pointY = options.pointY || 10
  }

  // our instance holder
  var instance;

  // An emulation of static variables and methods
  var _static = {
    name: 'SingletonTester',

    // Method for getting an instance. It returns
    // a singleton instance of a singleton object
    getInstance: function ( options ) {
      if( instance === undefined ){
        instance = new Singleton( options );
      }

      return instance;
    }
  }

  return _static
})();

var singletonTest = SingletonTester.getInstance({
  pointX: 5
});

// Log the output of pointX just to verify it is correct
// Output: 5
console.log( singletonTest.pointX );

/**
 * WHILST THE SINGLETON HAS VALID USES, OFTEN WHEN WE FIND OURSELVES
 * NEEDING IT IN JAVASCRIPT IT'S A SIGN THAT WE MAY NEED TO RE-EVALUATE OUR DESIGN.
 *
 * They're often an indication that modules in a system are either tightly coupled
 * or that logic is overly spread across multiple parts of a codebase.
 * Singletons can be more difficult to test due to issues ranging from hidden dependencies,
 * the difficulty in creating multiple instances, difficulty in stubbing dependencies and so on.
 */
