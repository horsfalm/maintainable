import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_AC } from '../utils/mutations';


const Addac = () => {

    const [formState, setFormState] = useState({ acName: '', acBrand: '', outModel: '', outSerial: '', inModel: '', inSerial: ''});
    const { acName, acBrand, outModel, outSerial, inModel, inSerial } = formState;
    const [addAc, { error }] = useMutation(ADD_AC);
    
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
    };

    return (
        <div className='flex-row justify-space-between'>
            <div className='col-12 mb-3 text-dark'>
                <form className="justify-center justify-space-between-md align-stretch" onSubmit={handleFormSubmit}>
                    <input
                        type="text" defaultValue={acName} onChange={handleChange} name="acName"
                        className='form-input'
                        placeholder='Enter AC Name ...'
                    />
                    <input
                        type="text" defaultValue={acBrand} onChange={handleChange} name="acBrand"
                        className='form-input'
                        placeholder='Enter Brand ...'
                    />
                    <input
                        type="text" defaultValue={outModel} onChange={handleChange} name="outModel"
                        className='form-input'
                        placeholder='Enter Outdoor Unit Model ...'
                    />
                    <input
                        type="text" defaultValue={outSerial} onChange={handleChange} name="outSerial"
                        className='form-input'
                        placeholder='Enter Outdoor Unit Serial ...'
                    />
                    <input
                        type="text" defaultValue={inModel} onChange={handleChange} name="inModel"
                        className='form-input'
                        placeholder='Enter Indoor Unit Model ...'
                    />
                    <input
                        type="text" defaultValue={inSerial} onChange={handleChange} name="inSerial"
                        className='form-input'
                        placeholder='Enter Indoor Unit Serial ...'
                    /><br />
                    <button className='btn ml-auto bg-success' type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Addac;