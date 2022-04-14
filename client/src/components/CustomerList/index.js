import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';


const CustomerList = ({ customers }) => {
  if (!customers.length) {
    return <h3>No Customers Yet</h3>;
  }

  return (
   
    <>
    <div>
    <MDBBtn className='btn ml-auto bg-success' color='success'><Link to={`/addcustomer`}>+ Customer</Link></MDBBtn><br/><br/>
    </div>
    {customers &&
         customers.map(customer => (
          <MDBCard style={{ maxWidth: "77rem" }}>
          <MDBCardHeader>
            <Link to={`/customer/${customer._id}`}>
              <div> {customer.name}</div>
            </Link>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardText>
              <p>{customer.address}</p>
              <p>{customer.phone}</p>{" "}
              <MDBBtn className='btn ml-auto  bg-success' color='success'>Update</MDBBtn>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
            

     ))}
    </>
  );
};

export default CustomerList;