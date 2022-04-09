import React from "react";
import { MDBBtn } from 'mdb-react-ui-kit';


function Techdashbord() {
  return (
    <>
         
      <div class="container">
        <div
          class="row gx-12 justify-content-around"
          style={{ marginTop: "100px" }}
        >
          <MDBBtn rounded style={{ marginBottom: "20px", width:"150px" }}>Add customer</MDBBtn>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Look for customer by email"
              aria-label="Username"
              aria-describedby="basic-addon"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Techdashbord;
