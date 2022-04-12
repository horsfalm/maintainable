import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_REPORT } from '../utils/mutations';
import { QUERY_AC } from '../utils/queries';

const Addreport = () => {

    const [reportText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addReport, { error }] = useMutation(ADD_REPORT, { update(cache, { data: { addReport } }) {
        try {
        const { reports } = cache.readQuery({ query: QUERY_AC });

        cache.writeQuery({
            query: QUERY_AC,
            data: { reports: [addReport, ...reports] }
            });
        
        } catch (e) {
            console.error(e)
        }
    } 
});

    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        const acId = window.location.toString().split('/')[window.location.toString().split('/').length -2];

        try {
            await addReport({
                variables: { acId: acId, reportText }
            });
        
        setText('');
        setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className='flex-row justify-space-between'>
            <div className='col-12 mb-3 text-dark'>
                <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
                    Character Count: {characterCount}/280
                    {error && <span className="ml-2">Something went wrong ...</span>}</p>
                <form className="justify-center justify-space-between-md align-stretch" onSubmit={handleFormSubmit}>
                    <textarea placeholder="Enter service report details ..." value={reportText} className="form-input col-12 col-md-9" onChange={handleChange} id="report"></textarea><br />
                    <button className="btn ml-auto bg-success" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Addreport;