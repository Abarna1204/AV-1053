import React from 'react'
import { Table,Checkbox } from 'antd';



function Dashboard() {
  // Your dataSource
const dataSource = [
  {
    key: '1',
    name: 'Abarna',
    age: 22,
    address: '69 West Street',
    
  },
  {
    key: '2',
    name: 'Varathan',
    age: 27,
    address: 'West Street',
   
  },
  {
    key: '3',
    name: 'Dharini',
    age: 22,
    address: 'West Street',
    
  },
  {
    key: '4',
    name: 'Abu',
    age: 27,
    address: 'West Street',
    
  },
  {
    key: '5',
    name: 'Aravind',
    age: 26,
    address: 'West Street',
    
  },
];

const columns = [
  {
    title: '',
    dataIndex: 'checkbox',
    key: 'checkbox',
    render: () => <Checkbox />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render:()=>{
      return <button>Edit</button>
    }
  },
];
  return (
    <div className='Dashboard-container' > 
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px',marginTop:'20px' }}>
       <h1> <span>Abarna Details</span></h1>
        <button style={{padding:'5px 5px',borderRadius:'6px',background:'blue',color:'white'}}>Create</button>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default Dashboard