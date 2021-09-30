import React, { useState } from "react";
import "./imageSlider.scss";

/**
 * Creates image slider based on a dict of images with each entry of the form:
 * {id: (int), url: (string), alt: (string),}
 * @param props Dictionary of images
 * @returns {JSX.Element}
 * @constructor
 */
export default function ImageSlider(props) {
	const images = props.images;
	const [currentImageID, setCurrentImageID] = useState(1);

	function sliderHandler(id) {
		setCurrentImageID(id);
	}

	return (
		<div className="images">
			{images.map((image) => (
				<img
					className={currentImageID === image.id ? "show-image" : ""}
					src={image.url}
					alt={image.alt}
					key={image.id}
				/>
			))}

			<div className="slider-dots">
				{images.map((button) => (
					<button
						style={currentImageID === button.id ? { background: "white" } : {}}
						key={button.id}
						onClick={() => sliderHandler(button.id)}
					/>
				))}
			</div>
		</div>
	);
}
