const compare = function (a, b) {
	if (a.price > b.price) {
		return -1;
	} else if (a.price < b.price) {
		return 1;
	}
};

$(() => {
	$(".flex-chart").each(function () {
		const $chart = $(this),
			$bars = $chart.find(".bar"),
			bars = [];
		let total = 0;

		$bars.each(function () {
			const $bar = $(this),
				bar = {
					price: parseFloat($bar.data("price")),
					school: $bar.find("span").text(),
					ele: $bar
				};

			total += bar.price;
			bars.push(bar);
		});

		bars.sort(compare).forEach((bar, index) => {
			const pct = (bar.price / total) * 100,
				$bar = bar.ele,
				$inner_bar = $bar.find("div");

			$inner_bar.css({ width: `${pct}%` });
			$bar.css({ order: (index + 1) });
		});
	});
});