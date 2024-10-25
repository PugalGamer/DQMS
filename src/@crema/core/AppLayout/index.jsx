import React, { useEffect } from 'react';
import { useUrlSearchParams } from 'use-url-search-params';
import AppContentView from '@crema/components/AppContentView';
import generateRoutes from '@crema/helpers/RouteGenerator';
import { Layouts } from '@crema/components/AppLayout';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import {
  useLayoutActionsContext,
  useLayoutContext,
} from '@crema/context/AppContextProvider/LayoutContextProvider';
import {
  anonymousStructure,
  authorizedStructure,
  publicStructure,
} from '../AppRoutes';
import { useNavigate, useRoutes } from 'react-router-dom';
// import routesConfig from '../AppRoutes/routeConfig';
import AuthWrapper from './AuthWrapper';
import { initialUrl } from '@crema/constants/AppConst';
import { useSidebarActionsContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import { useSelector } from 'react-redux';

const AppLayout = () => {
  const { navStyle } = useLayoutContext();
  const navigate = useNavigate();
  const menuData = useSelector((state) => state.menuData);
  const routesConfig = menuData || [];
  // useEffect to handle any side effects or configurations
  useEffect(() => {}, [menuData]); // This will run whenever menuData changes

  const { user, isAuthenticated } = useAuthUser();
  const { updateNavStyle } = useLayoutActionsContext();
  const { updateMenuStyle, setSidebarBgImage } = useSidebarActionsContext();
  const AppLayout = Layouts[navStyle];
  const [params] = useUrlSearchParams();

  const initURL = params?.redirect ? params?.redirect : initialUrl;
  const loginUrl = `/signin?redirect=${window.location.pathname}`;
  // const loginUrl = `/signin`;

  const generatedRoutes = generateRoutes({
    isAuthenticated: isAuthenticated,
    userRole: user?.role,
    anonymousStructure: anonymousStructure(initURL),
    authorizedStructure: authorizedStructure(loginUrl),
    publicStructure: publicStructure(initURL),
  });

  const routes = useRoutes(generatedRoutes);

  useEffect(() => {
    if (params.layout) updateNavStyle(params.layout);
    if (params.menuStyle) updateMenuStyle(params.menuStyle);
    if (params.sidebarImage) setSidebarBgImage(true);
  }, [
    params.layout,
    params.menuStyle,
    params.sidebarImage,
    updateNavStyle,
    updateMenuStyle,
    setSidebarBgImage,
  ]);

  return (
    <>
      {isAuthenticated ? (
        <AppLayout routes={routes} routesConfig={routesConfig} />
      ) : (
        <AuthWrapper>
          <AppContentView routes={routes} />
        </AuthWrapper>
      )}
    </>
  );
};

export default AppLayout;
