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
 */


/**
 * CHECK FOLDER example01
 * In this example, we looked at how to implement and utilize the Observer pattern, covering
 * the concepts of a Subject, Observer, ConcreteSubject and ConcreteObserver
 */


/**
 * DIFFERENCES BETWEEN THE OBSERVER AND PUBLISH/SUBSCRIBE PATTERN
 *
 * The Publish/Subscribe pattern however uses a topic/event channel which sits between the objects
 * wishing to receive notifications (subscribers) and the object firing the event (the publisher).
 * This event system allows code to define application specific events which can pass custom
 * arguments containing values needed by the subscriber.
 * The idea here is avoid dependencies between the subscriber and the publisher.
 */


/**
 * CHECK FOLDER publish_unsubscribe
 *
 * The general idea here is the promotion of loose coupling. Rather than single objects calling
 * on the methods of other objects directly, they instead subscribe to a specific task or
 * activity of another object and are notified when it occurs.
 */
