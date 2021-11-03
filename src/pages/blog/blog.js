import React from "react";
import BlogList from "./blogList";

export default function Blog() {
	return (
		<section id={"blog"}>
			<div>
				<div className="container flex" id="blog-header">
					<div className="header animation-element fade-up">
						BLOG
					</div>
					<div className="header-bar animation-element fade-up"/>
				</div>
				<div id={"blog-gallery"}>
					<BlogList/>
				</div>
			</div>
		</section>
	);
};