import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Breadcrumb, Layout, Menu } from 'antd';
import './hethong.scss'
import Index from '../../components/bdHethong/Index';

const Hethong = () => {
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sidebar />
            <div className="hethongContainer">
                <Navbar />
                <Index/>
            </div>
        </Layout>
    )
}

export default Hethong