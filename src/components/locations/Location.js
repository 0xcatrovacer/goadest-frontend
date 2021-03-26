import { useEffect, useState } from "react";
import MainSection from "./MainSection";
import RadiusFilter from "./RadiusFilter";
import OptionFilter from "./OptionFilter";
import axios from "axios";
import Search from "./Search";
import { config } from "../../config";

const Location = () => {
	const [distance, setDistance] = useState(0);
	const [option, setOption] = useState("all");
	const [searchValue, setSearchValue] = useState("");
	const [locations, setLocations] = useState(null);

	const location = { distance, typeofplace: option };

	const handleChange_distance = (e) => {
		setDistance(e.target.value);
	};
	const handleChange_option = (e) => {
		setOption(e.target.value);
	};
	const handleSearchChange = (e) => {
		setSearchValue(e.target.value);
	};

	const handleFindDest = () => {
		axios({
			url: `${config.backendUrl}/travelplaces`,
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			data: location,
		})
			.then((res) => {
				setLocations(res.data);
			})
			.catch((e) => {
				console.log(e.message);
			});
	};

	return (
		<div>
			<div className="styles.searchHolder">
				<Search value={searchValue} onChange={handleSearchChange} />
			</div>
			<section className="container">
				<div className="styles.main">
					<MainSection locations={locations} />
				</div>
				<div className="filters">
					<h4>Filters</h4>
					<RadiusFilter onChange={handleChange_distance} distance={distance} />
					<OptionFilter onChange={handleChange_option} option={option} />
				</div>
				<button onClick={handleFindDest}> Find Destinations </button>
			</section>
		</div>
	);
};

export default Location;
