import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const CardList = ({ cardList, lose, setCount, count }) => {
	const [newCardList, setNewCardList] = useState(
		cardList.map((card) => {
			return {
				...card,
				isFirstClick: true,
			};
		})
	);

	useEffect(() => {
		(async () => {
			console.log("aaaaaa");
			await new Promise((res) => setTimeout(res, 1000));
			setNewCardList(
				cardList.map((card) => {
					return {
						...card,
						isFirstClick: true,
					};
				})
			);
			console.log("ahadsgd");
		})();
	}, [cardList]);

	const shuffle = (argArray) => {
		const array = [...argArray]; // make a copy of the array
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex > 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}
		console.log(array);

		return array;
	};

	const getFirstClick = (id) => {
		return () => {
            setCount(count + 1)
			const newnew = shuffle(newCardList).map((card) => {
				if (card.id === id) {
					return {
						...card,
						isFirstClick: false,
					};
				}
				return card;
			});
			setNewCardList(newnew);
		};
	};

	const secondClick = () => {
		setCount(0)
		lose();
	};

	return (
		<div style={{ display: "flex", flexFlow: "row wrap", gap: "1rem" }}>
			{newCardList.map((card) => {
				return (
					<Card
						key={card.id}
						cardData={card}
						firstClick={getFirstClick(card.id)}
						secondClick={secondClick}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
