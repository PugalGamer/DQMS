import { Button, Checkbox, Col, Form, Input, message, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtAxios from '../../../../@crema/services/auth/jwt-auth';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';

const CreateRoles = () => {
  const [form] = Form.useForm(); // Initialize form instance
  const [name, setName] = useState('');
  const [modules, setModules] = useState([]);

  const navigate = useNavigate();

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

  // Handle form submission
  // const handleSubmit = (values) => {
  //   infoViewActionsContext.fetchStart();

  //   const permissions = modules
  //     .map((module) => {
  //       const create = values[`create_${module.mod_id}`] ? 1 : 0;
  //       const view = values[`view${module.mod_id}`] ? 1 : 0;
  //       const update = values[`update_${module.mod_id}`] ? 1 : 0;
  //       const deletePermission = values[`delete_${module.mod_id}`] ? 1 : 0;

  //       // Only include modules that have at least one permission set to 1
  //       if (
  //         create === 1 ||
  //         view === 1 ||
  //         update === 1 ||
  //         deletePermission === 1
  //       ) {
  //         return {
  //           per_mod_id: module.mod_id,
  //           create,
  //           view,
  //           update,
  //           delete: deletePermission, // Note: "delete" is a reserved word, but it can still be used as a key
  //         };
  //       }
  //       return null; // Filter out nulls later
  //     })
  //     .filter((permission) => permission !== null); // Only keep valid permissions

  //   const payload = {
  //     role_name: values.name, //
  //     permissions: permissions, // Directly using the permissions array
  //   };

  //   console.log('Payload to post:', JSON.stringify(payload));
  //   jwtAxios
  //     .post(`role-permission-create`, JSON.stringify(payload))
  //     .then((response) => {
  //       infoViewActionsContext.fetchSuccess(response.data.message);

  //       form.resetFields(); // Reset the form fields
  //       setTimeout(() => {
  //         navigate('/roles');
  //       }, 2000);
  //     })
  //     .catch((error) => {
  //       // Display the specific failure message directly from the response
  //       const errorMessage =
  //         error.response?.data?.message || 'An error occurred.';
  //       infoViewActionsContext.fetchError(errorMessage);

  //       console.error('Error submitting permissions:', error);
  //     });
  // };
  const handleSubmit = (values) => {
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
      .filter((permission) => permission !== null);

    const payload = {
      role_name: values.name,
      permissions,
    };

    jwtAxios
      .post(`role-permission-create`, JSON.stringify(payload))
      .then((response) => {
        message.success(response.data.message);
        form.resetFields();
        setTimeout(() => {
          navigate('/roles');
        }, 2000);
      })
      .catch((error) => {
        // Directly display the error message from the response
        message.error(error.response?.data?.message);
        console.error('Error submitting permissions:', error);
      });
  };

  return (
    <Col span={24}>
      <Form form={form} onFinish={handleSubmit}>
        <AppRowContainer gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item
              label="Role"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please enter the Role!',
                },
              ]}
            >
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Item>
          </Col>
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
            <Col xs={24} sm={24} md={8} lg={8}>
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
              <Form.Item name={`view_${module.mod_id}`} valuePropName="checked">
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
            Create
          </Button>
        </Space>
      </Form>
    </Col>
  );
};

export default CreateRoles;
