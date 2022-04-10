import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Addac = () => {

    


    return (
        <div className='flex-row justify-space-between'>
            <div className='col-12 mb-3 text-dark'>
                <form className="justify-center justify-space-between-md align-stretch">
                    <input
                        className='form-input'
                        placeholder='Enter AC Name ...'
                    />
                    <input
                        className='form-input'
                        placeholder='Enter Brand ...'
                    />
                    <input
                        className='form-input'
                        placeholder='Enter Outdoor Unit Model ...'
                    />
                    <input
                        className='form-input'
                        placeholder='Enter Outdoor Unit Serial ...'
                    />
                    <input
                        className='form-input'
                        placeholder='Enter Indoor Unit Model ...'
                    />
                    <input
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