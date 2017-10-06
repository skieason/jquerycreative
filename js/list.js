String.prototype.repeat = function(num){
	return new Array(num + 1).join(this);
};

var filter = ['ass', 'piss', 'hell', 'fuck', 'blood', 'Blood', 'coming'];

var filterIt = function (txt) {
	for(var i=0; i<filter.length; i++){
		// Create a regular expression and make it global
		var pattern = new RegExp('\\b' + filter[i] + '\\b', 'g');

		// Create a new string filled with '*'
		var replacement = '*'.repeat(filter[i].length);

		txt = txt.replace(pattern, replacement);
	}
	// returning txt will set the new text value for the current element
	return txt;
};

$('input').bind("enterKey", function (e){
	$('#list2').prepend('<li id="one">' + $("#input-text").val() + '</li>');
	$("#input-text").val("")
});

$('input').keydown(function(e){
	if (e.keyCode == 13) {
		$(this).trigger("enterKey");
	}
});

$('ul').on('click', 'li', function () {
	$('#list2').append('<li id="one">' + $(this).text() + '</li>');
	$(this).remove();
});

setInterval(function(){
	console.log('whatup');
	$.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status){
		data.message = filterIt(data.message);
		$('#list').append('<li id="one">' + data.message + '</li>');
	});
}, 4000);

$('#yes').click(function () {
	$('#title2').text('Click the quotes you like on the left to see them over here!');
	$(this).parent().remove();
});

$('#no').click(function () {
	$('#title2').text('Click the quotes you hate on the left so we can have the satisfaction of deleting them all at once when you\'re ready');
	$('#delete').text('Button of Destruction');
	$(this).parent().remove();
});

$('#delete').click(function () {
	$('#list2').empty();
});

$('#button').click(function () {
	$.ajax({
		type: "GET",
		url: "https://api.whatdoestrumpthink.com/api/v1/quotes/random",
		success: function(data) {
			console.log(data);
		},
		error: function(data) {
			console.log(data);
		}
	});
});
