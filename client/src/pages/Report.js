import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_REPORT } from '../utils/queries';


const Report = props => {
    
    const { id: reportId } = useParams();

    const { loading, data } = useQuery(QUERY_REPORT, {
        variables: { _id: reportId }
    });

    const report = data?.report || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="card mb-3">
            <div className="card-header" style={{ fontWeight: 700 }} >Report ID: {report._id}
            </div>
            <div className="card-body">
                <div className="flex-row">
                    <div style={{ width: 800 }}>
                        <p>{report.reportText}</p>
                        <p>{report.createdAt}</p>
                    </div>
                    {/* <button className="btn ml-auto bg-success">
                        Edit
                    </button>
                    <button className="btn ml-auto bg-danger">
                        Delete
                    </button> */}
                </div>
            </div> 
        </div>
      </div>
    );
  };

export default Report;