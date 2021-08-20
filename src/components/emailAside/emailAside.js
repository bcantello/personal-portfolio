import React from "react";
import "./emailAside.css";

export default function EmailAside() {
	return (
		<div className="email-aside-container animation-element fade-up">
			<div className="email-aside-wrapper">
				<a href="mailto:bcantello@gmail.com" className="email-aside-link">bcantello@gmail.com</a>
			</div>
		</div>
	);
};