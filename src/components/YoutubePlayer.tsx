import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export default function YoutubePlayer({ videoId }: { videoId: string }) {
	const onPlayerReady: YouTubeProps["onReady"] = (event) => {
		// access to player in all event handlers via event.target
		// event.target.pauseVideo();
	};

	const opts: YouTubeProps["opts"] = {
		width: "100%",
		height: "350px",

		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
}
