import React, { useState } from 'react'
import "./navbar.scss"
import { Dropdown, Layout, Input, Menu, Button, Select, Space } from 'antd';
import { DownOutlined, BellOutlined } from '@ant-design/icons';

const menu = (
  <Menu
    items={[
      {
        label: 'Submit and continue',
        key: '1',
      },
    ]}
  />
);

const { Option } = Select;

const { Header, Content, Footer, Sider } = Layout;

const Navbar = () => {

  const [loadings, setLoadings] = useState([]);

  const enterLoading = (index) => {
    setLoadings((state) => {
      const newLoadings = [...state];
      newLoadings[index] = true;
      return newLoadings;
    });
  };

  return (
    <Layout className="site-layout">
      <Header>
        <div className="left">
          <Dropdown overlay={menu}>
            <Button>
              <Space>
                Olivenetworks
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
        <div className="center">
          <input type="text" placeholder='Tìm kiếm' />
        </div>
        <div className='right'>
          <Input.Group compact>
            <Select defaultValue="Zhejiang">
              <Option value="Zhejiang">English(US)</Option>
              <Option value="Jiangsu">China</Option>
            </Select>
          </Input.Group>
          <BellOutlined className='icon' />
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </Header>
    </Layout>
  )
}

export default Navbar