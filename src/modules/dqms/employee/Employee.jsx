import React, { useEffect, useState } from 'react';
import {
  Row,
  Col,
  Table,
  Button,
  Dropdown,
  Checkbox,
  Space,
  Input,
  Modal,
  message,
} from 'antd';
import {
  DownOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
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
  const [roles, setRoles] = useState([]); // State to store fetched roles
  const [loading, setLoading] = useState(true); // State to manage loading
  const [selectedColumns, setSelectedColumns] = useState([
    'user_id',
    'user_email',
    'plant_id',
    'department_id',
    'user_title',
    'user_customer_id',
    'role_name',
    'user_status',
  ]); // Default selected columns
  const [filteredData, setFilteredData] = useState([]); // State to store filtered data
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [pageSize, setPageSize] = useState(); // Initialize with a default value; will be updated from the response
  const [total, setTotal] = useState(0); // Total roles count

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const [selectedRole, setSelectedRole] = useState(null);
  const { Search } = Input;
  const [searchTerm, setSearchTerm] = useState('');

  // Define the columns for the table
  // const columns = [
  //   {
  //     title: 'S.No',
  //     dataIndex: 'user_id',
  //     key: 'user_id',
  //   },
  //   {
  //     title: 'Email',
  //     dataIndex: 'user_email',
  //     key: 'user_email',
  //   },
  //   {
  //     title: 'PlantHead',
  //     dataIndex: 'user_plant_head',
  //     key: 'user_plant_head',
  //   },
  //   {
  //     title: 'DepartmentHead',
  //     dataIndex: 'user_department_head',
  //     key: 'user_department_head',
  //   },
  //   {
  //     title: 'Title',
  //     dataIndex: 'user_title',
  //     key: 'user_title',
  //   },
  //   {
  //     title: 'CustomerId',
  //     dataIndex: 'user_customer_id',
  //     key: 'user_customer_id',
  //   },
  //   {
  //     title: 'Role',
  //     dataIndex: 'role_name',
  //     key: 'role_name',
  //   },

  //   // {
  //   //   title: 'Action',
  //   //   key: 'action',
  //   //   render: (text, record) => (
  //   //     <Space>
  //   //       <EyeOutlined
  //   //         style={{ color: 'blue', cursor: 'pointer' }}
  //   //         // onClick={() => showModal(record.role_id)} // Pass role ID to showModal
  //   //       />
  //   //       <EditOutlined
  //   //         style={{ cursor: 'pointer' }}
  //   //         // onClick={() => handleEdit(record.role_id)} // Updated Edit handler
  //   //       />
  //   //       <DeleteOutlined
  //   //         style={{ color: 'red', cursor: 'pointer' }}
  //   //         // onClick={() => handleDelete(record.role_id)} // Pass role ID to handleDelete
  //   //       />
  //   //     </Space>
  //   //   ),
  //   // },
  // ];
  // Define the columns for the table
  const columns = [
    {
      title: 'S.No',
      dataIndex: 'user_id',
      key: 'user_id',
    },
    {
      title: 'Email',
      dataIndex: 'user_email',
      key: 'user_email',
    },
    {
      title: 'Customer ID',
      dataIndex: 'user_customer_id',
      key: 'user_customer_id',
    },
    {
      title: 'Plant',
      dataIndex: ['plant', 'plant_name'], // Nested field
      key: 'plant_id',
    },
    {
      title: 'Department',
      dataIndex: ['department', 'dep_name'], // Nested field
      key: 'department_id',
    },
    {
      title: 'Status',
      dataIndex: 'user_status',
      key: 'user_status',
      render: (status) => (status ? 'Active' : 'Suspended'), // Convert 1 to Active, 0 to Inactive
    },
    {
      title: 'Role',
      dataIndex: ['role', 'role_name'], // Nested field
      key: 'role_name',
    },
  ];
  // Fetch roles from the API using axios with pagination
  useEffect(() => {
    fetchRoles(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const fetchRoles = (page = 1) => {
    setLoading(true); // Start loading
    jwtAxios
      .get(`employees?page=${page}`)
      .then((response) => {
        const rolesData = response.data.employee.data; // Get roles data from response
        const totalRoles = response.data.employee.total; // Get total roles from response
        const perPage = response.data.employee.per_page; // Get page size from response

        setRoles(rolesData); // Update state with fetched roles
        setFilteredData(rolesData); // Set filtered data to display in the table
        setCurrentPage(response.data.employee.current_page); // Set current page from response
        setPageSize(perPage); // Set page size from response
        setTotal(totalRoles); // Set total roles from response
        setLoading(false); // End loading
      })
      .catch((error) => {
        console.error('Error fetching roles:', error);
        setLoading(false); // End loading even if error
      });
  };
  const totalPages = Math.ceil(total / pageSize); // Calculate total pages
  const maxVisibleButtons = 5; // Maximum number of page buttons to show at a time

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Generate page buttons for the current chunk of pages
  const renderPageButtons = () => {
    const startPage =
      Math.floor((currentPage - 1) / maxVisibleButtons) * maxVisibleButtons + 1;
    const endPage = Math.min(startPage + maxVisibleButtons - 1, totalPages);

    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          size="small"
          key={i}
          type={i === currentPage ? 'primary' : 'default'} // Highlight the current page
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Button>,
      );
    }
    return buttons;
  };

  // Handle column selection
  const handleColumnChange = (checkedValues, column) => {
    setSelectedColumns((prev) => {
      if (checkedValues.target.checked) {
        return [...prev, column]; // Add selected column
      } else {
        return prev.filter((col) => col !== column); // Remove unselected column
      }
    });
  };

  // Create the checkbox list for the dropdown
  const menuItems = columns
    .filter((col) => col.key !== 'action') // Exclude 'Action' from the selection
    .map((col) => (
      <div key={col.key} style={{ padding: '8px' }}>
        <Checkbox
          checked={selectedColumns.includes(col.key)}
          onChange={(e) => handleColumnChange(e, col.key)}
        >
          {col.title}
        </Checkbox>
      </div>
    ));

  // Filter table columns based on selected columns, always include 'Action'
  const filteredColumns = columns.filter(
    (col) => selectedColumns.includes(col.key) || col.key === 'action',
  );

  // Function to filter table data based on search term (by id or name)
  // const handleSearch = (value) => {
  //   setSearchTerm(value);
  //   const filtered = roles.filter((roleData) => {
  //     const searchValue = value.toLowerCase();
  //     return (
  //       roleData.role_name.toLowerCase().includes(searchValue) ||
  //       roleData.role_id.toString().includes(searchValue)
  //     );
  //   });
  //   setFilteredData(filtered);
  // };

  const handleOk = () => {
    setOpen(false); // Close modal
  };

  const handleCancel = () => {
    setOpen(false); // Close modal
  };

  // // Fetch selected role data and show modal
  // const showModal = (roleId) => {
  //   jwtAxios
  //     .get(`role-view/?role_id=${roleId}`)
  //     .then((response) => {
  //       const role = response.data.role; // Access role data from response
  //       setSelectedRole(role); // Store role data in state
  //       setModalText(`ID: ${role.role_id}, Name: ${role.role_name}`); // Set modal content
  //       setOpen(true); // Show modal
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching role data:', error);
  //     });
  // };

  // const handleEdit = (roleId) => {
  //   // Fetch role permissions and redirect to the edit page
  //   jwtAxios
  //     .post(`role-permission-edit?role_id=${roleId}`, null, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       const rolePermissions = response.data; // Role permission data
  //       console.log(rolePermissions);

  //       // Navigate to the edit page and pass the rolePermissions as state
  //       navigate('/admin-panel/roles/edit', { state: { rolePermissions } });
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching role permissions:', error);
  //       message.error('Failed to fetch role permissions');
  //     });
  // };
  // const handleDelete = (roleId) => {
  //   jwtAxios
  //     .delete(`role-permission-delete/?role_id=${roleId}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`, // Optional, since it's set globally in Axios
  //       },
  //     })
  //     .then((response) => {
  //       console.log('Role deleted successfully');
  //       const filtered = roles.filter((role) => role.role_id !== roleId); // Adjust to match your data structure
  //       setRoles(filtered); // Update state with filtered roles
  //       setFilteredData(filtered); // Update table data
  //       setSelectedRole(null); // Clear selected role
  //       message.success('Role deleted successfully!');
  //       fetchRoles(currentPage); // Fetch updated data
  //     })
  //     .catch((error) => {
  //       console.error('Error deleting role:', error);
  //       message.error('Error deleting role!');
  //     });
  // };

  return (
    <AppCard>
      <AppComponentHeader title="Empleoyee List!" />
      <AppRowContainer>
        <Col>
          {/* Left side items */}
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
                All <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </Col>
        {/* <Col>
          <Space>
            <Search
              placeholder="Search by ID or Name"
              allowClear
              size="middle"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)} // Update search term dynamically
            />
            <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{ marginLeft: '10px' }}
            onClick={() => navigate('/admin-panel/roles/create')}
          >
            Add
          </Button>
          </Space>
        </Col> */}
      </AppRowContainer>
      <AppRowContainer>
        <Col span={24}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Table
              columns={filteredColumns} // Filtered columns
              dataSource={filteredData} // Filtered data
              pagination={false}
              scroll={{ y: 240 }}
              loading={loading} // Loading state
              rowKey={(record) => record.role_id} // Key for rows
            />
          </Space>
        </Col>
      </AppRowContainer>
      <div>
        <Space>
          {/* Show the "First" button to jump to the first page */}
          <Button
            size="small"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1} // Disable if already on the last page
          >
            <DoubleLeftOutlined />
          </Button>
          {/* Previous Button */}
          <Button
            size="small"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1} // Disable if on the first page
          >
            <LeftOutlined />
          </Button>

          {/* Render page buttons */}
          {renderPageButtons()}

          {/* Next Button */}
          <Button
            size="small"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages} // Disable if on the last page
          >
            <RightOutlined />
          </Button>

          {/* Show the "Last" button to jump to the last page */}
          <Button
            size="small"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages} // Disable if already on the last page
          >
            <DoubleRightOutlined />
          </Button>
        </Space>
      </div>
      {/* Modal for role details */}
      <Modal
        title="Role Details"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </AppCard>
  );
};

export default Employee;
