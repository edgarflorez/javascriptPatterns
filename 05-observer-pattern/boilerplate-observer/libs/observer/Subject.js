/**
 * Subject Class describe basic methods for a Subject
 *
 * - [addObserver]{@link Subject#addObserver}
 * - [removeObserver]{@link Subject#removeObserver}
 * - [notify]{@link Subject#notify}
 */
function Subject() {
  this.observers = new ObserverList();
}

/**
 * This method add and observer to the `observers` list
 *
 * @param {object} observer reference to an observer object
 */
Subject.prototype.addObserver = function ( observer ) {
  this.observers.add( observer );
}

/**
 * This method remove and observer from the `observers` list
 *
 * @param {object} observer reference to an observer object
 */
Subject.prototype.removeObserver = function ( observer ) {
  this.observers.removeAt( this.observers.indexOf( object, 0 ) );
}

/**
 * This method notify all `observers` list registered
 *
 * Loop through all elements in `observers` list and call the `update` method
 *
 * @param {object} context is the object broadcast to the `observers` list
 */
Subject.prototype.notify = function ( context ) {
  var observerCount = this.observers.count();
  for (let i = 0; i < observerCount; i++) {
    this.observers.get(i).update( context );
  }
}
