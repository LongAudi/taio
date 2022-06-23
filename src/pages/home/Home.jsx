import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from "../../components/navbar/Navbar"
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
        <Navbar />
      </Layout>
    </div>
  )
}

export default Home