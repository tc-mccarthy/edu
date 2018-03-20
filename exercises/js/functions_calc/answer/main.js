$(document).ready(function () {
	$("input").on("keyup keydown keypress change", function (e) {
		var this_input = $(this),
			this_row = this_input.closest(".item"),
			quantity = parseFloat(this_row.find(".qty").val()),
			cost = parseFloat(this_row.find(".cost").val()),
			tariff = parseFloat(this_row.data("tariff-percent")),
			pre_tariff_cost = (cost * quantity),
			post_tariff_cost = (pre_tariff_cost + (pre_tariff_cost * (tariff / 100)));

		// console.log("Quantity", quantity);

		this_row.find(".pre_total").find("span").text(pre_tariff_cost);
		this_row.find(".post_total").find("span").text(post_tariff_cost);

		var pre_total = 0,
			post_total = 0;

		$(".pre_total").each(function () {
			//do stuff
			var this_pre_total = parseFloat($(this).find("span").text());
			pre_total = pre_total + this_pre_total;
		});

		$(".post_total").each(function () {
			//more stuff
			var this_post_total = parseFloat($(this).find("span").text());
			post_total = post_total + this_post_total;
		});

		$("#pre_total").find("span").text(pre_total);
		$("#post_total").find("span").text(post_total);

	});
});
