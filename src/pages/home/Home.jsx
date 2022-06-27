import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import { Breadcrumb, Layout, Menu } from 'antd';

const Home = () => {
  return (
    <div className="home">
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="hoadon"/>
            <Widget type="doanhnghiep" />
            <Widget type="taikhoan" />
            <Widget type="yeucaucho"/>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home