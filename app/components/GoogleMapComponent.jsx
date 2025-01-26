'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import Loader from '../components/Loader';

const containerStyle = {
  width: '100%',
  height: '818px'
};

const center = {
  lat: 37.437041393899676,
  lng: -4.191635586788259
};




const GoogleMapComponent = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '',
    libraries: ['geometry', 'drawing'],
  });

  return (
    <LoadScript googleMapsApiKey="">

      <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={center} />
      </GoogleMap>

    </LoadScript>


  );
};

export default GoogleMapComponent;


/*

*/