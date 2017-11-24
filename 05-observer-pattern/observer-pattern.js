// THE OBSERVER PATTERN

/**
 * The Observer is a design pattern where an object (known as a subject) maintains
 * a list of objects depending on it (observers), automaticcally notifying them
 * of any change of state.
 *
 * The observer components
 *  + Subject: Maintain a list of observers, facilitates adding or removing observers
 *  + Observer: Provides an update interface for objects that need to be notified
 *    of a Subject's changes of state
 *  + ConcreteSubject: Broadcast notifications to the observers on changes of state
 *    stores the state of `ConcreteObservers`
 *  + ConcreteObserver: Store a reference to the `ConcreteSubject`, implements an
 *    update interface for the Observer to ensure state in consistent with the Subject's
 *
 *
 */
