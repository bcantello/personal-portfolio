import React from "react";
import "./about.css";

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
								alt={"headshot"}
								className="animation-element slide-right"/>
							<div id="about-content-text" className="flex animation-element slide-left">
								<div id="background-description" className="general-text">
									I was introduced to programming as I was completing my Physics degree at the
									<a
										href="https://www.physics.ucsb.edu/"
										target="_blank"
										rel="nofollow noopener noreferrer"> University of California Santa Barbara</a>
									. I immediately knew that whether paid or unpaid, I would be coding for the rest of
									my life!
									<br/>
									<br/>
									Jump forward a few years and I have had the opportunity to work for
									<a
										href="https://www.payjunction.com/payments/"
										target="_blank"
										rel="nofollow noopener noreferrer"> a payment processing gateway </a>
									,
									<a
										href="http://spacelab.space/"
										target="_blank"
										rel="nofollow noopener noreferrer"> a STEAM inclusion non profit </a>
									, and
									<a
										href="https://www.peoplesvoiceproject.com/"
										target="_blank"
										rel="nofollow noopener noreferrer"> a student lead voting activism initiative</a>
									. Currently I am a Developer at CIO Technologies where I work on their
									<a
										href="https://www.cartrover.com"
										target="_blank"
										rel="nofollow noopener noreferrer"> CartRover </a>
									platform, focussing on the seamless integration of unrelated order management
									platforms and warehouse management systems.
								</div>
								<div className="general-text" id="tech-text">
									A few of the technologies I've been working with lately are:
								</div>
								<ul className="about-skills-container general-text">
									<li className="about-skills-item">React</li>
									<li className="about-skills-item">JavaScript</li>
									<li className="about-skills-item">HTML & CSS</li>
									<li className="about-skills-item">PHP</li>
									<li className="about-skills-item">Python</li>
									<li className="about-skills-item">Java</li>
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