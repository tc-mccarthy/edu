$(document).ready(function () {
	var total = parseInt($(".total_budget").find("span").text());

	$(".department input").on("keyup keydown keypress change", function (e) {
		var new_total = total;

		$(".department").find("input").each(function () {
			console.log("inside");
			var this_input = $(this),
				department_budget = this_input.val();



			if (department_budget === "") {
				department_budget = 0;
			}



			new_total = new_total - parseInt(department_budget);
		});

		console.log(new_total);

		$(".total_budget").find("span").text(new_total);

		if (new_total < 0) {
			alert("You've overspent!");
		}

	});
});
