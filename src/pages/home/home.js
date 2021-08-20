import React from "react";
import Navigation from "../../components/navigation/navigation";
import Video from "../../assets/Black_-_13495_bugbes.mp4";

export default function Home() {
	return (
		<section id="home" className="flex">
			<div id="videoContainer">
				<video id="homeVideo" playsInline autoPlay muted loop>
					<script>document.getElementById('homeVideo').playbackRate = 0.4</script>
					<source src={Video} type="video/mp4"/>
				</video>
			</div>
			<div id="home-content-container">

				<Navigation/>

				<div id="homeText" className="animation-element appear">
					<span>Hi, my name is </span>
					<span id="homeName">Brandon Cantello</span><span>.</span>
					<br/>
						<span>I build things for the web.</span>
				</div>
				<a id="homeButton" className="animation-element appear" href="#projects">
					View my work
				</a>
			</div>
		</section>
	);
};