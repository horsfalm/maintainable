import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

export default function Loginemployee() {
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="row justify-content-center">Employee Login</h2>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "100px", width: "50% " }}>
        <div className="row gx-6 ">
          <form>
            <MDBInput wrapperClass="mb-4" id="form6Example3" label="Username" />
            <MDBInput
              wrapperClass="mb-4"
              type="email"
              id="form6Example5"
              label="Email"
            />
            <MDBBtn className="mb-4" type="submit" block>
              Sign in
            </MDBBtn>
          </form>
        </div>
      </div>
    </>
  );
}
