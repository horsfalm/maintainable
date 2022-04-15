import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_AC } from '../utils/queries';

const Ac = props => {
    const { id: acId } = useParams();

    const { loading, data } = useQuery(QUERY_AC, {
        variables: { _id: acId }
    });

    const ac = data?.ac || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="card mb-3">
          <div className="card-header" style={{ fontWeight: 700 }} >
              AC Location: {ac.acName}
          </div>
          <div className="card-body">
              <div className="flex-row">
                <div style={{ width: 800 }}>
                  <p>Brand: {ac.acBrand} </p>
                  <p>Outdoor Model: {ac.outModel} / Outdoor Serial: {ac.outSerial}</p>
                  <p>Indoor Model: {ac.inModel} / Indoor Serial: {ac.inSerial}</p>
                </div>
              {/* <button className="btn ml-auto bg-success">
                Edit
              </button>
              <button className="btn ml-auto bg-danger">
                Delete
              </button> */}
              </div>
              <div className="flex-row">
                <p style={{ width: 200 }}>Service Reports:</p>
              <div style={{ width: 600 }}>{ac.reports.map((report) => (
                <ul>
                  <li className="click"><Link to={`/report/${report._id}`}>
                  {report.createdAt}</Link></li>
                </ul>
              ))}
              </div>
              <button className="btn ml-auto bg-success">
                <Link to={`/ac/${ac._id}/addreport`}>
                + Report
                </Link>
              </button>
              </div>
          </div>
        </div>
      </div>
    );
};

export default Ac