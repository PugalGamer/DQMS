import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

const Dashboard = React.lazy(
  () => import('../../../modules/dqms/dashboard/Dashboard'),
);
const Employee = React.lazy(
  () => import('../../../modules/dqms/employee/Employee'),
);

const Roles = React.lazy(() => import('../../../modules/dqms/roles/Roles'));
const CreateRoles = React.lazy(
  () => import('../../../modules/dqms/roles/CreateRoles'),
);
const EditRoles = React.lazy(
  () => import('../../../modules/dqms/roles/EditRoles'),
);

export const dqmsConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/role-permission-create',
    element: <CreateRoles />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/role-permission-edit',
    element: <EditRoles />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/roles',
    element: <Roles />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/employees',
    element: <Employee />,
  },
];
