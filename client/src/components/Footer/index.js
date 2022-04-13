import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    
     <MDBFooter bgColor='light'  className="w-100 mt-auto bg-success p-4 bottom">
    

     <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
       &copy; {new Date().getFullYear()} Copyright:{' '}
       
        by Madara-Uchiha Team
       
     </div>
   </MDBFooter>
  );
};

export default Footer;
