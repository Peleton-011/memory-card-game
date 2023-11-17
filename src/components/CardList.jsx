import React from "react";
import Card from "./Card";

const CardList = ({ cardList }) => {
	return <div>
        {
            cardList.map((card, index) => {
                return <Card key={index} cardData={card} />
            })
        }
    </div>;
};

export default CardList;
