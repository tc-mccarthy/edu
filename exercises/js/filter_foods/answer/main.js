/**
 * Wait for the DOM to be ready
 */
$(document).ready(function () {
	/**
	 * Listen for changes in the select menu
	 */

	$(".filter").on("change", function (e) {
		/**
		 * Capture the currently selected value from the select menu
		 */
		var value = $(this).val();

		/**
		 * First remove the active class from any .active .items
		 */

		$(".item.active").removeClass("active");

		/**
		 * Then add active to any items that have the class corresponding to the filter value
		 */

		$("." + value).addClass("active");
	});
});
