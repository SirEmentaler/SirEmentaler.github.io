var currentContent;
function loadContent(page) {
	if (page !== currentContent) {
		$("#content").hide("fade", "fast", function() {
			$("#content").load("html/" + page + ".html", function() {
				$("#content").show("fade", "fast");
			});
		});
	}
}
$(document).ready(function() {
	$("a.load").click(function(event) {
		loadContent(this.href.substr(1));
	});
});
