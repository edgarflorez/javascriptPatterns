/**
 * Observer Interface declares `update` method
 */
function Observer() {

}

/**
 * This method should me overwritten and implementes by the child class
 */
Observer.prototype.update = function () {
  console.warn("This method should be overritten with any implementation")
}
