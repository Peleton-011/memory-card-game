import { useState, useEffect } from "react";
import "./App.css";
import DAPI from "./APIs/DAPI";

function App() {

    const getRandomDigimon = () => {

    }

	const [data, setData] = useState("");
    const [cardList, setCardList] = useState(Array(10));

	useEffect(() => {
		const fetchData = () => {
            const max = 1422
            const digiNumber = String(Math.floor(Math.random() * max))
			try {
				DAPI.get(digiNumber).then((res) => {
					console.log(res.data);
					setData(res.data);
				});
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return <>
    <img src={data.images && data.images[0].href} alt="digimon image" />
    <h3>{data.name}</h3>
    </>;
}

export default App;
