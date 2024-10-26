import React, { useEffect, useState } from 'react';
import {
  Col,
  Table,
  Button,
  Dropdown,
  Checkbox,
  Space,
  Modal,
  message,
} from 'antd';
import {
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import jwtAxios from '../../../@crema/services/auth/jwt-auth';
import AppCard from '../../../@crema/components/AppCard';
import AppComponentHeader from '../../../@crema/components/AppComponentHeader';
import AppRowContainer from '../../../@crema/components/AppRowContainer';

const Employee = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedColumns, setSelectedColumns] = useState([
    'name',
    'email',
    'customer_id',
    'role',
    'plant',
    'department',
    'plant_head_display',
    'department_head_display',
    'management_representative_display',
    'customer_compliants_representatives_display',
    'status',
  ]); // Default to all columns
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState();
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  useEffect(() => {
    fetchRoles(currentPage);
  }, [currentPage, pageSize]);

  const fetchRoles = (page = 1) => {
    setLoading(true);
    jwtAxios
      .get(`employees?page=${page}`)
      .then((response) => {
        const rolesData = response.data.employee || []; // Default to empty array
        const totalRoles = response.data.pagination.total;
        const perPage = response.data.pagination.per_page;

        setRoles(rolesData);
        setCurrentPage(response.data.pagination.current_page);
        setPageSize(perPage);
        setTotal(totalRoles);
        setLoading(false);
        console.log(response.data.employee);

        console.log('Fetched roles data:', rolesData); // Debugging line
      })
      .catch((error) => {
        console.error('Error fetching roles:', error);
        setLoading(false);
      });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Customer ID',
      dataIndex: 'customer_id',
      key: 'customer_id',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Plant',
      dataIndex: 'plant',
      key: 'plant',
      render: (plant) => plant || 'N/A', // Display 'N/A' if plant is null
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      render: (department) => department || 'N/A', // Display 'N/A' if department is null
    },
    {
      title: 'Plant Head',
      dataIndex: 'plant_head_display',
      key: 'plant_head_display',
    },
    {
      title: 'Department Head',
      dataIndex: 'department_head_display',
      key: 'department_head_display',
    },
    {
      title: 'Management.Rep',
      dataIndex: 'management_representative_display',
      key: 'management_representative_display',
    },
    {
      title: 'CCR',
      dataIndex: 'customer_compliants_representatives_display',
      key: 'customer_compliants_representatives_display',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const totalPages = Math.ceil(total / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageButtons = () => {
    const maxVisibleButtons = 5;
    const startPage =
      Math.floor((currentPage - 1) / maxVisibleButtons) * maxVisibleButtons + 1;
    const endPage = Math.min(startPage + maxVisibleButtons - 1, totalPages);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    ).map((page) => (
      <Button
        size="small"
        key={page}
        type={page === currentPage ? 'primary' : 'default'}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </Button>
    ));
  };

  const handleColumnChange = (checkedValues, column) => {
    setSelectedColumns((prev) =>
      checkedValues.target.checked
        ? [...prev, column]
        : prev.filter((col) => col !== column),
    );
  };

  const menuItems = columns.map((col) => (
    <div key={col.key} style={{ padding: '8px' }}>
      <Checkbox
        checked={selectedColumns.includes(col.key)}
        onChange={(e) => handleColumnChange(e, col.key)}
      >
        {col.title}
      </Checkbox>
    </div>
  ));

  const filteredColumns = columns.filter((col) =>
    selectedColumns.includes(col.key),
  );

  return (
    <AppCard>
      <AppComponentHeader title="Employee List!" />
      <AppRowContainer>
        <Col>
          <Space>
            <Dropdown
              trigger={['click']}
              dropdownRender={() => (
                <div
                  style={{
                    backgroundColor: 'white',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid whitesmoke',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {menuItems}
                </div>
              )}
            >
              <Button>
                Filters <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </Col>
      </AppRowContainer>
      <AppRowContainer>
        <Col span={24}>
          <Table
            columns={filteredColumns}
            dataSource={roles}
            pagination={false}
            scroll={{ x: 1200, y: 400 }}
            loading={loading}
            rowKey={(record) => record.user_id}
          />
        </Col>
      </AppRowContainer>
      <div>
        <Space>
          <Button
            size="small"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            <DoubleLeftOutlined />
          </Button>
          <Button
            size="small"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <LeftOutlined />
          </Button>
          {renderPageButtons()}
          <Button
            size="small"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <RightOutlined />
          </Button>
          <Button
            size="small"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            <DoubleRightOutlined />
          </Button>
        </Space>
      </div>
      <Modal
        title="Role Details"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <p>{modalText}</p>
      </Modal>
    </AppCard>
  );
};

export default Employee;
