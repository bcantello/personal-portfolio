import React from "react";
import "./footer.css";
import GithubIcon from "../socialMediaIcons/githubIcon";
import LinkedInIcon from "../socialMediaIcons/linkedInIcon";
import InstagramIcon from "../socialMediaIcons/instagramIcon";

/**
 * Renders Footer
 * @returns {JSX.Element} Footer
 * @constructor
 */
export default function Footer() {
	return (
		<footer className="flex">
			<div id="footer-social-wrapper">
				<GithubIcon className={'footer-social-icon'}/>
				<LinkedInIcon className={'footer-social-icon'}/>
				<InstagramIcon className={'footer-social-icon'}/>
			</div>
			<div id="footer-copyright-container">
				<div id="footnote">
					Designed and built by Brandon Cantello <span>&copy; 2020</span>
				</div>
			</div>
		</footer>
	);
};
