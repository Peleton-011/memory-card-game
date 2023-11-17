import React from "react";
import Card from "./Card";

const CardList = ({ cardList }) => {
	return (
		<div>
			{cardList.map((card) => {
				return <Card key={card.id} cardData={card} />
            })}
		</div>
	);
};

export default CardList;
