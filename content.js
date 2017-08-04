var currentContent;
function loadContent(page) {
	if (page.length > 0 && page !== currentContent) {
		function load() {
			$("#content").load("html/" + page.substr(1) + ".html", function(responseText, textStatus, jqXHR) {
				if (textStatus !== "error") {
					currentContent = page;
					$("#content").slideDown("fast");
				} else if (page !== "#404") {
					loadContent("#404");
				}
			});
		};
		if ($("#content").is(":visible"))
			$("#content").slideUp("fast", load);
		else
			$("#content").load();
	}
};
$(document).ready(function() {
	if (!window.location.hash)
		window.location.hash = "#home";
	loadContent(window.location.hash);
	$("a.load").click(function(event) {
		loadContent(this.getAttribute("href"));
	});
});
