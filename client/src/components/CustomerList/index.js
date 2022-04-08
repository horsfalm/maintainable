import React from 'react';
import { Link } from 'react-router-dom';

const CustomerList = ({ customers }) => {
  if (!customers.length) {
    return <h3>No Customers Yet</h3>;
  }

  return (
    <div>
      {customers &&
        customers.map(customer => (
          <div key={customer._id} className="card mb-3">
            <p className="card-header">
              <Link to={`/customer/${customer._id}`}
              style={{ fontWeight: 700 }}
              className="text-dark">
                {customer.name}
              </Link>
            </p>
            <div className="card-body">
              <p>{customer.address}</p>
              <p>{customer.phone}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CustomerList;