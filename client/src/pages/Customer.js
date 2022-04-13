import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CUSTOMER } from '../utils/queries';
import { Link } from 'react-router-dom';

const Customer = props => {
  
    const { id: customerId } = useParams();

    const { loading, data } = useQuery(QUERY_CUSTOMER, {
        variables: { _id: customerId }
    });

    const customer = data?.customer || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log(customer.acs)

    return (
      <div className='mb-5'>
        <div>
        <h2>{customer.name}</h2>
        <h5>{customer.address}</h5>
        <h5>{customer.phone}</h5>
        <button className="btn ml-auto bg-success">
            <Link to={`/customer/${customer._id}/addac`}>
            + AC
            </Link>
        </button>
        </div><br />
        <div>
          {customer.acs.map((ac) => (
            <div className="card mb-3">
              <div className="card-header">
                <Link to={`/ac/${ac._id}`}
                style={{ fontWeight: 700 }}
                >
                  <div className="click">AC Location: {ac.acName}</div>
                </Link>
              </div>
              <div className="card-body">
              <p>AC ID: {ac._id}</p>
              <p>AC Brand: {ac.acBrand}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Customer;