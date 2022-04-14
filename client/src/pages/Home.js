import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


// require('dotenv').config();

const Home = () => {

  
  const mapStyles = {        
    height: "65vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 37.779933, lng: -122.416317
  }
  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 37.779933,
        lng: -122.416317 
      },
    },
    {
      name: "Location ",
      location: { 
        lat: 37.789702,
        lng: -122.432110 
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 37.761074,
        lng: -122.400613 
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

      
    
     <MDBRow>
      <MDBCol md='6' className='col-example'>
       
      <MDBTable>
      <MDBTableHead light>
        <tr>
          <th scope='col'></th>
          <th scope='col'></th>
          <th scope='col'></th>
          <th scope='col'></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'></th>
          <td>Monday</td>
          <td>08:00 AM</td>
          <td>04:00 PM</td>
        </tr>
        <tr>
          <th scope='row'></th>
          <td>Tuesday</td>
          <td>08:00 AM</td>
          <td>04:00 PM</td>
        </tr>
        <tr>
          <th scope='row'></th>
          <td>Wednesday</td>
          <td>08:00 AM</td>
          <td>04:00 PM</td>
        </tr>
        <tr>
          <th scope='row'></th>
          <td>Thursday</td>
          <td>08:00 AM</td>
          <td>04:00 PM</td>
        </tr>
        <tr>
          <th scope='row'></th>
          <td>Friday</td>
          <td>08:00 AM</td>
          <td>04:00 PM</td>
        </tr>
        <tr>
          <th scope='row'></th>
          <td>Saturday</td>
          <td>Closed</td>
          <td></td>
        </tr>
        <tr>
          <th scope='row'></th>
          <td>Sunday</td>
          <td>Closed</td>
          <td></td>
        </tr>
      </MDBTableBody>
    </MDBTable>




      </MDBCol>
      <MDBCol md='6' className='col-example'>
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
      </MDBCol>
    </MDBRow>

    
  






      
     
      </>
     
  )

};

export default Home;
