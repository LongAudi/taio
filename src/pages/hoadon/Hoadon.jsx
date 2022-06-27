import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Breadcrumb, Layout, Menu } from 'antd';
import "./hoadon.scss"
import Index from '../../components/bdHoadon/Index';

const Hoadon = () => {
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sidebar />
            <div className="hoadonContainer">
                <Navbar />
                <Index/>
            </div>
        </Layout>
    )
}

export default Hoadon