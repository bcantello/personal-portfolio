import React from "react";
import "./projects.scss";
import ProjectsFilterList from "./projectsFilterList";

export default function Projects() {
	return (
		<section id="projects">
			<div>
				<div className="header flex animation-element fade-up">PROJECTS</div>
				<div className="header-bar animation-element fade-up"/>
				<div id="blue-skewy"/>
				<div id="gallery" className="animation-element fade-up">
					<ProjectsFilterList/>
				</div>
			</div>
		</section>
	);
};