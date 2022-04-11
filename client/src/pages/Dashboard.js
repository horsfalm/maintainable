import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CUSTOMERS } from '../utils/queries';
import CustomerList from '../components/CustomerList';

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_CUSTOMERS);
  const customers = data?.customers || [];

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          {loading ? (
            <div>Loading ...</div>
          ) : (
            <CustomerList customers={customers}/>
          )}
          </div>
      </div>
    </main>
  );
};

export default Dashboard;