// Publish
// jQuery: $( obj ).trigger('channel', [arg1, arg2, arg3]);
$( el ).trigger( '/login', [{ username:'test', userData:'test'}] );

// Dojo: dojo.publish( 'channel', [arg1, arg2, arg3] );
dojo.publish( '/login', [{ username:'test', userData:'test'}] );

// YUI: el.publish( 'channel', [arg1, arg2, arg3] );
el.publish( '/login', { username:'test', userData:'test'} );


// Subscribe
// jQuery: $(obj).on( 'channel', [data], fn);
$( el ).on( '/login', function ( event ) {
  //...
})

// Dojo: dojo.subscribe( 'channel', fn);
var handle = dojo.subscribe( '/login', function (data) {
  //...
})

// YUI: el.on('channel',handler)
el.on( '/login', function (data) {
  //...
})


//Unsubscribe
// jQuery: $(obj).off('channel');
$( el ).off('/login');

// Dojo: dojo.unsubscribe( handle );
dojo.unsubscribe( handle );

// YUI: el.detach('channel');
el.detach('/login');



// Vanila JS
/*
For those wishing to use the Publish / Subscribe pattern with vanilla JavaScript(or another library) AmplifyJS includes a clean, library - agnostic implementation that can be used with any library or toolkit.Radio.js(http://radio.uxder.com/), PubSubJS (https://github.com/mroderick/PubSubJS) or Pure JS PubSub by Peter Higgins (https://github.com/phiggins42/bloody-jquery-plugins/blob/55e41df9bf08f42378bb08b93efcb28555b61aeb/pubsub.js) are also similar alternatives worth checking out.

Ben Alman's Pub/Sub gist https://gist.github.com/661855 (recommended)
Rick Waldron's jQuery-core style take on the above https://gist.github.com/705311
Peter Higgins" plugin http://github.com/phiggins42/bloody-jquery-plugins/blob/master/pubsub.js.
AppendTo's Pub/Sub in AmplifyJS http://amplifyjs.com
Ben Truyman's gist https://gist.github.com/826794
*/
