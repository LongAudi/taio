import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Breadcrumb, Layout, Menu } from 'antd';

const Danhmuc = () => {
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sidebar />
            <div className="hoadonContainer">
                <Navbar />
                Danh mục
            </div>
        </Layout>
    )
}

export default Danhmuc