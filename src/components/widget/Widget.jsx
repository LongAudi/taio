import React from 'react'
import './Widget.scss'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { FileTextOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { style } from '@mui/system';

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
                    color: "#F4D767",
                }} />),
                counter: "03"
            }
            break;
        case "yeucaucho":
            data = {
                title: "Số yêu cầu chờ",
                icon: (<UserOutlined style={{
                    color: "#F4D767",
                }} />),
                counter: "03"
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