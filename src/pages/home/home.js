import React, {useRef} from "react";
import {Link} from "react-scroll";
import Navigation from "../../components/navigation/navigation";
import Video from "../../assets/Black_-_13495_bugbes.mp4";
import "./home.css";

export default function Home() {
	const videoRef = useRef();
	const setPlayBack = () => {
		videoRef.current.playbackRate = 0.4;
	};

	return (
		<section id="home" className="flex">
			<div id="videoContainer">
				<video
					id="homeVideo"
					playsInline autoPlay muted loop
					ref={videoRef}
					onCanPlay={() => setPlayBack()}>
					<source src={Video} type="video/mp4" />
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
				<Link
					id="homeButton"
					activeClass="active-nav"
					to="projects"
					spy={true}
					smooth={true}
					offset={-70}
					duration={1000}
				> View my work </Link>
			</div>
		</section>
	);
};