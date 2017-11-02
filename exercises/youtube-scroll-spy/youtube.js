var CUNY_YT = function (ele) {
	var self = this,
		width = ele.width(),
		height = width * .5625;

	if (typeof window.player_counter === "undefined") {
		window.player_counter = 0;
	}

	window.player_counter++;

	var player_id = "cuny_player_" + window.player_counter,
		wrapper = "<div class='video'></div>";

	if (ele.hasClass("stickyEnabled")) {
		wrapper = "<div class='stickyEnabled'>" + wrapper + "</div>";
	}

	ele.wrap(wrapper);
	ele.attr("id", player_id);

	var onPlayerReady = function (event) {
		console.log("The player is ready");
		//player ready stuff
	};

	var onPlayerStateChange = function (event) {
		console.log("The state has changed");
		//play pause event stuff
	}

	this.player = new YT.Player(player_id, {
		height: height,
		width: width,
		videoId: ele.data("id"),
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});

	this.done = false;

	//abstraction methods in case the YouTube API ever changes
	this.stop = function () {
		self.player.stopVideo();
	}

	this.play = function () {
		self.player.playVideo();
	}

};

var videos = [];

function onYouTubeIframeAPIReady() {
	$(".youtube").each(function () {
		videos.push(new CUNY_YT($(this)));
	});
}
