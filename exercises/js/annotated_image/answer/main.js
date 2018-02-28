$(document).ready(function () {
	$(".spot").on("click", function (e) {
		e.preventDefault();

		var clicked_spot = $(this);
		var description = clicked_spot.data("description");

		$(".modal").find(".inner").find("p").text(description);
		$(".modal").addClass("active");
	});

	$(".close").on("click", function (e) {
		e.preventDefault();

		$(".modal").removeClass("active");
	});
});
