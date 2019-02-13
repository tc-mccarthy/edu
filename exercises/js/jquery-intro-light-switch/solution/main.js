$(document).ready(function () {
	$("img.light.on").on("click", function (e) {
		e.preventDefault();

		$("body").addClass("light-off");
	});

	$("img.light.off").on("click", function (e) {
		e.preventDefault();

		$("body").removeClass("light-off");
	});
});