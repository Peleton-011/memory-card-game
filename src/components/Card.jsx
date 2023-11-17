import React from "react";

const Card = ({ cardData: { name, images, onClick } }) => {
	return (
		<div>
			<h2>Card</h2>{" "}
			<img
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
