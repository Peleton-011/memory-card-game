import React from "react";

const Card = ({ cardData: { name, images }, firstClick, secondClick }) => {
	let isFirstClick = true;

	return (
		<div
			style={{ cursor: "pointer", width: "15rem", height: "25rem" }}
			onClick={(e) => {
				if (isFirstClick) {
					firstClick(e);
					isFirstClick = false;
				} else {
					secondClick(e);
				}
			}}
		>
			<h2>Card</h2>{" "}
			<img
				style={{ width: "15rem", height: "15rem" }}
				src={
					images &&
					images[Math.floor(Math.random() * images.length)].href
				}
				alt="digimon image"
			/>
			<h3>{name}</h3>
		</div>
	);
};

export default Card;
