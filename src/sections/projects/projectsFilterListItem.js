import React from "react";
import ImageSlider from "../../components/imageSlider/imageSlider";
import GithubIcon from "../../components/socialMediaIcons/githubIcon";
import ExternalLinkIcon from "../../components/socialMediaIcons/externalLinkIcon";

export default function ProjectsFilterListItem(props) {
	const projectElements = props.element;
	const projectImages = [];
	const projectLinks = [
		<div className={'project-external'}>
			<ExternalLinkIcon link={projectElements[3]['url']} className={'external'} />
		</div>
	];
	const projectDetails = [
		<div className={'project-title'}> {projectElements[3]['title']} </div>,
		<div className={'project-description'}> {projectElements[3]['description']} </div>,
		<div className={'project-technologies'}> {projectElements[3]['technologies']} </div>,
		<div className={'project-links'}>
			{projectLinks}
		</div>
	];

	if (projectElements[3]['gitRepo'] !== null) {
		projectLinks.push(
			<div className={'project-git'}>
				<GithubIcon link={projectElements[3]['gitRepo']}/>
			</div>
		);
	}

	for (let i = 0; i < 3; i++) {
		projectImages.push(projectElements[i]);
	}

	return (
		<>
			<div className={'project-wrapper'}>
				<div className={'mobile-project-title-wrapper'}>
					<div className={'mobile-featured-project'}> Featured Project </div>
					<div className={'mobile-project-title'}> {projectElements[3]['title']} </div>
				</div>
				<ImageSlider images={projectImages}/>
				<div className="project">
					<div className={'featured-project'}> Featured Project </div>
					{projectDetails}
				</div>
			</div>
		</>
	);
};