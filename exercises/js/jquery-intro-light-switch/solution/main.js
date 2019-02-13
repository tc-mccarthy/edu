$(document).ready(function () {
	$(".light.on").on("click", function (e) {
		e.preventDefault();

		$("body").addClass("light-off");
	});

	$(".light.off").on("click", function (e) {
		e.preventDefault();

		$("body").removeClass("light-off");
	});
});