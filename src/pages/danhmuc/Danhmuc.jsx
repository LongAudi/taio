import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Breadcrumb, Layout, Menu } from 'antd';
import './danhmuc.scss'
import Index from '../../components/bdDanhmuc/Index'

const Danhmuc = () => {
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sidebar />
            <div className="danhmucContainer">
                <Navbar />
                <Index/>
            </div>
        </Layout>
    )
}

export default Danhmuc