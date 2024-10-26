import React from 'react';
import { Space } from 'antd';
import CreateRoles from '../roles/CreateRoles';



const ListCard = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <CreateRoles />
    </Space>
  );
};

export default ListCard;
