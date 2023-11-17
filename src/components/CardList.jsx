import React from "react";
import Card from "./Card";

const CardList = ({ cardList }) => {

    const firstClick = () => {
        console.log("first click");
    }
    
    const secondClick = () => {
        console.log("second click");
    }

	return (
		<div style={{ display: "flex", flexFlow: "row wrap", gap: "1rem" }}>
			{cardList.map((card) => {
				return <Card key={card.id} cardData={card} firstClick={firstClick} secondClick={secondClick} />;
			})}
		</div>
	);
};

export default CardList;
