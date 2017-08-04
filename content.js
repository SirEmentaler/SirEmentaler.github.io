var currentContent;
function loadContent(page) {
	if (page.length > 0 && page !== currentContent) {
		$("#content").slideUp("fast", function() {
			$("#content").load("html/" + page.substr(1) + ".html", function() {
				currentContent = page;
				$("#content").slideDown("fast");
			});
		});
	}
}
$(document).ready(function() {
	if (!window.location.hash)
		window.location.hash = "#home";
	loadContent(window.location.hash);
	$("a.load").click(function(event) {
		loadContent(this.getAttribute("href"));
	});
});
