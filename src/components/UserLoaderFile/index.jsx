import React, { useState, useEffect } from 'react';
import DataProvider from '../DataProvider';

export default function UserLoaderFile () {
  const renderUsers = ({ data, isFetching }) => {
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
  return <DataProvider render={renderUsers} dataLink='/users.json' />;
}
