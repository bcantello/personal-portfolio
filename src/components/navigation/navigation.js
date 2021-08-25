import React, {useContext} from "react";
import {UniversalContext} from "../../App";
import "./navigation.css";

export default function Navigation() {
	const context = useContext(UniversalContext);

	// Open and close hamburger menu
	const handleHamburgerToggle = () => {
		let toggle = document.getElementById('toggle');
		if (toggle.className === "open") {
			context.setHamburgerToggle("opening");
			context.setHamburgerToggleIcon('hamburger-toggle opening');
		}
		else {
			context.setHamburgerToggle("open");
			context.setHamburgerToggleIcon('hamburger-toggle');
		}
	};

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
				<ul id={'toggle'} className={context.hamburgerToggle}>
					<li><a href="#home" className="menu-toggle" onClick={handleHamburgerToggle}>Home</a></li>
					<li><a href="#about" className="menu-toggle" onClick={handleHamburgerToggle}>About</a></li>
					<li><a href="#projects" className="menu-toggle" onClick={handleHamburgerToggle}>Projects</a></li>
					{/*<li><a href="#blog" class="menu-toggle" onClick={handleHamburgerToggle}>Blog</a></li>*/}
					<li><a href="#contact" className="menu-toggle" onClick={handleHamburgerToggle}>Contact</a></li>
				</ul>
				<div className={context.hamburgerToggleIcon} onClick={handleHamburgerToggle}>
					<div className="hamburger-icon"/>
				</div>
			</div>
		</nav>
	);
};