import React from "react";
import BlogCarousel from "./blogCarousel";

export default function Blog() {
	return (
		<section id={"blog"}>
			<div>
				<div className="container flex" id="blog-header">
					<div className="header animation-element fade-up">
						FEATURED BLOGS
					</div>
					<div className="header-bar animation-element fade-up"/>
				</div>
				<div id={"blog-gallery"}>
					<BlogCarousel/>
				</div>
			</div>
		</section>
	);
};