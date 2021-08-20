import React from "react";

export default function About() {
	return (
		<section id="about">
			<div>
				<div className="container flex" id="about-header">
					<div className="header animation-element fade-up">
						ABOUT
					</div>
					<div className="header-bar animation-element fade-up"/>
				</div>
				<div className="flex image-wrapper">
					<div className="headshot-container flex">
						<div id="hero-description" className="general-text animation-element appear">
							I'm a software engineer based in Santa Barbara CA. I enjoy building user centric
							applications and websites that are as intuitive as they are dynamic.
						</div>
						<div id="about-icon-container" className="animation-element fade-up">
							<div className="about-icon">
								<i className="far fa-lightbulb"/>
								<p className="about-icon-header">Intuitive</p>
								<p className="general-text">Applications must have easy to use, intuitive UI/UX.</p>
							</div>
							<div className="about-icon">
								<i className="fas fa-mobile-alt"/>
								<p className="about-icon-header">Responsive</p>
								<p className="general-text">Adaptive to any screen size, designed mobile first.</p>
							</div>
							<div className="about-icon">
								<i className="fas fa-atom"/>
								<p className="about-icon-header">Dynamic</p>
								<p className="general-text">Exciting, non-static pages that come to life.</p>
							</div>
						</div>
						<div id="about-content" className="flex">
							<img
								src="https://res.cloudinary.com/bcantello/image/upload/v1583869472/profileImage_fhbk6l.png"
								id="headshot"
								className="animation-element slide-right"/>
							<div id="about-content-text" className="flex animation-element slide-left">
								<div id="background-description" className="general-text">
									Shortly after graduating from the
									<a href="https://www.physics.ucsb.edu/"
									   target="_blank"
									   rel="nofollow noopener noreferrer">University of California Santa Barbara</a>
									, I joined the engineering team at
									<a href="https://www.payjunction.com/payments/"
									   target="_blank"
									   rel="nofollow noopener noreferrer">PayJunction</a>
									as an entry level software engineer. While there I further honed my skills as an
									engineer in a test driven development environment.
								</div>
								<div className="general-text" id="tech-text">
									Some technologies I've been working with lately:
								</div>
								<ul className="about-skills-container general-text">
									<li className="about-skills-item">Java</li>
									<li className="about-skills-item">JavaScript</li>
									<li className="about-skills-item">HTML & CSS</li>
									<li className="about-skills-item">React</li>
									<li className="about-skills-item">Python</li>
									<li className="about-skills-item">Django</li>
									<li className="about-skills-item">Node.js</li>
									<li className="about-skills-item">Express</li>
									<li className="about-skills-item">Mongo</li>
									<li className="about-skills-item">SQL</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};