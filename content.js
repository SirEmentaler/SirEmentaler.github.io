$.effects.define("fade", "toggle", function(options, done) {
	var show = options.mode === "show";
	$(this)
		.css("opacity", show ? 0 : 1)
		.animate( {
			opacity: show ? 1 : 0
		}, {
			queue: false,
			duration: options.duration,
			easing: options.easing,
			complete: done
		});
});
$(document).ready(function() {
	$('a[href="#reference"]').click(function(event) {
		$("#content").hide("fast", "fade", function() {
			$("#content").load("html/reference.html", function() {
				$("#content").show("fast");
			});
		});
	});
});
