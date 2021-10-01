import React from "react";
import "./socialMediaAside.css";
import GithubIcon from "../socialMediaIcons/githubIcon";
import LinkedInIcon from "../socialMediaIcons/linkedInIcon";
import InstagramIcon from "../socialMediaIcons/instagramIcon";

/**
 * Renders vertical social media links on the side of the page.
 * @returns {JSX.Element} Social media side bar
 * @constructor
 */
export default function SocialMediaAside() {
	return (
		<div className="social-aside-container animation-element fade-up">
			<ul className="social-links">
				<li>
					<GithubIcon className={'social-aside-icon'}/>
				</li>
				<li>
					<LinkedInIcon className={'social-aside-icon'}/>
				</li>
				<li>
					<InstagramIcon className={'social-aside-icon'}/>
				</li>
			</ul>
		</div>
	);
};