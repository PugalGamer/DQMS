import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Checkbox, Form, Input } from 'antd';
import {
  GithubOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { FaFacebookF } from 'react-icons/fa';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useAuthMethod } from '@crema/hooks/AuthHooks';
import {
  SignInButton,
  StyledRememberMe,
  StyledSign,
  StyledSignContent,
  StyledSignedText,
  StyledSignFooter,
  StyledSignForm,
  StyledSignIconBtn,
  StyledSignLink,
  StyledSignLinkTag,
  StyledSignSocialLink,
  StyledSignTextGrey,
} from './index.styled';

const SignInJwtAuth = () => {
  const navigate = useNavigate();
  const { signInUser } = useAuthMethod();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onGoToForgetPassword = () => {
    navigate('/forget-password', { tab: 'jwtAuth' });
  };

  function onRememberMe(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const { messages } = useIntl();

  return (
    <StyledSign>
      <StyledSignContent>
        <StyledSignForm
          name="basic"
          initialValues={{
            remember: true,
            email: 'pugalp702@gmail.com',
            password: 'demo1234',
          }}
          onFinish={signInUser}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            className="form-field"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input placeholder={messages['common.email']} />
          </Form.Item>

          <Form.Item
            name="password"
            className="form-field"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password placeholder={messages['common.password']} />
          </Form.Item>

          <StyledRememberMe>
            <Checkbox onChange={onRememberMe}>
              <IntlMessages id="common.rememberMe" />
            </Checkbox>

            <StyledSignLink onClick={onGoToForgetPassword}>
              <IntlMessages id="common.forgetPassword" />
            </StyledSignLink>
          </StyledRememberMe>

          <div className="form-btn-field">
            <SignInButton type="primary" htmlType="submit">
              <IntlMessages id="common.login" />
            </SignInButton>
          </div>
{/* 
          <div className="form-field-action">
            <StyledSignTextGrey>
              <IntlMessages id="common.dontHaveAccount" />
            </StyledSignTextGrey>
            <StyledSignLinkTag to="/signup">
              <IntlMessages id="common.signup" />
            </StyledSignLinkTag>
          </div> */}
        </StyledSignForm>
      </StyledSignContent>
      {/* <StyledSignFooter>
        <StyledSignedText>
          <IntlMessages id="common.orLoginWith" />
        </StyledSignedText>
        <StyledSignSocialLink>
          <StyledSignIconBtn
            aria-label="google"
            onClick={() => logInWithPopup('google')}
            icon={<GoogleOutlined />}
          />
          <StyledSignIconBtn
            aria-label="facebook"
            icon={<FaFacebookF />}
            onClick={() => logInWithPopup('facebook')}
          />
          <StyledSignIconBtn
            aria-label="github"
            icon={<GithubOutlined />}
            onClick={() => logInWithPopup('github')}
          />
          <StyledSignIconBtn
            aria-label="twitter"
            icon={<TwitterOutlined />}
            onClick={() => logInWithPopup('twitter')}
          />
        </StyledSignSocialLink>
      </StyledSignFooter> */}
    </StyledSign>
  );
};

export default SignInJwtAuth;
