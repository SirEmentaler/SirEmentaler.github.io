var currentContent;
function prepareHyperlinks() {
	$("a:not(.external)").click(function(event) {
		loadContent(this.getAttribute("href"));
	});
}
function loadContent(page) {
	if (page.length > 0 && page !== currentContent) {
		function onLoad() {
			$("#content").load("html/" + page.substr(1) + ".html", function(responseText, textStatus, jqXHR) {
				if (textStatus !== "error") {
					currentContent = page;
					prepareHyperlinks();
					$("#content").slideDown("fast");
				} else if (page !== "#404") {
					loadContent("#404");
				}
			});
		};
		if ($("#content").is(":visible"))
			$("#content").slideUp("fast", onLoad);
		else
			onLoad();
	}
};
$(document).ready(function() {
	if (!window.location.hash)
		window.location.hash = "#home";
	loadContent(window.location.hash);
});
