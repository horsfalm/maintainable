import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CUSTOMERS } from '../utils/queries';
import CustomerList from '../components/CustomerList';
import Auth from '../utils/auth';


const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_CUSTOMERS);
  const customers = data?.customers || [];

  return (
    <main>
      {Auth.loggedIn() ? (
        <>
        
            <div className='flex-row justify-space-between'>
              <div className='col-12 mb-3'>
                {loading ? (
                  <div>Loading ...</div>
                ) : (
                  <CustomerList customers={customers}/>
                )}
                </div>
            </div>
        
        </>
      ) : (
        <>

        {/* need to redirect to home */}
        {/* <Link to="/login"></Link> */}
        {window.location.href = "/login"}
        </>
      )}
    </main>
  );
};

export default Dashboard;