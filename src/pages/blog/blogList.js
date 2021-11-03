import React, {useContext} from "react";
import {UniversalContext} from "../../App";
import BlogListItem from "./blogListItem";
import "./blog.scss";

export default function BlogList() {
	const context = useContext(UniversalContext);
	const blogs = context.blogArray.items;
	let blogArray;

	// TODO: Add button to slide in 3 new blog tiles.
	//  Add default image for blogs with no content image.
	if (blogs !== undefined) {
		let recentBlogs = [];
		for (let i = 0; i < 3; i++) {
			recentBlogs.push(blogs[i]);
		}
		blogArray = recentBlogs.map((e, index) => {
			return (
				<BlogListItem element={e} key={index}/>
			);
		});
	}

	return (
		<div id={"blog-tile-container"}>
			{blogArray}
		</div>
	);
}
