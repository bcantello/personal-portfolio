import React from "react";

/**
 * Renders a External Link icon. Props for a link and a className can be passed, allowing for the icon to
 * point to different repositories, and for styling to be applied differently depending on where it is being used.
 * @param props Accepts a 'link' prop and a 'className' prop
 * @returns {JSX.Element} External Link icon
 * @constructor
 */
export default function ExternalLinkIcon(props) {
	const externalLink = props.link;
	const className = props.className;

	return (
		<a href={externalLink}
		   aria-label="External Link"
		   className={className}
		   rel="noopener noreferrer"
		   target="_blank">
			<svg xmlns="http://www.w3.org/2000/svg"
			     role="img"
			     viewBox="0 0 24 24"
			     fill="none"
			     stroke="currentColor"
			     strokeWidth="2"
			     strokeLinecap="round"
			     strokeLinejoin="round"
			     data-darkreader-inline-stroke="">
				<title>External Link</title>
				<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
				<polyline points="15 3 21 3 21 9"/>
				<line x1="10" y1="14" x2="21" y2="3"/>
			</svg>
		</a>
	);
};
