$(document).ready(function () {
	$("#button").on("click", function (e) {
		e.preventDefault();

		var a = parseFloat($("#a").val());
		var b = parseFloat($("#b").val());
		var c = parseFloat($("#c").val());

		var poop = quadSolve(a, b, c);

		$("#answer").val(poop);
	});

	$("#button2").on("click", function (e) {
		e.preventDefault();

		var d = parseFloat($("#d").val());
		var e = parseFloat($("#e").val());
		var f = parseFloat($("#f").val());

		var poop = quadSolve(d, e, f);

		$("#answer2").val(poop);
	});
});

function quadSolve(a, b, c) {
	var poop = ((b * b) - (4 * a * c)) / (2 * a);

	return poop;
}
