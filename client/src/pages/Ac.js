import React from 'react';
import { useParams } from 'react-router-dom';
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
          <p className="card-header text-dark" style={{ fontWeight: 700 }} >
              {ac.acName}
          </p>
          <div className="card-body">
              <p>Brand: {ac.acBrand}</p>
              <p>Outdoor Model: {ac.outModel}</p>
              <p>Outdoor Serial: {ac.outSerial}</p>
              <p>Indoor Model: {ac.inModel}</p>
              <p>Indoor Serial: {ac.inSerial}</p>
              <p>Service Reports: {ac.reports.map((report) => (
                <li>{report.createdAt} / {report.reportText}</li>
              ))}
              </p>
              <button className="btn ml-auto">Add Report</button>
          </div>
        </div>
      </div>
    );
};

export default Ac