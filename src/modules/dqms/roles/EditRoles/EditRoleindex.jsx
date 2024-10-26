import React from 'react';

import { Col } from 'antd';
import EditRoles from './EditRoles';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import AppComponentCard from '../../../../@crema/components/AppComponentCard';

const EditRoleindex = () => {
  return (
    <>
      {/* <AppComponentHeader title="Set Roles Permissions!" /> */}
      <AppRowContainer>
        <Col span={24} key="list-a">
          <AppComponentCard
            title="Edit Role-Permissions!"
            component={EditRoles}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default EditRoleindex;
