import React from 'react';
import { Form, Input } from 'antd';
import IntlMessages from '@crema/helpers/IntlMessages';
import useIntl from 'react-intl/lib/src/components/useIntl';
import AppPageMeta from '@crema/components/AppPageMeta';
import AuthWrapper from '../AuthWrapper';
import {
  StyledAuthReconContent,
  StyledConfirmBtn,
  StyledResetForm,
} from '../AuthWrapper.styled';
import { useNavigate } from 'react-router-dom';
import jwtAxios from '../../../@crema/services/auth/jwt-auth';
import { useInfoViewActionsContext } from '../../../@crema/context/AppContextProvider/InfoViewContextProvider';

const ResetPasswordAwsCognito = () => {
  const useinfoViewActionsContext = useInfoViewActionsContext();

  const { messages } = useIntl();
  const navigate = useNavigate();
  const [form] = Form.useForm(); // Initialize form instance

  // const handleSubmit = async (values) => {
  //   useinfoViewActionsContext.fetchStart();

  //   try {
  //     const response = await jwtAxios.post('reset-password', {
  //       user_otp: values.user_otp,
  //       password: values.user_password,
  //       password_confirmation: values.user_password_confirmation,
  //     });
  //     if (response.status === 200 && response.data.status) {
  //       useinfoViewActionsContext.fetchSuccess();

  //       navigate(`/signin`);
  //     } else {
  //       useinfoViewActionsContext.fetchError(response.data.errors.email[0]); // Use the specific error message

  //       console.error(
  //         'Error sending password reset email:',
  //         response.data.message,
  //       );
  //     }
  //   } catch (error) {
  //     useinfoViewActionsContext.fetchError(errorMessage);

  //     console.error('Error sending password reset email:', error);
  //   }
  // };
  const handleSubmit = async (values) => {
    useinfoViewActionsContext.fetchStart();

    try {
      const response = await jwtAxios.post('reset-password', {
        user_otp: values.user_otp,
        password: values.user_password,
        password_confirmation: values.user_password_confirmation,
      });

      if (response.status === 200 && response.data.status) {
        useinfoViewActionsContext.fetchSuccess();
        form.resetFields(); // Reset the form fields
        navigate(`/signin`);
      } else {
        // Extract and join error messages from the response
        const errorMessages = response.data.errors
          ? Object.values(response.data.errors).flat().join(' ')
          : response.data.message;

        useinfoViewActionsContext.fetchError(errorMessages);
        console.error('Error sending password reset email:', errorMessages);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.errors
        ? Object.values(error.response.data.errors).flat().join(' ')
        : 'Something went wrong';
      useinfoViewActionsContext.fetchError(errorMessage);
      console.error('Error sending password reset email:', errorMessage);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Form submit failed:', errorInfo);
  };

  return (
    <AuthWrapper>
      <AppPageMeta title="Reset Password" />
      <StyledAuthReconContent>
        <StyledResetForm
          name="basic"
          form={form}
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
        >
          {/* <Form.Item
            name="user_otp"
            className="form-field"
            rules={[{ required: true, message: 'Please input your OTP!' }]}
          >
            <p>
              <IntlMessages id="common.verificationMessage" />
            </p>
            <Input
              type="password"
              maxLength={6}
              placeholder={messages['common.otp']}
            />
          </Form.Item> */}

          <Form.Item
            name="user_otp"
            className="form-field"
            rules={[{ required: true, message: 'Please enter your OTP!' }]}
          >
            <Input
              type="number"
              maxLength={6}
              placeholder="Enter Your OTP"
              // placeholder={messages['common.newPassword']}
            />
          </Form.Item>
          <Form.Item
            name="user_password"
            className="form-field"
            rules={[
              { required: true, message: 'Please input your New Password!' },
            ]}
          >
            <Input
              type="password"
              placeholder={messages['common.newPassword']}
            />
          </Form.Item>

          <Form.Item
            name="user_password_confirmation"
            className="form-field"
            rules={[
              { required: true, message: 'Please confirm your password!' },
            ]}
          >
            <Input
              type="password"
              placeholder={messages['common.retypePassword']}
            />
          </Form.Item>

          <StyledConfirmBtn type="primary" htmlType="submit">
            <IntlMessages id="common.resetMyPassword" />
          </StyledConfirmBtn>
        </StyledResetForm>
      </StyledAuthReconContent>
    </AuthWrapper>
  );
};

export default ResetPasswordAwsCognito;
