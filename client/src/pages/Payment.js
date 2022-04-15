import React from "react";
import StripeContainer from "../components/StripeContainer";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  
} from "mdb-react-ui-kit";

function Payment() {
  return (
    <>
      <MDBCard
        className="App"
        style={{
          maxWidth: "50rem",
          marginTop: " 260px",
          marginBottom: "280px",
        }}
      >
        <MDBCardBody>
          <MDBCardTitle>Maintainable</MDBCardTitle>
          <MDBCardText>
            Your payment for the service is going to be 50$
          </MDBCardText>
          <StripeContainer />
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default Payment;
