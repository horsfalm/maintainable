import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// require('dotenv').config();

const Home = () => {

  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 41.3954,
        lng: 2.162 
      },
    },
    
  ];

  
  return (
    <>
    <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('/background-img.png')", height: "600px" }}
      ></div>
      <br />
      <LoadScript
       googleMapsApiKey='AIzaSyDcaL5-LyYHFDcMKtPdRDjRQIpNbUD0p08'>
       <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
     </GoogleMap>
     </LoadScript>
     
      </>
     
  )

};

export default Home;
