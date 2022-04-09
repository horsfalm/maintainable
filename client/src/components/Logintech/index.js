import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_TECH } from '../../utils/mutations';
import Auth from '../../utils/auth';

import {
  MDBInput,
  MDBBtn,
 } from "mdb-react-ui-kit";

 const Logintech = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [loginTech, { error }] = useMutation(LOGIN_TECH);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginTech({
        variables: { ...formState },
      });

      Auth.loginTech(data.loginTech.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="row justify-content-center">Technician Login </h2>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "100px", width: "50% " }}>
        <div className="row gx-6 ">
          <form onSubmit={handleFormSubmit}>
            <MDBInput wrapperClass="mb-4" 
            id="form6Example3" 
            label="Email" 
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              name="password"
              type="password"
              id="form6Example5"
              label="Password"
              value={formState.password}
              onChange={handleChange}
            />
            <MDBBtn className="mb-4" type="submit" block>
              Sign in
            </MDBBtn>
          </form>
          {error && <div>Login failed</div>}
        </div>
      </div>
    </>
  );
}
export default Logintech;