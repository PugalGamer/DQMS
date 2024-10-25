import React from 'react';
// import FirebaseAuthProvider from '@crema/services/auth/firebase/FirebaseAuthProvider';
import PropTypes from 'prop-types';
import JWTAuthProvider from '../../services/auth/jwt-auth/JWTAuthProvider';
import { useInfoViewActionsContext } from '../../context/AppContextProvider/InfoViewContextProvider';

const AppAuthProvider = ({ children }) => {
  // return <FirebaseAuthProvider>{children}</FirebaseAuthProvider>;
  const { fetchStart, fetchSuccess, fetchError } = useInfoViewActionsContext();
  return (
    <JWTAuthProvider
      fetchStart={fetchStart}
      fetchError={fetchError}
      fetchSuccess={fetchSuccess}
    >
      {children}
    </JWTAuthProvider>
  );
};

AppAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppAuthProvider;
