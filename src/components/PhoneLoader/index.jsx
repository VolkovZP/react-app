import React from 'react';
import DataProvider from '../DataProvider';

export default function PhoneLoader () {
  const renderPhones = ({ data, isFetching }) => {
    if (isFetching) return <div>LOADING...</div>;
    return (
      <div>
        {data.map(({ id, name }) => (
          <div key={id}>
            {' '}
            ID : {id} NAME : {name}
          </div>
        ))}
      </div>
    );
  };
  return <DataProvider render={renderPhones} dataLink='/phones.json' />;
}
