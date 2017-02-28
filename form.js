$(document).ready(function () {
	$("#button").on("click", function (e) {
		e.preventDefault();

		var a = parseFloat($("#a").val());
		var b = parseFloat($("#b").val());
		var c = parseFloat($("#c").val());


		var answer = ((b * b) - (4 * a * c)) / (2 * a);

		$("#answer").val(answer);
	});
});
