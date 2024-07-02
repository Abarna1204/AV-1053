import React, { useEffect, useState } from 'react';
import { Form, Select, Button, Col, Row } from 'antd';
import axios from 'axios';

const { Option } = Select;

function Forms() {
  const [policies, setPolicies] = useState([]);
  const [policyTypes, setPolicyTypes] = useState([]);


  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      const response = await axios.post('https://prod.api.authnull.com/api/v1/policyService/FilterPolicy',
        {
          id: 1,
          tenantId: 7,
          orgId: 84,
          policyStatus: "Approved",
          policyType: 'local',
          protocol: "",
          sourceEndpoint: "",
          sourceEndpointMatch: "",
          sourceEndpointType: "",
          timestamp: 1718266293,
          walletUsers: "muthudurai0058@gmail.com", 
          filters: [
            {
              filterParameter: 'policyType',
              filterValue: 'local',
            },
          ],
          requestId: '',
          limit: 100,
          sort: {},
        });
        
      console.log(response.data);  
      setPolicies(response.data.data); 
      setPolicyTypes(response.data.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={{ marginLeft: "30px", marginRight: "30px" }}>
      <h1>Create Policy</h1>
      <Form layout='vertical'>
        <Row gutter={16} style={{ marginBottom: 20 }}>
          <Col span={12}>
            <Form.Item
              label="Policy Name"
              name="policyName"
              rules={[{ required: true }]}
            >
              <Select placeholder='Select Policy Name'>
                {policies.map((policy) => (
                  <Option key={policy.id} value={policy.policyName}>
                    {policy.policyName}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Policy Type"
              name="policyType"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select Policy Type">
              {policyTypes.map((type) => (
                  <Option key={type.id} value={type.policyTypes}>
                    {type.setPolicyTypes}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <h3 style={{ color: "blue" }}>Resources that can be accessed</h3>
        <Row gutter={16} style={{ marginBottom: 20 }}>
          <Col span={12}>
            <Form.Item
              label="Endpoints and Endpoint Groups"
              name="endpointsAndGroups"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select Endpoints and Endpoint Groups">
                <Option value="emp3,emp5">emp3,emp5</Option>
                <Option value="emp6,emp7">emp6,emp7</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Endpoints"
              name="endpoints"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select Endpoints">
                <Option value="endpoint1">Endpoint1</Option>
                <Option value="endpoint2">Endpoint2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginBottom: 20 }}>
          <Col span={12}>
            <Form.Item
              label="Endpoints Users"
              name="endpointUsers"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select Endpoint Users">
                <Option value="user1">User1</Option>
                <Option value="user2">User2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Endpoints User"
              name="endpointUser"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select Endpoint User">
                <Option value="user3">User3</Option>
                <Option value="user4">User4</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <h3 style={{ color: 'blue' }}>Policy applicable to</h3>
        <Row>
          <Col span={12}>
            <Form.Item>
              <Select placeholder="Select Wallet Users">
                <Option value="muthudurai1011@gmail.com">muthudurai1011@gmail.com</Option>
                <Option value="hema@kloudone.io">hema@kloudone.io</Option>
                <Option value="sharansk001@gmail.com">sharansk001@gmail.com</Option>
                <Option value="aa@authunull.com">aa@authunull.com</Option>
                <Option value="aaa@authunull.org">aaa@authunull.org</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <h3 style={{ color: 'blue' }}>Select the policy action</h3>
        <Row>
          <Col span={12}>
            <Form.Item>
              <Select placeholder="Allow">
                <Option value="Allow">Allow</Option>
                <Option value="Deny">Deny</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Button type="primary" style={{ float: "right" }}>Create Policy</Button>
    </div>
  );
}

export default Forms;
