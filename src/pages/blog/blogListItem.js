import React from "react";
import "./blog.scss";

export default function BlogListItem(props) {
	const blogElements = props.element;
	let content = blogElements.content;
	let imageURL;

	if (content !== undefined) {
		content = content.toString();
		imageURL = content.substring(content.indexOf("img src=") + 9, content.lastIndexOf("width") - 2);
	}

	return (
		<a className={"blog-element-wrapper"}
		   href={blogElements.link}
		   target="_blank"
		   rel="nofollow noopener noreferrer">
			<div className={"blog-element-container"}>
				<img className={"blog-image"} src={imageURL} alt={"blog-pic"} />
				<div className={"blog-title"}>{blogElements.title}</div>
			</div>
		</a>
	);
}