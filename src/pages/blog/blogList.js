import React, {useContext, useState} from "react";
import {UniversalContext} from "../../App";
import BlogListItem from "./blogListItem";
import "./blog.scss";

export default function BlogList() {
	const context = useContext(UniversalContext);
	const [initialBlog, setInitialBlog] = useState(0);
	const [endingBlog, setEndingBlog] = useState(2);
	const blogs = context.blogArray.items;
	let blogArray;

	// TODO: Add button to slide in 3 new blog tiles.
	//  Add default image for blogs with no content image.
	if (blogs !== undefined) {
		let recentBlogs = [];
		for (let i = initialBlog; i <= endingBlog; i++) {
			recentBlogs.push(blogs[i]);
		}
		blogArray = recentBlogs.map((e, index) => {
			return (
				<BlogListItem element={e} key={index}/>
			);
		});
	}

	function nextClick() {
		if (endingBlog !== 5) {
			setInitialBlog(initialBlog + 1);
			setEndingBlog(endingBlog + 1);
		}
		else {
			setInitialBlog(0);
			setEndingBlog(2);
		}
	}

	function previousClick() {
		if (initialBlog !== 0) {
			setInitialBlog(initialBlog - 1);
			setEndingBlog(endingBlog - 1);
		}
		else {
			setInitialBlog(3);
			setEndingBlog(5);
		}
	}

	return (
		<>
			<div id={"blog-tile-container"}>
				{blogArray}
			</div>
			<div id={"blog-button-container"}>
				<div className={"blog-button"} onClick={() => previousClick()}>&#8592; Previous</div>
				<div className={"blog-button"} onClick={() => nextClick()}>Next &#8594;</div>
			</div>
		</>
	);
}
