import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input } from 'antd';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import {
  StyledForgotBtn,
  StyledForgotContent,
  StyledForgotForm,
  StyledForgotPara,
  StyledFormFooter,
} from './index.styled';
import jwtAxios from '../../../@crema/services/auth/jwt-auth';
import { useInfoViewActionsContext } from '../../../@crema/context/AppContextProvider/InfoViewContextProvider';

const ForgetPasswordJwtAuth = () => {
  const useinfoViewActionsContext = useInfoViewActionsContext();

  const navigate = useNavigate(); // Assign the result of useNavigate to a variable
  const { messages } = useIntl();
  // const onFinish = async (values) => {
  //   useinfoViewActionsContext.fetchStart();

  //   try {
  //     const response = await jwtAxios.post('forgot-password', {
  //       email: values.email,
  //     });
  //     if (response.status === 200 && response.data.status) {
  //       useinfoViewActionsContext.fetchSuccess();

  //       navigate(`/reset-password`); // Call the navigate function to navigate to the new route
  //     } else {
  //       useinfoViewActionsContext.fetchError(response.data.message);

  //       console.error(
  //         'Error sending password reset email:',
  //         response.data.message,
  //       );
  //     }
  //   } catch (error) {
  //     console.error('Error sending password reset email:', error);
  //     useinfoViewActionsContext.fetchError('Something went wrong');
  //   }
  // };
  const onFinish = async (values) => {
    useinfoViewActionsContext.fetchStart();

    try {
      const response = await jwtAxios.post('forgot-password', {
        email: values.email,
      });

      if (response.status === 200 && response.data.status) {
        useinfoViewActionsContext.fetchSuccess();
        navigate(`/reset-password`);
      } else {
        useinfoViewActionsContext.fetchError(response.data.errors.email[0]); // Use the specific error message
        console.error(
          'Error sending password reset email:',
          response.data.errors.email[0],
        );
      }
    } catch (error) {
      const errorMessage = error.response?.data?.errors?.email
        ? error.response.data.errors.email[0]
        : 'Something went wrong';
      useinfoViewActionsContext.fetchError(errorMessage);
      console.error('Error sending password reset email:', errorMessage);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledForgotContent>
      <StyledForgotPara>
        <IntlMessages id="common.forgetPasswordTextOne" />
        <span>
          <IntlMessages id="common.forgetPasswordTextTwo" />
        </span>
      </StyledForgotPara>

      <StyledForgotForm
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          className="form-field"
          rules={[
            { required: true, message: 'Please input your Email Address!' },
          ]}
        >
          <Input placeholder={messages['common.emailAddress']} />
        </Form.Item>

        <div className="form-field">
          <StyledForgotBtn type="primary" htmlType="submit">
            <IntlMessages id="common.sendNewPassword" />
          </StyledForgotBtn>
        </div>

        <StyledFormFooter>
          <IntlMessages id="common.alreadyHavePassword" />
          <Link to="/signin">
            <IntlMessages id="common.signIn" />
          </Link>
        </StyledFormFooter>
      </StyledForgotForm>
    </StyledForgotContent>
  );
};

export default ForgetPasswordJwtAuth;
