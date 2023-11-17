import axios from "axios";

//const TOKEN = "";

export default axios.create({
	baseURL: "https://www.digi-api.com/api/v1/digimon/",
	//params: {
	//	token: TOKEN,
	//},
});