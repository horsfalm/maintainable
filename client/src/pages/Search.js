import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CUSTOMERS } from "../utils/queries";
// import CustomerFilter from '../components/CustomerFilter';
import { Link } from "react-router-dom";

const Search = () => {
  const { loading, data } = useQuery(QUERY_CUSTOMERS);
  const customers = data?.customers || [];
  const [searchInput, setSearchInput] = useState("");

  console.log(customers);

  return (
    <div className="search">
      <div>
        <input
          className="form-input"
          placeholder="customer name"
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <br />
      {/* {loading ? (
            <div>Loading ...</div>
          ) : (
            <CustomerFilter customers={customers}/>
          )} */}

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

export default Search;
