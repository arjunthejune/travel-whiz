'use client'

import React from "react";



const CurrentLocation = () => {

    const[disabled, setDisabled] = React.useState(false);

    return (
        <button
            disabled={disabled}
            onClick={() => {
                setDisabled(true);
                navigator.geolocation.getCurrentPosition(position => {
                    setDisabled(false);
                    console.log({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                });
            }}
        >
        {disabled ? <p>Searching...</p> : <p>Get Current Position</p>}
        </button>
    )
}

export default CurrentLocation;