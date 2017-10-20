var isInView = function (el) {
	if (typeof el == "undefined") {
		return false;
	}

	if (typeof el === "object") {
		el = el[0];
	}

	var rect = el.getBoundingClientRect();

	return rect.bottom > 0 &&
		rect.right > 0 &&
		rect.left < (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */ &&
		rect.top < (window.innerHeight || document.documentElement.clientHeight) /*or $(window).height() */ ;
};

var timer;

$(document).ready(function () {

	$(window).on("scroll", function () {
		var p3 = $("p").eq(2),
			p4 = $("p").eq(3);

		if (isInView(p3)) {
			$(".sidebar.active").removeClass("active");
			$("#sidebar1, .content").addClass("active");
		}

		if (isInView(p4)) {
			$(".sidebar.active").removeClass("active");
			$("#sidebar2").addClass("active");
		}

	});
});
