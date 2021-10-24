import React, { useContext } from 'react';
import { isAdminContaxt } from '../../contexts/';
import { Redirect } from 'react-router-dom';

function onlyAdmin (ContainerComponent) {
  return function OnlyAdminComponent (props) {
    const isAdmin = useContext(isAdminContaxt);
    return isAdmin ? <ContainerComponent {...props} /> : <Redirect to='/' />;
  };
}

export default onlyAdmin;
