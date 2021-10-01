import React from "react";
import "./socialMediaAside.css";
import GithubIcon from "../socialMediaIcons/githubIcon";
import CodepenIcon from "../socialMediaIcons/codepenIcon";
import LinkedInIcon from "../socialMediaIcons/linkedInIcon";
import InstagramIcon from "../socialMediaIcons/instagramIcon";

/**
 * Renders vertical social media links on the side of the page.
 * @returns {JSX.Element}
 * @constructor
 */
export default function SocialMediaAside() {
	return (
		<div className="social-aside-container animation-element fade-up">
			<ul className="social-links">
				<li>
					<GithubIcon/>
				</li>
				<li>
					<CodepenIcon/>
				</li>
				<li>
					<LinkedInIcon/>
				</li>
				<li>
					<InstagramIcon/>
				</li>
			</ul>
		</div>
	);
};