import React, {useContext} from "react";
import {UniversalContext} from "../../App";
import {Carousel} from "react-bootstrap";
import "./blog.scss";

export default function BlogCarousel() {
	const context = useContext(UniversalContext);
	const blogs = context.blogArray.items;
	let blogArray = [];

	const slideOrder = [
		"First slide",
		"Second slide",
		"Third slide",
		"Fourth slide",
		"Fifth slide",
		"Sixth slide"
	];

	if (blogs !== undefined) {
		for (let i = 0; i < 6; i++) {
			let content = blogs[i]["content:encoded"];
			content = content.toString();
			let imageURL = content.substring(content.indexOf("src=") + 5, content.indexOf("/>") - 2);

			blogArray.push(
				<Carousel.Item>
					<div className={"blog-carousel-image-wrapper"}>
						<a className={"blog-element-wrapper"}
						   href={blogs[i].link}
						   target="_blank"
						   rel="nofollow noopener noreferrer">
							<img className={"d-block"}
							     src={imageURL}
							     alt={slideOrder[i]} />
						</a>
						<Carousel.Caption>
							<p className={"blog-title"}>{blogs[i].title}</p>
						</Carousel.Caption>
					</div>
				</Carousel.Item>
			);
		}
	}

	return (
		<>
			<Carousel>
				{blogArray}
			</Carousel>
		</>
	);
}
