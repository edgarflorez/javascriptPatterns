/**
 * ObserverList with the basic concers to maintain a list.
 *
 * - add
 * - count
 * - get
 * - indexOf
 * - removeAt
 * @class
 */
function ObserverList() {
  this.observerList = [];
}

/**
 * This method allow to add one `object` to the observer list
 *
 * @param {object} obj Object to be included in the observer's list
 */
ObserverList.prototype.add = function ( obj ) {
  return this.observerList.push( obj );
}

/**
 * This method allows to count the objects within the observer list
 */
ObserverList.prototype.count = function () {
  return this.observerList.length;
}

/**
 * This method allows to get an object with his index
 *
 * @param {number} index integer for reference the object within the observer list
 */
ObserverList.prototype.get = function ( index ) {
  if( index > -1 && index < this.observerList.length ){
    return this.observerList[ index ];
  }
}

/**
 * This method allows to get the index of an specific object.
 * If there is no match then return -1.
 *
 * @param {object} obj object reference
 * @param {number} startIndex index to start loop through `observerList`
 */
ObserverList.prototype.indexOf = function ( obj, startIndex ) {
  var i = startIndex;
  while ( i < this.observerList.length ) {
    if( this.observerList[i] === obj ){
      return i;
    }
    i++
  }
  return -1;
}

/**
 * This method allows to remove an object from the `observerList`
 *
 * @param {number} index index number of the object to be deleted
 */
ObserverList.prototype.removeAt = function ( index ) {
  this.observerList.splice( index, 1 );
}
