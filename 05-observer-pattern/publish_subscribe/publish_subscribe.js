// A very simple new mail handler

// A count of the number of messages received
var mailCounter = 0;

// Initialize subscribers that will listen out for a topic
// with the name "inbox/newMessage".

// Render a preview of the new messages
var subscriber1 = subscriber1( 'inbox/newMessage', function ( topic, data) {
  // Log the topic for debbuging purposes
  console.log('A new message was received: ', topic );

  // Use the data that was passed from our subject
  // to display a message preview to the user
  $('.messageSender').html( data.sender );
  $('.messagePreview').html( data.body );
} );

// Here another subscriber using the same data to perform
// a different task.

// Update the counter displaying the number of the new
// messages received via the publisher

var subscriber2 = subscribe( 'inbox/newMessage', function ( topic, data ) {
  $('.newMessageCounter').html( ++mailCounter );
})

publish( 'inbox/newMessage', [{
  sender: 'hello@google.com',
  body: 'Hey there! How are you doing today?';
}])

// We Could then at a later point unsubscribe our subscribers
// from receiving any new topic notifications as follows:
// unsubscribe( subscriber1 );
// unsubscribe( subscriber2 );

