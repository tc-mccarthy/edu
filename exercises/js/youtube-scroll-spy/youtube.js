const tag = document.createElement('script'),
	firstScriptTag = document.getElementsByTagName('script')[0];

tag.src = "https://www.youtube.com/iframe_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
	$(".youtube").each(function () {
		const $this_player = $(this),
			player_number = $this_player.index(),
			player_id = `player_${player_number}`,
			video_id = $this_player.data("youtube-id");

		let wrapper = "<div class='video'></div>";

		if ($this_player.hasClass("stickyEnabled")) {
			wrapper = "<div class='stickyWrapper'><div class='stickyEnabled'>" + wrapper + "</div></div>";
		}

		$this_player.wrap(wrapper);

		$this_player.attr("id", player_id);

		const player = new YT.Player(player_id, {
			height: '390',
			width: '640',
			videoId: video_id,
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	});
}

function onPlayerReady(event) {
	event.target.playVideo();
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		setTimeout(stopVideo, 6000);
		done = true;
	}
}

function stopVideo() {
	player.stopVideo();
}