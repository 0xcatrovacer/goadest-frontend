import { useEffect, useState } from "react";
import MainSection from "./MainSection";
import RadiusFilter from "./RadiusFilter";
import OptionFilter from "./OptionFilter";
import axios from "axios";
import Search from "./Search";
import Styles from './Location.module.css';
import { config } from "../../config";

const Location = () => {
    const [distance, setDistance] = useState(0);
    const [option, setOption] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    const [locations, setLocations] = useState(null);

    const location = { distance, typeofplace: option };

    const handleChange_distance = (e) => {
        const flag = (e.target.value !== distance);
        setDistance(e.target.value);
        if (flag == true) {
            handleFindDest();
        }
    };
    const handleChange_option = (e) => {
        const flag = (e.target.value !== option);
        setOption(e.target.value);
        if (flag == true) {
            handleFindDest();
        }
    };
    const handleSearchChange = (e) => {
        const flag = (e.target.value !== searchValue);
        setSearchValue(e.target.value);
        if (flag == true) {
            handleFindDest();
        }
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
        <div className={Styles.locationContainer}>
            <div className={Styles.searchHolder}>
                <Search value={searchValue} onChange={handleSearchChange} />
            </div>
            <section className={Styles.container}>
                <div className={Styles.main}>
                    <MainSection locations={locations} />
                </div>
                <div className={Styles.filters}>
                    <h4>Filters</h4>
                    <RadiusFilter onChange={handleChange_distance} distance={distance} />
                    <OptionFilter onChange={handleChange_option} option={option} />
                </div>
            </section>
        </div>
    );
};

export default Location;