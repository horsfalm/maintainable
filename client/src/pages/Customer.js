import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CUSTOMER } from '../utils/queries';

const Customer = props => {
    const { id: customerId } = useParams();
console.log(customerId);
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
        <div className="card mb-3">
          <p className="card-header">
              {customer.acs[0].acName}
          </p>
          <div className="card-body">
            <p>ID: {customer.acs[0]._id}</p>
            <p>Brand: {customer.acs[0].acBrand}</p>
            <p>Outdoor Model: {customer.acs[0].outModel}</p>
            <p>Outdoor Serial: {customer.acs[0].outSerial}</p>
            <p>Indoor Model: {customer.acs[0].inModel}</p>
            <p>Indoor Serial: {customer.acs[0].inSerial}</p>
          </div>
        </div>
      </div>
    );
  };

export default Customer;