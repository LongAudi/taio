import React, { useState } from 'react'
import 'antd/dist/antd.css';
import "./sidebar.scss"
import { FileTextOutlined, HomeOutlined, SolutionOutlined, SettingOutlined, GiftOutlined, BarChartOutlined, DatabaseOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import Logo from "../../images/logo.png"

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Dashboard', '1', <HomeOutlined />),
  getItem('Hóa đơn', '2', <FileTextOutlined />),
  getItem('Thống kê', '3', <BarChartOutlined />),
  getItem('Báo cáo', '4', <SolutionOutlined />),
  getItem('Nguốn dữ liệu', '5', <DatabaseOutlined />),
  getItem('Danh mục', '6', <UnorderedListOutlined />),
  getItem('Hệ thống', '7', <SettingOutlined />),
  getItem('Gói hóa đơn', '8', <GiftOutlined />),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <img src={Logo} alt="" />
      <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  )
}

export default Sidebar