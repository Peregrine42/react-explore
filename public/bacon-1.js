// listen for events
var first_clicks  = $('#firstButton').asEventStream('click');
var second_clicks = $('#secondButton').asEventStream('click');

var inc  = function(x) { return x + 1 };
var doub = function(x) { return x * 2 };

// transform events
var increments = first_clicks.map(()  => inc);
var doubles    = second_clicks.map(() => doub);

// combine events
var counter_stream = increments.merge(doubles)
                               .scan(1, (x, f) => f(x) );

// react to events
counter_stream.onValue(function(x) { $('#output').html(x) } );
