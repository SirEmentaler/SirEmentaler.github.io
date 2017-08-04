$(document).ready(function() {
	$('a[href="#reference"]').click(function(event) {
		$("#content").load("html/reference.html");
		event.preventDefault();
	});
});
