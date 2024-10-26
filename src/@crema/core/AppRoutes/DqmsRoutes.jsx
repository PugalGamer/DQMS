import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';
const EditRoleindex = React.lazy(
  () => import('../../../modules/dqms/roles/EditRoles/EditRoleindex'),
);
const CreateRoleindex = React.lazy(
  () => import('../../../modules/dqms/roles/CraeteRoles/CreateRoleindex'),
);

const Dashboard = React.lazy(
  () => import('../../../modules/dqms/dashboard/Dashboard'),
);
const Employee = React.lazy(
  () => import('../../../modules/dqms/employee/Employee'),
);

const Roles = React.lazy(() => import('../../../modules/dqms/roles/Roles'));

export const dqmsConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/role-permission-create',
    element: <CreateRoleindex />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/role-permission-edit',
    element: <EditRoleindex />,
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
