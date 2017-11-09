MODULE PATTERN

/**
 * Modules are an integral piece of any robust application's architecture and typically 
 * keeping the units of code for a project both cleanly separated and organized. 
 */
 

/**
 * Object Literal
 */
var myObjectLiteral = {
    variableKey: variableValue,

    functionKey: function() {
        // ... 
    }
}
/**
 * Object literals don't require instantiation using the `new` operator
 * New members may be added to it using assignment as follow `myModule.property = "someValue"`
 */
 var myModule = {
     myProperty: "someValue",
     
     // Object literals can contain properties and methods.
     // e.g. we can define a further object for module configuration
     myConfig: {
         useCaching: true,
         language: "en"
     },

     // a very basic method
     saySomething: function () {
         console.log("Where in the world?");
     },

     // output a value based on the current configuration
     reportMyConfig: function () {
         console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
     },

     // Override the current configuration
     updateMyConfig: function ( newConfig ) {
         if( typeof newConfig === "object"){
             this.myConfig = newConfig;
             console.log( this.myConfig.language )

         }
     }
 }
 // Outputs: Where in the world is?
 myModule.saySomething();
 // Outputs: Caching is enabled
 myModule.reportMyConfig();
 // Outputs: fr
 myModule.updateMyConfig({
     language: "fr",
     useCaching: false
 })
 // Outputs: Caching is: disabled
 myModule.reportMyConfig(); 

 // [ARTICLE] ABOUT OBJECT  LITERAL
 // http://rmurphey.com/blog/2009/10/15/using-objects-to-organize-your-code
 // Using Objects to Organize Your Code
 // Steps
 //     1. Crafting HTML
 //     2. Scaffolding the Object
 //         2.1. myFeature.init() it will run on $(document).ready(). It will turn the 
 //             semantic HTML we start with into a Javascript-enabled user interface.
 //         2.2. myFeature.buildSectionNav() will be called by myFeature.init(). It will take
 //             a Jquery Object that contains all of the sections from the semantic HTML,
 //             and use those section to build the top nativation.
 //         2.3 myFeature.buildItemNav() will be called by myFeature.showSection(). It will ake
 //             a jQuery object that contains all of the items associated with the section
 //             from the semantic HTML, and use them to build the side navigation. It will bind
 //             the click handlers to the side navigation items so that clicking in them will
 //             show the appropriate content.
 //         2.4 myFeature.showSection() will be called when the user clicks on an item in the 
 //             top navigation. It will use the navigation item that's clicked on to figure out
 //             which section to show from the semantic HTML.
 //         2.5 myFeature.showContentItem() will be called when the user clicks on an item in
 //             the side navigation. It will use the navigation item that's clicked on to figure
 //             out which content item to show from the semanctic HTML.
 //         2.6 We'll also make room for a configuration property myFeature.config, which will be
 //             a single location for settings default values rather than scattering them 
 //             throughtout the code
 //             var myFeature = {
 //                 'config': {},
 //                 'init': function(){},
 //                 ...
 //             }
 //     3. The code
 // [OBJECT LITERAL PATTERN]

 /************************************
 ************************************
 ************************************/

/**
 * [THE MODULE PATTERN]
 * The Module pattern was originally defined as a way to provide both private and public encapsulation 
 * for classes in conventional software engineering.
 */
var testModule =  (function () {
    var counter = 0;
    return {
        incrementCounter: function () {
            return counter++;
        },
        resetCounter: function () {
            console.log( 'counter value prior to reset: '+ counter);
            counter = 0;
        }
    }
})();
    // Usage
testModule.incrementCounter();
    // Check the counter value and reset
testModule.resetCounter();
/**
 * MODULE PATTERN TEMPLATE
 */
var myNamespace = (function () {
    
    var myPrivateVar, myPrivateMethod;

    // A private counter variable
    myPrivateVar = 0;

    // A private function which logs any arguments
    myPrivateMethod = function (foo) {
        console.log(foo);
    }

    return {

        // A public variable
        myPublicVar: "foo",

        // A public function utilizing privates
        myPublicFunction: function (bar) {
            // Increment our private counter
            myPrivateVar++;
            // Call our private method using bar
            myPrivateMethod( bar );
        }
    }
})();

/**
 * MODULE PATTERN TEMPLATE BasketModule
 */
var basketModule = (function () {
    // Privates
    var basket = [];

    function doSomethingPrivate() {
        //...
    }
    function doSomethingElsePrivate() {
        //...
    }

    // Return an object exposed to the public
    return {
        // Add items to our basket
        addItem: function ( values ) {
            basket.push(values);
        },

        // Get the count of items in the basket
        getItemCount: function () {
            return basket.length;
        },

        //Public Alias to a private function
        doSomething: doSomethingPrivate,

        // Get the total value of items in the basket
        getTotal: function () {
            var q = this.getItemCount(),
                p = 0;
            while (q--) {
                p += basket[q].price;
            }
            return p;
        }
    }
})();
    // BasketModule returns an object with a public API we can use
basketModule.addItem({
    item: 'bread',
    price: .5
})
basketModule.addItem({
    item: 'butter',
    price: 0.3 
})
console.log( basketModule.getTotal() );
console.log( basketModule.getTotal() );

