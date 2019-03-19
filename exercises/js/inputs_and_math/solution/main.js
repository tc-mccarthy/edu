$("body").on("keyup keydown keypress change", "input", function (e) {
	const $this_input = $(this);
	const $this_row = $this_input.closest("[data-tariff-percent]");
	const $span_pre_total = $this_row.find(".pre_total").find("span");
	const $span_post_total = $this_row.find(".post_total").find("span");
	let qty = $this_row.find(".qty").find("input").val();
	let cost = $this_row.find(".cost").find("input").val();
	let tariff = $this_row.data("tariff-percent");

	if (qty === "" || cost === "") {
		return;
	}

	qty = parseFloat(qty);
	cost = parseFloat(cost);
	tariff = parseFloat(tariff);

	let tariff_decimal = tariff / 100;
	let pre_tariff = qty * cost;
	let post_tariff = (qty * cost) * (1 + tariff_decimal);

	console.log("Qty", qty);
	console.log("Cost", cost);
	console.log("Tariff", tariff);

	console.log("pre_tariff", pre_tariff);
	console.log("post_tariff", post_tariff);

	$span_pre_total.text(pre_tariff);
	$span_post_total.text(post_tariff);

	let pre_total = 0,
		post_total = 0;

	$(".pre_total").each(function () {
		const $this_pre_total = $(this);
		const $this_pre_total_span = $this_pre_total.find("span");

		let value = $this_pre_total_span.text();

		if (value == "") {
			return;
		}

		value = parseFloat(value);

		pre_total = pre_total + value;
	});

	$(".post_total").each(function () {
		const $this_post_total = $(this);
		const $this_post_total_span = $this_post_total.find("span");

		let value = $this_post_total_span.text();

		if (value == "") {
			return;
		}

		value = parseFloat(value);

		post_total = post_total + value;
	});

	$("#pre_total").find("span").text(pre_total);
	$("#post_total").find("span").text(post_total);
});