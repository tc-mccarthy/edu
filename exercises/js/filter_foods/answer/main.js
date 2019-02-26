/**
 * Listen for changes in the select menu
 */

$("body").on("change", ".filter", function (e) {
	/**
	 * Capture the currently selected value from the select menu
	 */
	const value = $(this).val();

	/**
	 * First remove the active class from any .active .items
	 */

	$(".item.active").removeClass("active");

	/**
	 * Then add active to any items that have the class corresponding to the filter value
	 */

	$("." + value).addClass("active");
});