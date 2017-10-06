
$('input').bind("enterKey", function (e){
	$('ul').append('<li id="one">' + $("#input-text").val() + '</li>');
	$("#input-text").val("")
});

$('input').keydown(function(e){
	if (e.keyCode == 13) {
		$(this).trigger("enterKey");
	}
});

$('ul').on('click', 'li', function () {
	$(this).remove();
});

$('#button').click(function () {
	$.ajax({
		type: "POST",
		dataType: "jsonp",
		// username: "ACdad705d8a707b135c57108150fb1d6ee", // account_sid
		// password: "302856736009a067774e8a0f93d0a67e", // auth token
		url: "https://rest.nexmo.com/sms/json",
		data: {
			api_key: "a6e22fe2",
			api_secret: "cac2825ea7aa4645",
			to: "+911234567890",
			from: "Nexmo",
			text: "From jQuery Ajax"
		},
		success: function(data) {
			console.log(data);
		},
		error: function(data) {
			console.log(data);
		}
	});
});
