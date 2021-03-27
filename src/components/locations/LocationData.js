import React from 'react'
import Styles from './Location.module.css'
import getDistfromCoords from '../../getdistance'

function LocationData({ placename, address, description, typeofplace, image, latitude, longitude }) {

    const distance = Math.trunc(getDistfromCoords(latitude.$numberDecimal, longitude.$numberDecimal))

    console.log(distance)

    return (
        <div className={Styles.cell}>

            <div className={Styles.imgContainer}>
                <img
                    className={Styles.img}
                    src={image}
                />
            </div>

            <div className={Styles.textContainer}>
                <h2>{placename}</h2>
                <p>{description}</p>
                <p>Type of location:{typeofplace} <br /> Distance from campus: {distance}</p>
                <p>Address: {address}</p>
            </div>

            <iframe
                title={placename}
                className={Styles.map}
                src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=12&amp;&output=embed`}
                width="150"
                height="150"
                scrolling="yes"
            >
            </iframe>

        </div>
    )
}

export default LocationData