import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import jwtAxios, { setAuthToken } from './index';
import { useInfoViewActionsContext } from '../../../context/AppContextProvider/InfoViewContextProvider';
import { Button, Form, Input, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { setMenuData } from '../../../../store/userAction';
import { useNavigate } from 'react-router-dom';

const JWTAuthContext = createContext();
const JWTAuthActionsContext = createContext();

export const useJWTAuth = () => useContext(JWTAuthContext);

export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

const JWTAuthAuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [firebaseData, setJWTAuthData] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  const infoViewActionsContext = useInfoViewActionsContext();
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
  const [otpForm] = Form.useForm(); // Ant Design form instance
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const getAuthUser = () => {
      const token = localStorage.getItem('token');

      // if (token) {
      //   navigate('/dashboard')
      // }

      if (!token) {
        setJWTAuthData({
          user: undefined,
          isLoading: false,
          isAuthenticated: false,
        });
        return;
      }
      // If token exists, set it for axios requests
      setAuthToken(token);

      // Directly set user as authenticated without decoding
      setJWTAuthData({
        user: {}, // You can keep it as an empty object if you don't need user data
        isLoading: false,
        isAuthenticated: true,
      });
    };

    getAuthUser();
  }, []);

  // const signInUser = async ({ email, password }) => {
  //   infoViewActionsContext.fetchStart();
  //   try {
  //     const { data } = await jwtAxios.post('login', { email, password });

  //     if (data.status) {
  //       setJWTAuthData({
  //         user: data.user || {},
  //         isAuthenticated: false, // Authentication is still pending OTP verification
  //         isLoading: false,
  //       });
  //       infoViewActionsContext.fetchSuccess();
  //       console.log(data.message);

  //       // Show the OTP modal after successful login
  //       setIsModalVisible(true);
  //       setEmail(email);
  //     } else {
  //       infoViewActionsContext.fetchError('Login failed');
  //     }
  //   } catch (error) {
  //     setJWTAuthData({
  //       ...firebaseData,
  //       isAuthenticated: false,
  //       isLoading: false,
  //     });
  //     infoViewActionsContext.fetchError(
  //       error?.response?.data?.error || 'Something went wrong',
  //     );
  //   }
  // };
  const signInUser = async ({ email, password }) => {
    infoViewActionsContext.fetchStart();
    try {
      const { data } = await jwtAxios.post('login', { email, password });

      if (data.status) {
        setJWTAuthData({
          user: data.user || {},
          isAuthenticated: false, // Authentication is still pending OTP verification
          isLoading: false,
        });
        infoViewActionsContext.fetchSuccess();
        console.log(data.message);

        // Show the OTP modal after successful login
        setIsModalVisible(true);
        setEmail(email);
        otpForm.resetFields(); // Reset the form fields
      } else {
        infoViewActionsContext.fetchError(data.message); // Display the specific failure message
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      setJWTAuthData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      const errorMessage =
        error.response?.data?.message || 'Something went wrong'; // Use specific error message if available
      infoViewActionsContext.fetchError(errorMessage);
      console.error('Error during login:', errorMessage);
    }
  };

  // const handleOtpSubmit = async (values) => {
  //   try {
  //     const { email, user_otp } = values; // Post OTP to the backend for verification

  //     const { data } = await jwtAxios.post('verify-otp', { email, user_otp });

  //     if (data.status) {
  //       // OTP verified
  //       setIsModalVisible(false); // Close modal first
  //       // OTP verified, set user as authenticated
  //       localStorage.setItem('token', data.token);
  //       setAuthToken(data.token);
  //       setJWTAuthData({
  //         user: data.user || {},
  //         isAuthenticated: true, // Now the user is fully authenticated
  //         isLoading: false,
  //       }); // Set permissions (if needed)
  //       const permissions = data.sidebarPermissions;
  //       // Set the menu data (permissions) in Redux after successful login
  //       dispatch(setMenuData(permissions)); // Use permissions directly for menu data
  //       console.log('OTP verified successfully!');
  //     } else {
  //       console.log('OTP verification failed.');
  //       infoViewActionsContext.fetchError('Invalid OTP');
  //     }
  //   } catch (error) {
  //     console.log('Error verifying OTP:', error);
  //     infoViewActionsContext.fetchError(error?.response?.data?.error);
  //   }
  // };
  const handleOtpSubmit = async (values) => {
    try {
      const { email, user_otp } = values; // Post OTP to the backend for verification
      const { data } = await jwtAxios.post('verify-otp', { email, user_otp });

      if (data.status) {
        // OTP verified
        setIsModalVisible(false); // Close modal first
        // OTP verified, set user as authenticated
        localStorage.setItem('token', data.token);
        setAuthToken(data.token);
        setJWTAuthData({
          user: data.user || {},
          isAuthenticated: true, // Now the user is fully authenticated
          isLoading: false,
        });

        const permissions = data.sidebarPermissions;
        // Set the menu data (permissions) in Redux after successful login
        dispatch(setMenuData(permissions)); // Use permissions directly for menu data
        console.log('OTP verified successfully!');
      } else {
        console.log('OTP verification failed.');
        infoViewActionsContext.fetchError(data.message); // Display the specific OTP failure message
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Something went wrong'; // Use specific error message if available
      console.log('Error verifying OTP:', errorMessage);
      infoViewActionsContext.fetchError(errorMessage);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false); // Hide the modal on cancel
  };
  const signUpUser = async ({ name, email, password }) => {
    infoViewActionsContext.fetchStart();
    try {
      const { data } = await jwtAxios.post('users', { name, email, password });
      localStorage.setItem('token', data.token);
      setAuthToken(data.token);
      const res = await jwtAxios.get('/auth');
      setJWTAuthData({
        user: res.data,
        isAuthenticated: true,
        isLoading: false,
      });
      infoViewActionsContext.fetchSuccess();
    } catch (error) {
      setJWTAuthData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      console.log('error:', error.response.data.error);
      infoViewActionsContext.fetchError(
        error?.response?.data?.error || 'Something went wrong',
      );
    }
  };

  const logout = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('persist:root');
    navigate('/signin');
    setAuthToken();
    setJWTAuthData({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  return (
    <JWTAuthContext.Provider
      value={{
        ...firebaseData,
      }}
    >
      <JWTAuthActionsContext.Provider
        value={{
          signUpUser,
          signInUser,
          logout,
        }}
      >
        {children}
        {/* Ant Design Modal for OTP input */}
        <Modal
          title="Enter OTP"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            form={otpForm}
            onFinish={handleOtpSubmit}
            initialValues={{
              email,
            }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input readOnly />
            </Form.Item>
            <Form.Item
              label="OTP"
              name="user_otp"
              rules={[{ required: true, message: 'Please input the OTP!' }]}
            >
              <Input type="number" maxLength={6} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit OTP
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </JWTAuthActionsContext.Provider>
    </JWTAuthContext.Provider>
  );
};
export default JWTAuthAuthProvider;

JWTAuthAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
