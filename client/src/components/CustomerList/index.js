import React from 'react';
import { Link } from 'react-router-dom';

const CustomerList = ({ customers }) => {
  if (!customers.length) {
    return <h3>No Customers Yet</h3>;
  }

  return (
    <div id="customer-list">
      {customers &&
        customers.map(customer => (
          <div key={customer._id} className="card mb-3">
            <div className="card-header">
              <Link to={`/customer/${customer._id}`}
              style={{ fontWeight: 700 }}>
                <div className="click"> {customer.name}</div>
              </Link>
            </div>
            <div className="card-body flex-row">
              <div style={{ width: 800 }}>
                <p>{customer.address}</p>
                <p>{customer.phone}</p>
              </div>
              <button className="btn ml-auto bg-success">
                Edit
              </button>
              <button className="btn ml-auto bg-danger">
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CustomerList;