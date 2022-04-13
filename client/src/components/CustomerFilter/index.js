import React from 'react';
import { Link } from 'react-router-dom';

const CustomerList = ({ customers, searchInput }) => {
  if (!customers.length) {
    return <h3>No Customers Yet</h3>;
  }

  return (
    <div id="customer-list">
      {customers
        .filter((customer) => customer.name.toLowerCase().includes(searchInput))
        .map((customer) => (
          <div key={customer._id} className="card mb-3">
            <p className="card-header text-dark">
              <Link
                to={`/customer/${customer._id}`}
                style={{ fontWeight: 700 }}
              >
                <div className="click">{customer.name}</div>
              </Link>
            </p>
            <div className="card-body flex-row">
              <div style={{ width: 800 }}>
                <p>{customer.address}</p>
                <p>{customer.phone}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CustomerList;