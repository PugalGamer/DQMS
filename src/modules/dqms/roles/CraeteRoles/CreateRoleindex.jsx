import React from 'react';

import { Col } from 'antd';
import CreateRoles from './CreateRoles';
import AppComponentHeader from '../../../../@crema/components/AppComponentHeader';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import AppComponentCard from '../../../../@crema/components/AppComponentCard';

const CreateRoleindex = () => {
  return (
    <>
      {/* <AppComponentHeader title="Set Roles Permissions!" /> */}
      <AppRowContainer>
        <Col span={24} key="list-a">
          <AppComponentCard
            title="Set Roles Permissions!" 
            component={CreateRoles}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default CreateRoleindex;
