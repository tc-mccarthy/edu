$("body").on("click", ".dot", function (e) {
	e.preventDefault();

	const $this_dot = $(this);

	$this_dot.addClass("active");
});

$("body").on("click", ".dot .close", function (e) {
	e.preventDefault();
	e.stopPropagation();

	const $this_close = $(this),
		$this_dot = $this_close.closest(".dot");


	$this_dot.removeClass("active");
});