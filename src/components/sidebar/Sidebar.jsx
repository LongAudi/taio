import React, { useState } from 'react'
import 'antd/dist/antd.css';
import "./sidebar.scss"
import { FileTextOutlined, HomeOutlined, SolutionOutlined, SettingOutlined, GiftOutlined, BarChartOutlined, DatabaseOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import Logo from "../../images/logo.png"
import { Link} from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout;



const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <img src={Logo} alt="" />
      <Link to="/" style={{ textDecoration: "none" }}>
        <Menu mode="inline">
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <HomeOutlined/>
              <span>Dashboard</span>
            </li>
          </Link>
        </Menu>
        <Menu mode="inline">
          <Link to="/hoadon" style={{ textDecoration: "none" }}>
            <li>
              <FileTextOutlined/>
              <span>Hóa đơn</span>
            </li>
          </Link>
        </Menu>
        <Menu mode="inline">
          <Link to="/thongke" style={{ textDecoration: "none" }}>
            <li>
              <BarChartOutlined/>
              <span>Thống kê</span>
            </li>
          </Link>
        </Menu>
        <Menu mode="inline">
          <Link to="/baocao" style={{ textDecoration: "none" }}>
            <li>
              <SolutionOutlined/>
              <span>Báo cáo</span>
            </li>
          </Link>
        </Menu>
        <Menu mode="inline">
          <Link to="/nguonDL" style={{ textDecoration: "none" }}>
            <li>
              <DatabaseOutlined/>
              <span>Nguốn dữ liệu</span>
            </li>
          </Link>
        </Menu>
        <Menu mode="inline">
          <Link to="/danhmuc" style={{ textDecoration: "none" }}>
            <li>
              <UnorderedListOutlined/>
              <span>Danh mục</span>
            </li>
          </Link>
        </Menu>
        <Menu mode="inline">
          <Link to="/hethong" style={{ textDecoration: "none" }}>
            <li>
              <SettingOutlined/>
              <span>Hệ thống</span>
            </li>
          </Link>
        </Menu>
        <Menu mode="inline">
          <Link to="/goiHD" style={{ textDecoration: "none" }}>
            <li>
              <GiftOutlined/>
              <span>Gói hóa đơn</span>
            </li>
          </Link>
        </Menu>
      </Link>
    </Sider>
  )
}

export default Sidebar