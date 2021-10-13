import React, {useContext} from "react";
import {Link} from "react-scroll";
import {UniversalContext} from "../../App";
import "./navigation.css";

export default function Navigation() {
	const context = useContext(UniversalContext);

	// Creates nave bar link
	const navLink = (to, name) => [
		<Link
			activeClass="active-nav"
			to={to}
			spy={true}
			smooth={true}
			offset={-70}
			duration={1000}
		> {name} </Link>
	];

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
				{navLink("home", "Home")}
				{navLink("about", "About")}
				{navLink("projects", "Projects")}
				{navLink("contact", "Contact")}
			</div>
			<div id="hamburger">
				<ul id={'toggle'} className={context.hamburgerToggle}>
					<li>
						{navLink("home", "Home")}
					</li>
					<li>
						{navLink("about", "About")}
					</li>
					<li>
						{navLink("projects", "Projects")}
					</li>
					<li>
						{navLink("contact", "Contact")}
					</li>
				</ul>
				<div className={context.hamburgerToggleIcon} onClick={handleHamburgerToggle}>
					<div className="hamburger-icon"/>
				</div>
			</div>
		</nav>
	);
};