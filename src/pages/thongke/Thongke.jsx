import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Breadcrumb, Layout, Menu } from 'antd';
import Index from '../../components/bdThongke/Index';

const Thongke = () => {
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sidebar />
            <div className="thongkeContainer">
                <Navbar />
                <Index/>
            </div>
        </Layout>
    )
}

export default Thongke