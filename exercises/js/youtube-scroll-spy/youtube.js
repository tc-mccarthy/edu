var videos = [];
var apiReady = false;
var CUNY_YT = function (ele) {
	var self = this,
		width = ele.width(),
		height = width * .5625,
		sticky = ele.hasClass("stickyEnabled"),
		isPlaying = false;

	if (typeof window.player_counter === "undefined") {
		window.player_counter = 0;
	}

	window.player_counter++;

	var player_id = "cuny_player_" + window.player_counter,
		wrapper = "<div class='video'></div>";

	if (ele.hasClass("stickyEnabled")) {
		wrapper = "<div class='stickyWrapper'><div class='stickyEnabled'>" + wrapper + "</div></div>";
	}

	ele.wrap(wrapper);
	ele.attr("id", player_id);
	ele.removeClass("stickyEnabled");

	var container = ele.closest(".video");
	var stickyContainer = ele.closest(".stickyEnabled");
	var stickyWrapper = ele.closest(".stickyWrapper");

	this.ready = false;

	var onPlayerReady = function (event) {
		// console.log("The player is ready");
		//player ready stuff
		self.ready = true;
	};

	var onPlayerStateChange = function (event) {
		// console.log("The state has changed");
		console.log("State change", event);
		if (event.data == YT.PlayerState.PLAYING) {
			console.log("Playing");
			isPlaying = true;
		} else {
			isPlaying = false;

			if (sticky === true) {
				stickyContainer.removeClass("sticky");
			}
		}

		//play pause event stuff
	};

	this.player = new YT.Player(player_id, {
		height: height,
		width: width,
		videoId: ele.data("id"),
		events: {
			onReady: onPlayerReady,
			onStateChange: onPlayerStateChange
		}
	});

	this.done = false;

	//abstraction methods in case the YouTube API ever changes
	this.stop = function () {
		self.player.stopVideo();
	};

	this.play = function () {
		self.player.playVideo();
	};

	this.pause = function () {
		self.player.pauseVideo();
	};

	this.mute = function () {
		self.player.mute();
	};

	this.unMute = function () {
		self.player.unMute();
	};

	$(window).on("scroll", function () {
		// console.log("apiReady", apiReady);
		// console.log("self.ready", self.ready);
		if (apiReady === true && self.ready === true) {
			// console.log("Scrolling");
			//if this element is sticky, currently playing and isInView

			if (sticky && isPlaying && !isInView(stickyWrapper)) {
				console.log("Making sticky");
				console.log("Sticky container", stickyContainer);
				stickyContainer.addClass("sticky");
			} else {
				stickyContainer.removeClass("sticky");
			}

			if (isInView(container)) {
				console.log("playing video");
				self.mute();
				self.play();
			} else {
				console.log("Pausing video");
				self.pause();
			}
		}
	});
};

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

function onYouTubeIframeAPIReady() {
	apiReady = true;
	$(".youtube").each(function () {
		videos.push(new CUNY_YT($(this)));
	});
}
