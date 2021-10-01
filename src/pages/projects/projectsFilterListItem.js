import React from "react";
import ImageSlider from "../../components/imageSlider/imageSlider";

export default function ProjectsFilterListItem(props) {
	const projectElements = props.element;
	const projectImages = [];
	const projectDetails = [
		<div className={'project-title'}> {projectElements[3]['title']} </div>,
		<div> {projectElements[3]['description']} </div>,
		<div> {projectElements[3]['technologies']} </div>,
		<div> {projectElements[3]['url']} </div>,
	];

	if (projectElements[3]['gitRepo'] !== null) {
		projectDetails.push(<div> {projectElements[3]['gitRepo']} </div>);
	}

	for (let i = 0; i < 3; i++) {
		projectImages.push(projectElements[i]);
	}

	// console.log(projectImages);

	return (
		<>
			<div className={'project-wrapper'}>
				<ImageSlider images={projectImages}/>
				<div className="project">
					{projectDetails}
				</div>
			</div>
		</>
	);
};