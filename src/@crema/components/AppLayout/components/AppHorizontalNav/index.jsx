// import React from 'react';
// import { Menu } from 'antd';
// import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { getRouteHorMenus } from './HorizontalMenuUtils';

// const AppHorizontalNav = ({ className, routesConfig }) => {
//   const { pathname } = useLocation();

//   const selectedKeys = pathname.substr(1);
//   console.log(selectedKeys);
  
//   const defaultOpenKeys = selectedKeys.split('/')[0];
//   console.log(defaultOpenKeys);
  
//   return (
//     <Menu
//       mode='horizontal'
//       className={className}
//       defaultOpenKeys={[defaultOpenKeys]}
//       selectedKeys={[selectedKeys.replaceAll('/', ':')]}
//     >
//       {getRouteHorMenus(routesConfig)}
//     </Menu>
//   );
// };

// export default AppHorizontalNav;
// AppHorizontalNav.propTypes = {
//   className: PropTypes.string,
//   routesConfig: PropTypes.array.isRequired,
// };
import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getRouteHorMenus } from './HorizontalMenuUtils';

const AppHorizontalNav = ({ className, routesConfig }) => {
  const { pathname } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState(pathname.substr(1));
  const [defaultOpenKeys, setDefaultOpenKeys] = useState(selectedKeys.split('/')[0]);

  useEffect(() => {
    setSelectedKeys(pathname.substr(1).replaceAll('/', ':'));
    setDefaultOpenKeys(pathname.split('/')[0]);
  }, [pathname]);

  return (
    <Menu
      mode="horizontal"
      className={className}
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
    >
      {getRouteHorMenus(routesConfig)}
    </Menu>
  );
};

AppHorizontalNav.propTypes = {
  className: PropTypes.string,
  routesConfig: PropTypes.array.isRequired,
};

export default AppHorizontalNav;