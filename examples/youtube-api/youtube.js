var CUNY_YT = function (ele) {
	var self = this,
		width = ele.width(),
		height = width * .5625;

	if (typeof window.player_counter === "undefined") {
		window.player_counter = 0;
	}

	window.player_counter++;

	var player_id = "cuny_player_" + window.player_counter;

	ele.attr("id", player_id);

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

	var onPlayerReady = function (event) {
		event.target.playVideo();
	};

	var onPlayerStateChange = function (event) {
		if (event.data == YT.PlayerState.PLAYING && !self.done) {
			setTimeout(stopVideo, 6000);
			self.done = true;
		}
	}

	this.stop = function () {
		self.player.stopVideo();
	}

};

var videos = [];

function onYouTubeIframeAPIReady() {
	$(".youtube").each(function () {
		videos.push(new CUNY_YT($(this)));
	});
}
