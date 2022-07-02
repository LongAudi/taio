import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Breadcrumb, Layout, Menu } from 'antd';
import './nguonDL.scss'

const NguonDL = () => {
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sidebar />
            <div className="nguonDLContainer">
                <Navbar />
                Nguồn dữ liệu
            </div>
        </Layout>
    )
}

export default NguonDL