import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CUSTOMER } from '../utils/queries';
import { valueToObjectRepresentation } from '@apollo/client/utilities';

const Customer = props => {
    const { id: customerId } = useParams();

    const { loading, data } = useQuery(QUERY_CUSTOMER, {
        variables: { _id: customerId }
    });

    const customer = data?.customer || {};

    if (loading) {
        return <div>Loading...</div>;
    }



    return (
      <div>
        <div className="card mb-3">
          <p className="card-header text-dark" style={{ fontWeight: 700 }} >
              {customer.name}
          </p>
          <div className="card-body">
            <p>{customer.address}</p>
            <p>{customer.phone}</p>
          </div>
        </div>
        <div>
          {customer.acs.map((ac) => (
            <div className="card mb-3">
              <p className="card-header">
                  {ac.acName}
              </p>
              <div className="card-body">
              <p>ID: {ac._id}</p>
              <p>Brand: {ac.acBrand}</p>
              <p>Outdoor Model: {ac.outModel}</p>
              <p>Outdoor Serial: {ac.outSerial}</p>
              <p>Indoor Model: {ac.inModel}</p>
              <p>Indoor Serial: {ac.inSerial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Customer;