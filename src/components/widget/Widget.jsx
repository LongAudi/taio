import React from 'react'
import './Widget.scss'
import { FileTextOutlined, HomeOutlined, UserOutlined,CarryOutOutlined } from '@ant-design/icons';

const Widget = ({ type }) => {

    let data;

    switch (type) {
        case "hoadon":
            data = {
                title: "Hóa đơn",
                icon: (<FileTextOutlined style={{
                    color: "#71C8C7",
                }} />),
                counter: "01"
            }
            break;
        case "doanhnghiep":
            data = {
                title: "Doanh nghiệp",
                icon: (<HomeOutlined style={{
                    color: "#F6847B",
                }} />),
                counter: "02"
            }
            break;
        case "taikhoan":
            data = {
                title: "Tài khoản",
                icon: (<UserOutlined style={{
                    color: "#5B93FF",
                }} />),
                counter: "03"
            }
            break;
        case "yeucaucho":
            data = {
                title: "Số yêu cầu chờ",
                icon: (<CarryOutOutlined style={{
                    color: "#F4D767",
                }} />),
                counter: "04"
            }
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left" >
                <span className='icon'>{data.icon}</span>
            </div>
            <div className="right">
                <div className="counter">{data.counter}</div>
                <div className="title">{data.title}</div>
            </div>
        </div>
    )
}

export default Widget