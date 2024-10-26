import React from 'react';
import AppCard from '../../../@crema/components/AppCard';
import AppComponentHeader from '../../../@crema/components/AppComponentHeader';
import AppComponentCard from '../../../@crema/components/AppComponentCard';
import ListCard from './ListCard';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { Col } from 'antd';
import CreateRoles from '../roles/CreateRoles';

const Dashboard = () => {
  // return <AppCard>Dashboard</AppCard>;
  return (
    <>
      <AppComponentHeader title="Dashboard" />
      <AppRowContainer>
        <Col span={24} key="list-a">
          <AppComponentCard
            title="Simple List"
            description="Ant Design supports a default list size as well as a large and small size."
            component={CreateRoles}
            // source={SimpleListSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Dashboard;
