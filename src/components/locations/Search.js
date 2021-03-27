import axios from "axios";
import { useState } from "react";
import { config } from "../../config";
import styles from "./Location.module.css";
import LocationData from "./LocationData";

const Search = ({ value, onChange }) => {
    const [location, setLocation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            url: `${config.backendUrl}/search`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                userSearch: value,
            },
        })
            .then((res) => {
                setLocation(res.data);
            })
            .catch((e) => {
                console.log(e.message);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className={styles.search} type="text" value={value} onChange={onChange} />
                <input id="button" type="submit" value="Submit" />
            </form>
            {location && (
                <LocationData
                    placename={location.placename}
                    address={location.address}
                    description={location.description}
                    typeofplace={location.typeofplace}
                    latitude={location.latitude}
                    longitude={location.longitude}
                    image={location.imageurl}
                />
            )}
        </div>
    );
};

export default Search;
