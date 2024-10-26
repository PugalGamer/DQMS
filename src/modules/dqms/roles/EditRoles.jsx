import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Col, Form, message, Row, Space, Input } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import jwtAxios from '../../../@crema/services/auth/jwt-auth';
import AppComponentHeader from '../../../@crema/components/AppComponentHeader';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import AppCard from '../../../@crema/components/AppCard';

const EditRoles = () => {
  const [form] = Form.useForm();
  const [modules, setModules] = useState([]);
  const [name, setName] = useState('');
  const [rolePermissions, setRolePermissions] = useState(null);

  const navigate = useNavigate();
  const location = useLocation(); // Hook to access navigation state
  const { rolePermissions: permissionsData } = location.state || {}; // Extract rolePermissions from the state

  // Fetch modules from API
  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await jwtAxios.get(`modules`);
        setModules(response.data.module);
      } catch (error) {
        console.error('Error fetching modules:', error);
        message.error(error);
      }
    };

    fetchModules();
  }, []);

  // Pre-fill form based on the passed rolePermissions
  useEffect(() => {
    if (permissionsData) {
      setRolePermissions(permissionsData);
      const { per_role_id, permissions, roleList } = permissionsData;
      // Automatically set role name based on per_role_id
      if (roleList && roleList.length > 0) {
        const selectedRole = roleList.find(
          (role) => String(role.role_id) === String(per_role_id),
        );
        if (selectedRole) {
          setName(selectedRole.role_name);
        }
      }

      // Map permissions to form fields
      if (permissions) {
        const formValues = {};
        permissions.forEach((permission) => {
          formValues[`create_${permission.per_mod_id}`] =
            permission.create === 1;
          formValues[`view_${permission.per_mod_id}`] = permission.view === 1;
          formValues[`update_${permission.per_mod_id}`] =
            permission.update === 1;
          formValues[`delete_${permission.per_mod_id}`] =
            permission.delete === 1;
        });

        form.setFieldsValue(formValues); // Set form values
      }
    }
  }, [permissionsData, form]);

  // Handle form submission
  const handleSubmit = (values) => {
    if (!permissionsData || !permissionsData.per_role_id) {
      message.error('Role ID is missing.');
      return;
    }

    const permissions = modules
      .map((module) => {
        const create = values[`create_${module.mod_id}`] ? 1 : 0;
        const view = values[`view_${module.mod_id}`] ? 1 : 0;
        const update = values[`update_${module.mod_id}`] ? 1 : 0;
        const deletePermission = values[`delete_${module.mod_id}`] ? 1 : 0;

        if (create || view || update || deletePermission) {
          return {
            per_mod_id: module.mod_id,
            create,
            view,
            update,
            delete: deletePermission,
          };
        }
        return null;
      })
      .filter(Boolean);

    const payload = {
      role_id: permissionsData.per_role_id, // Ensure this is not undefined
      role_name: name,
      permissions,
    };

    console.log('Payload to be sent:', JSON.stringify(payload));

    jwtAxios
      .put(`role-permission-update`, payload) // Pass payload here
      .then((response) => {
        message.success(response.data.message);
        form.resetFields();
        setTimeout(() => {
          navigate('/roles');
        }, 2000);
      })
      .catch((error) => {
        console.error('Error submitting permissions:', error);
        message.error(error.response?.data?.message);
      });
  };

  return (
    <AppRowContainer>
      <Col span={14} offset={5}>
        <AppCard>
          <AppComponentHeader title="Edit Role-Permissions!" />
          <AppRowContainer>
            <Col span={24}>
              <Space direction="vertical" style={{ width: '100%' }}></Space>

              <Form form={form} onFinish={handleSubmit}>
                <AppRowContainer gutter={[16, 16]}>
                  <Space>
                    <Col xs={24} sm={24} md={24} lg={24}>
                      <Input value={name} readOnly />
                    </Col>
                  </Space>
                </AppRowContainer>

                <AppRowContainer gutter={[16, 16]}>
                  <Col xs={0} sm={0} md={8} lg={8}></Col>
                  {/* Empty column for spacing on larger screens */}
                  <Col xs={6} sm={6} md={4} lg={4}>
                    Create
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4}>
                    View
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4}>
                    Update
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4}>
                    Delete
                  </Col>
                </AppRowContainer>

                {modules.map((module) => (
                  <AppRowContainer key={module.mod_id} gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={8} lg={8}>
                      <Form.Item
                        label={module.mod_name}
                        name={`module_${module.mod_id}`}
                      />
                    </Col>
                    <Col xs={6} sm={6} md={4} lg={4}>
                      <Form.Item
                        name={`create_${module.mod_id}`}
                        valuePropName="checked"
                      >
                        <Checkbox />
                      </Form.Item>
                    </Col>
                    <Col xs={6} sm={6} md={4} lg={4}>
                      <Form.Item
                        name={`view_${module.mod_id}`}
                        valuePropName="checked"
                      >
                        <Checkbox />
                      </Form.Item>
                    </Col>
                    <Col xs={6} sm={6} md={4} lg={4}>
                      <Form.Item
                        name={`update_${module.mod_id}`}
                        valuePropName="checked"
                      >
                        <Checkbox />
                      </Form.Item>
                    </Col>
                    <Col xs={6} sm={6} md={4} lg={4}>
                      <Form.Item
                        name={`delete_${module.mod_id}`}
                        valuePropName="checked"
                      >
                        <Checkbox />
                      </Form.Item>
                    </Col>
                  </AppRowContainer>
                ))}

                <Space className="d-flex" style={{ marginTop: '16px' }}>
                  <Button
                    type="primary"
                    className="d-flex"
                    onClick={() => navigate('/roles')}
                  >
                    Back
                  </Button>
                  <Button type="primary" htmlType="submit" className="d-flex">
                    Save
                  </Button>
                </Space>
              </Form>
            </Col>
          </AppRowContainer>
        </AppCard>
      </Col>
    </AppRowContainer>
  );
};

export default EditRoles;
