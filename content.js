$(document).ready(function() {
	$('a[href="#reference"]').click(function(event) {
		$("#content").hide("fade", "fast", function() {
			$("#content").load("html/reference.html", function() {
				$("#content").show("fade", "fast");
			});
		});
	});
});
