import { useState, useEffect } from "react";
import "./App.css";
import DAPI from "./APIs/DAPI";
import CardList from "./components/CardList";
import Card from "./components/Card";

function App() {
	const getRandomDigimon = () => {};

	const [data, setData] = useState("");
	const [cardList, setCardList] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			const max = 1422;
			const digiNumber = String(Math.floor(Math.random() * max));
			try {
                DAPI.get(digiNumber).then((res) => {
                    setCardList([...cardList, res.data]);
                    console.log(cardList)
				});
			} catch (error) {
				console.log(error);
			}
		};
		for (let i = 0; i < 10; i++) {
            fetchData()
		}
	}, []);
	return (
		<>
			{/* <Card cardData={data} /> */}
			{/* <CardList cardList={cardList} /> */}
		</>
	);
}

export default App;
