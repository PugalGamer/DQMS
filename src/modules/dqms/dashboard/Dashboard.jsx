import React from 'react';
import AppCard from '../../../@crema/components/AppCard';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { Col } from 'antd';
import AppAnimate from '../../../@crema/components/AppAnimate';

const Dashboard = () => {
  // return <AppCard>Dashboard</AppCard>;
  return (
    <>
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <AppRowContainer delay={150}>
          <Col xs={24} md={6} xl={6}>
            <AppCard>one</AppCard>
          </Col>
          <Col xs={24} md={6} xl={6} >
            <AppCard>two</AppCard>
          </Col>
          <Col xs={24} md={6} xl={6} >
            <AppCard>one</AppCard>
          </Col>
          <Col xs={24} md={6} xl={6}>
            <AppCard>two</AppCard>
          </Col>
        </AppRowContainer>
      </AppAnimate>
    </>
  );
};

export default Dashboard;
