import React, { useEffect, useState } from 'react';
import { Table, message, Button, Dropdown, Menu, Tag } from 'antd';
import { MoreOutlined,MinusOutlined } from '@ant-design/icons';
import axios from 'axios';
import './FetchData.css';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post('https://prod.api.authnull.com/api/v1/policyService/FilterPolicy',
        {
          id: 1,
          tenantId: 7,
          orgId: 84,
          policyStatus: "Approved",
          policyType: 'local',
          protocol: "",
          // samAccountName:false,
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
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      message.error('Failed to fetch data');
      setLoading(false);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">Create Policy</Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: 'Policy Name',
      dataIndex: 'policyName',
      key: 'policyName',
      render:(text)=>{
        if(!text){
          return <MinusOutlined />;
        }else{
          return text;
        }
      }
    },
    {
      title: 'Policy Status',
      dataIndex: 'policyStatus',
      key: 'policyStatus',
      render: (text) => {
        let color;
        switch (text) {
          case 'Approved':
            color = 'green';
            break;
          case 'In Review':
            color = 'Brown';
            break;
          case 'Denied':
            color = 'red';
            break;
          default:
            color = 'black';
        }
        return <span style={{ color }}>{text}</span>;
      },
    },
    {
      title: 'Protocol',
      dataIndex: 'protocol',
      key: 'protocol',
      render:(text)=>{
        if(!text){
          return <MinusOutlined />;
        }else{
          return text;
        }
      }
    },
    {
      title: 'SourceEndPoint',
      dataIndex: 'sourceEndpoint',
      key: 'sourceEndpoint',
      render:(text)=>{
        if(!text){
          return <MinusOutlined />;
        }else{
          return text;
        }
      }
    },
    {
      title: 'SourceEndPointMatch',
      dataIndex: 'sourceEndpointMatch',
      key: 'sourceEndpointMatch',
      render:(text)=>{
        if(!text){
          return <MinusOutlined/>;
        }else{
          return text;
        }
      }
    },
    {
      title: 'SourceEndPointType',
      dataIndex: 'sourceEndpointType',
      key: 'sourceEndpointType',
      render:(text)=>{
        if(!text){
          return <MinusOutlined/>;
        }else{
          return text;
        }
      }
    },
    {
      title: 'TimeStamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
    },
    {
      title: 'WalletUsers',
      dataIndex: 'walletUsers',
      key: 'walletUsers',
      render: (email) => {
        if(!email){
          return <MinusOutlined/>
        }else
        return <Tag className="autosize-cell" color="blue">{email}</Tag>;
       
      },
    },
    {
      title: 'Action',
      key: 'Action',
      render: () => (
        <Dropdown overlay={menu} trigger={['hover']}>
          <MoreOutlined style={{ cursor: 'pointer' }} />
        </Dropdown>
      
      ),
    },
  ];

  return (
    <div className='table-container'>
      <div style={{ marginLeft: '30px', marginRight: '30px', display: 'flex', justifyContent: 'space-between', marginBottom: '16px', marginTop: '20px' }}>
        <h2>Authentication Policies</h2>
        <Button style={{ backgroundColor: 'blue', color: 'white' }}>
          Add Policy
        </Button>
      </div>
      <Table
        style={{ marginLeft: '30px', marginRight: '30px' }}
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey="id"
        scroll={{ y: 400 }}
        // onRow={(record) => ({
        //   className: 'autosize-cell', 
        // })}
      />
    </div>
  );
};

export default FetchData;
