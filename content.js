$(document).ready(function() {
	$('a[href="#reference"]').click(function(event) {
		$("#content").hide("fast", function() {
			$("#content").load("html/reference.html", function() {
				$("#content").show("fast");
			});
		});
	});
});
