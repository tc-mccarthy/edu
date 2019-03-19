$(document).ready(function () {
	const total = parseInt($(".total_budget").find("span").text());

	let remaining;

	$("input[type='checkbox']").on("change", function (e) {
		remaining = total;

		$("input[type='checkbox']:checked").each(function () {
			const $this_checkbox = $(this),
				value = $this_checkbox.val();
			remaining = remaining - value;
		});

		$(".total_budget").find("span").text(remaining);

		if (remaining < 0) {
			alert("You've overspent!");
		}
	});
});