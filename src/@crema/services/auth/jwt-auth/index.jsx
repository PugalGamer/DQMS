import axios from '@crema/services/axios';

// const jwtAxios = axios.create({
//   baseURL: 'http://192.168.1.49:8000/api/', //YOUR_API_URL HERE
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
// Retrieve the token from localStorage and log it
export const token = localStorage.getItem('token');
// console.log('Token:', token); // Log the token to ensure it's present

const jwtAxios = axios.create({
  baseURL: 'http://192.168.1.49:8000/api/', // YOUR_API_URL HERE
  // baseURL: 'http://192.168.1.49/dqms/backend/public/api/', // YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
    // ...(token ? { Authorization: `Bearer ${token}` } : {}), // Include the token if it exists
  },
});

jwtAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.data.msg === 'Token is not valid') {
      console.log('Need to logout user');
      // store.dispatch({type: LOGOUT});
    }
    return Promise.reject(err);
  },
);
// Function to set the token and permissions in localStorage
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    jwtAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set the header after updating localStorage
  } else {
    localStorage.removeItem('token');
    delete jwtAxios.defaults.headers.common['Authorization']; // Clear the header if no token
  }
};

// export const setAuthToken = (token, permissions) => {
//   if (token) {
//     jwtAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
//     localStorage.setItem('token', token);
//     localStorage.setItem('sidebarPermissions', JSON.stringify(permissions));
//   } else {
//     delete jwtAxios.defaults.headers.common['Authorization'];
//     localStorage.removeItem('token');
//     localStorage.removeItem('sidebarPermissions');
//   }
// };

export default jwtAxios;

// export const setAuthToken = (token) => {
//   if (token) {
//     jwtAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
//     localStorage.setItem('token', token);
//   } else {
//     delete jwtAxios.defaults.headers.common['Authorization'];
//     localStorage.removeItem('token');
//   }
// };
