import { useState, useEffect } from "react";
import "./App.css";
import DAPI from "./APIs/DAPI";
import CardList from "./components/CardList";
import { v4 as uuid } from "uuid";

function App() {
	const [cardList, setCardList] = useState([]);
	const [boolian, setBoolian] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const max = 1422;
			const newCardList = [];

			for (let i = 0; i < 10; i++) {
				const digiNumber = String(Math.floor(Math.random() * max));
				try {
					DAPI.get(digiNumber).then((res) => {
						newCardList[i] = {
							images: res.data.images,
							name: res.data.name,
							digiId: res.data.id,
							id: uuid(),
						};
					});
				} catch (error) {
					console.log(error);
				}
			}
			await new Promise((res) => setTimeout(res, 1000));
			setCardList(newCardList);
		};

		fetchData();
	}, [boolian]);

	return (
		<>
			<button onClick={() => window.location.reload(true)}>Regen</button>
			<button onClick={() => setBoolian(!boolian)}>Soft Regen</button>

			<CardList cardList={cardList} />
		</>
	);
}

export default App;
