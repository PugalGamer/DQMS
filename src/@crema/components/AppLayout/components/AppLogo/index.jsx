import React from 'react';
import PropTypes from 'prop-types';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import { StyledAppLogo } from './index.styled';
import { useNavigate } from 'react-router-dom';

const AppLogo = ({ hasSidebarColor }) => {
  const { sidebarColorSet } = useSidebarContext();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/dashboard');
  };

  return (
    <StyledAppLogo onClick={handleLogoClick}>
      {hasSidebarColor && sidebarColorSet.mode === 'dark' ? (
        <img src='/assets/images/logo-white-with-name.png' alt='crema-logo' />
      ) : (
        <img src='/assets/images/logo-with-name.png' alt='crema-logo' />
      )}
    </StyledAppLogo>
  );
};

export default AppLogo;

AppLogo.propTypes = {
  hasSidebarColor: PropTypes.bool,
};
