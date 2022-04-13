import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    
    <main className='is-flex is-flex-direction-row is-justify-content-center m-6' style={{ backgroundImage: "url('./MaintainabeLogin.svg')", backgroundSize: "cover", height: "43rem"  }}>
      <div className='col-6 '>
        <div className='card'>
          <h4 className='card-header'>Login</h4>
          <div className='field'>
            <form className="is-flex is-flex-direction-column is-justify-content-center mt-2 p-4" onSubmit={handleFormSubmit}>
              <input
                className="form-input input mt-2"
                placeholder='Email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />   
              <input
                className='form-input input mt-2'
                placeholder='********'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='button is-warning is-medium mt-2' type='submit'>
                Submit
              </button>
            </form>
            {error && <div>login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
