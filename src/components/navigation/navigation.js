import React from "react";
import "./navigation.css";

export default function Navigation() {
	return (
		<nav id="site-nav">
			<div id="desktop-nav">
				<a href="#home" className="animation-element fade-down active">Home</a>
				<a href="#about" className="animation-element fade-down" id="about-link">About</a>
				<a href="#projects" className="animation-element fade-down" id="projects-link">Projects</a>
				{/*<a href="#blog" class="animation-element fade-down" id="blog-link">Blog</a>*/}
				<a href="#contact" className="animation-element fade-down" id="contact-link">Contact</a>
			</div>
			<div id="hamburger">
				<ul className="open">
					<li><a href="#home" className="menu-toggle">Home</a></li>
					<li><a href="#about" className="menu-toggle">About</a></li>
					<li><a href="#projects" className="menu-toggle">Projects</a></li>
					{/*<li><a href="#blog" class="menu-toggle">Blog</a></li>*/}
					<li><a href="#contact" className="menu-toggle">Contact</a></li>
				</ul>
				<div className="hamburger-toggle">
					<div className="hamburger"/>
				</div>
			</div>
		</nav>
	);
};