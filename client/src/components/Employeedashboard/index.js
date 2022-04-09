import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";

function Employeedashboard() {
  return (
    <>
      <div class="container">
        <div
          class="row gx-12 justify-content-around"
          style={{ marginTop: "100px" }}
        >
          <div className=" d-flex align-items-center justify-content-center">
            <MDBBtn rounded style={{ marginBottom: "10px", width: "150px" }}>
              Add customer
            </MDBBtn>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <MDBBtn rounded style={{ marginBottom: "10px", width: "150px" }}>
              Add Technician
            </MDBBtn>
          </div>
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

export default Employeedashboard;
