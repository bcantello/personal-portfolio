import React from "react";

/**
 * Renders an Instagram social media icon. A className prop can be passed, allowing for different styling to be
 * applied depending on where it is being used.
 * @param props className
 * @returns {JSX.Element} Instagram Icon
 * @constructor
 */
export default function InstagramIcon(props) {
	const className = props.className;

	return (
		<a href="https://www.instagram.com/brandoncantello" target="_blank"
		   rel="nofollow noopener noreferrer" aria-label="Instagram" className={className}>
			<div className={className}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<title>Instagram</title>
					<g>
						<g>
							<path
								d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z"/>
						</g>
					</g>
					<g>
						<g>
							<path
								d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"/>
						</g>
					</g>
					<g>
						<g>
							<circle cx="393.6" cy="118.4" r="17.0556"/>
						</g>
					</g>
				</svg>
			</div>
		</a>
	);
};