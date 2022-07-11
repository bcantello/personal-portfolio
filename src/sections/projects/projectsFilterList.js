import React from "react";
import {projectInfoArray} from "./projectsHelper";
import ProjectsFilterListItem from "./projectsFilterListItem";

export default function ProjectsFilterList() {

	const projectsArray = projectInfoArray.map((e, index) => {
		return (
			<ProjectsFilterListItem element={e} key={index}/>
		);
	});

	return (
		<>
			{projectsArray}
		</>
	);
};
