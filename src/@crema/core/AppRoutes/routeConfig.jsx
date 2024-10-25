import { useSelector } from 'react-redux';



// const routesConfig = [


// ];
// export default routesConfig;

// let routesConfig = []; // Initial empty configuration

// // Function to set routesConfig directly from the stored permissions
// export const initializeRoutesConfig = () => {
//   const permissions = JSON.parse(localStorage.getItem('sidebarPermissions'));
//   if (permissions) {
//     routesConfig = permissions; // Set routesConfig from local storage
//   }
// };

// // Function to set routesConfig
// export const setRoutesConfig = (config) => {
//   routesConfig = config; // Directly set routesConfig
//   localStorage.setItem('sidebarPermissions', JSON.stringify(config)); // Update local storage
// };

// // Function to get the current config
// export const getRoutesConfig = () => routesConfig; // Function to get the current config

// export default routesConfig;
// const routesConfig = [
//   {
//     id: 'dqms', // Id of the Menu
//     title: 'Dashboard', // Title of the Menu
//     type: 'item', // Type of menu of the Menu
//     url: '/dashboard', // Path of the menu navigation
//   },
//   {
//     id: 'master',
//     title: 'Masters',
//     type: 'group',
//     children: [
//       {
//         id: 'role',
//         title: 'Roles',
//         url: '/roles',
//         type: 'collapse', //type of menu collapse
//         children: [
//           {
//             id: 'roles-view',
//             title: 'View Roles',
//             url: '/role',
//           },
//           {
//             id: 'roles-create',
//             title: 'Create Roles',
//             url: '/role-create',
//           },
//         ],
//       },
//     ],
//   },
// ];

// const routesConfig = JSON.parse(localStorage.getItem('sidebarPermissions')) || [];
// const getRoutesConfig = () => {
//   return JSON.parse(localStorage.getItem('sidebarPermissions')) || [];
// };

// // Call the function to get the current 'routesConfig'
// const routesConfig = getRoutesConfig();

// export default routesConfig;

const routesConfig = useSelector((state) => state.menuData);



export default routesConfig;
