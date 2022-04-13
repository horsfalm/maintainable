import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CUSTOMERS } from "../utils/queries";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardText,
} from "mdb-react-ui-kit";

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
          placeholder="Customer name"
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <br />
      {/* {loading ? (
            <div>Loading ...</div>
          ) : (
            <CustomerFilter customers={customers, searchInput}/>
          )} */}

      {customers
        .filter((customer) => customer.name.toLowerCase().includes(searchInput))
        .map((customer) => (
          <MDBCard style={{ maxWidth: "77rem" }}>
            <MDBCardHeader>
              <Link to={`/customer/${customer._id}`}>
                <div> {customer.name}</div>
              </Link>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>
                <p>{customer.address}</p>
                <p>{customer.phone}</p>{" "}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        ))}
    </div>
  );
};

export default Search;
