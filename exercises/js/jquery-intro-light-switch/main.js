$("body").on("click", ".light.on", function (e) {
	e.preventDefault();

	$("body").addClass("light-off");
});

$("body").on("click", ".light.off", function (e) {
	e.preventDefault();

	$("body").removeClass("light-off");
});