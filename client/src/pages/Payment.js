import React from 'react'
import { useState } from 'react';
import StripeContainer from '../components/StripeContainer';

function Payment() {
  
   
	return (
		<div className='App'>
			<h1 className='h1'>Maintainable</h1>
      <p className='h1'>
        Your payment for the service is going to be 50$
      </p>
				<StripeContainer />
				
		</div>
	);

}

export default Payment