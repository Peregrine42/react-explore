// listen for events
var add1s   = $('#add1Button').asEventStream('click').map(5);
var updates = $('#updateButton').asEventStream('click');

// combine events
var counter_stream = add1s.scan(0, (x, y) => x + y )
                          .sampledBy(updates);

// react to events
counter_stream.onValue(function(x) { $('#output').html(x) } );
