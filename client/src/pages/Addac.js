import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_AC } from '../utils/mutations';


const Addac = () => {
    const customerIdd = window.location.toString().split('/')[window.location.toString().split('/').length -2];

    // function refreshPage(){ 
    //     window.location.href = `/customer/${customerIdd}`; 
    // }
    const [formState, setFormState] = useState({ acName: '', acBrand: '', outModel: '', outSerial: '', inModel: '', inSerial: ''});
    const { acName, acBrand, outModel, outSerial, inModel, inSerial } = formState;
    const [addAc, { error }] = useMutation(ADD_AC);
    console.log(customerIdd);
    const handleChange = event => {
        setFormState({...formState, [event.target.name]: event.target.value })
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        const customerId = window.location.toString().split('/')[window.location.toString().split('/').length -2];
        console.log(formState);
        console.log(customerId);


        try {
            await addAc({
                variables: { customerId: customerId, ...formState }
            });
      
        } catch (e) {
          console.error(e);
      }
      window.location.href = `/customer/${customerId}`; 

    };
    
    
    return (
        <div className='card mb-3'>
            <div className="card-header">Enter AC Details</div>
            <div className="card-body">
                <form className="justify-center justify-space-between-md align-stretch" onSubmit={handleFormSubmit}>
                    <input
                        type="text" defaultValue={acName} onChange={handleChange} name="acName"
                        className='form-input'
                        placeholder='Enter AC Name ...'
                        value={formState.acName}
                    />
                    <input
                        type="text" defaultValue={acBrand} onChange={handleChange} name="acBrand"
                        className='form-input'
                        placeholder='Enter Brand ...'
                        value={formState.acBrand}
                    />
                    <input
                        type="text" defaultValue={outModel} onChange={handleChange} name="outModel"
                        className='form-input'
                        placeholder='Enter Outdoor Unit Model ...'
                        value={formState.outModel}
                    />
                    <input
                        type="text" defaultValue={outSerial} onChange={handleChange} name="outSerial"
                        className='form-input'
                        placeholder='Enter Outdoor Unit Serial ...'
                        value={formState.outSerial}

                    />
                    <input
                        type="text" defaultValue={inModel} onChange={handleChange} name="inModel"
                        className='form-input'
                        placeholder='Enter Indoor Unit Model ...'
                        value={formState.inModel}
                    />
                    <input
                        type="text" defaultValue={inSerial} onChange={handleChange} name="inSerial"
                        className='form-input'
                        placeholder='Enter Indoor Unit Serial ...'
                        value={formState.inSerial}
                    /><br />
                    
                    <button  
                        className='btn ml-auto w-100 bg-success' 
                        type='submit'
                        // onClick={() => setFormState('')}
                        // onClick={refreshPage}
                        
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Addac;