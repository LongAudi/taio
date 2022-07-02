import React from 'react'
import './index.scss'
import { Cascader } from 'antd';
import { Table } from 'antd';
import './index.scss'

const onChange = (value) => {
    console.log(value);
};

const data = [
    {
        stt: '1',
        MDNS: '031246467232',
        MDN: 'CÔNG TY TNHH CJ OLIVERNETWORKSVINA    ',
        EmailNhan: 'abckhdjij@nhanhoadon.com',
        SDT: '0934722356',
    },
    {
        stt: '1',
        MDNS: '031246467232',
        MDN: 'CÔNG TY TNHH CJ OLIVERNETWORKSVINA    ',
        EmailNhan: 'abckhdjij@nhanhoadon.com',
        SDT: '0934722356',
    },
    {
        stt: '1',
        MDNS: '031246467232',
        MDN: 'CÔNG TY TNHH CJ OLIVERNETWORKSVINA    ',
        EmailNhan: 'abckhdjij@nhanhoadon.com',
        SDT: '0934722356',
    },
    {
        stt: '1',
        MDNS: '031246467232',
        MDN: 'CÔNG TY TNHH CJ OLIVERNETWORKSVINA    ',
        EmailNhan: 'abckhdjij@nhanhoadon.com',
        SDT: '0934722356',
    },
    {
        stt: '1',
        MDNS: '031246467232',
        MDN: 'CÔNG TY TNHH CJ OLIVERNETWORKSVINA    ',
        EmailNhan: 'abckhdjij@nhanhoadon.com',
        SDT: '0934722356',
    },
    {
        stt: '1',
        MDNS: '031246467232',
        MDN: 'CÔNG TY TNHH CJ OLIVERNETWORKSVINA    ',
        EmailNhan: 'abckhdjij@nhanhoadon.com',
        SDT: '0934722356',
    },
    {
        stt: '1',
        MDNS: '031246467232',
        MDN: 'CÔNG TY TNHH CJ OLIVERNETWORKSVINA    ',
        EmailNhan: 'abckhdjij@nhanhoadon.com',
        SDT: '0934722356',
    },
    {
        stt: '1',
        MDNS: '031246467232',
        MDN: 'CÔNG TY TNHH CJ OLIVERNETWORKSVINA    ',
        EmailNhan: 'abckhdjij@nhanhoadon.com',
        SDT: '0934722356',
    },
    {
        stt: '1',
        MDNS: '031246467232',
        MDN: 'CÔNG TY TNHH CJ OLIVERNETWORKSVINA    ',
        EmailNhan: 'abckhdjij@nhanhoadon.com',
        SDT: '0934722356',
    },
    {
        stt: '1',
        MDNS: '031246467232',
        MDN: 'CÔNG TY TNHH CJ OLIVERNETWORKSVINA    ',
        EmailNhan: 'abckhdjij@nhanhoadon.com',
        SDT: '0934722356',
    },
    {
        stt: '1',
        MDNS: '031246467232',
        MDN: 'CÔNG TY TNHH CJ OLIVERNETWORKSVINA    ',
        EmailNhan: 'abckhdjij@nhanhoadon.com',
        SDT: '0934722356',
    },
    {
        stt: '1',
        MDNS: '031246467232',
        MDN: 'CÔNG TY TNHH CJ OLIVERNETWORKSVINA    ',
        EmailNhan: 'abckhdjij@nhanhoadon.com',
        SDT: '0934722356',
    },
    {
        stt: '1',
        MDNS: '031246467232',
        MDN: 'CÔNG TY TNHH CJ OLIVERNETWORKSVINA    ',
        EmailNhan: 'abckhdjij@nhanhoadon.com',
        SDT: '0934722356',
    },
];

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
    },
    {
        title: 'Mã doanh nghiệp',
        dataIndex: 'MDNS',
    },
    {
        title: 'Mã doanh nghiệp',
        dataIndex: 'MDN',
    },
    {
        title: 'Email nhận hóa đơn',
        dataIndex: 'EmailNhan',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'SDT',
    },
];

const Index = () => {
    const options = [
        {
            value: 'tacvu',
            label: 'Tác vụ',
        },
        {
            value: 'long',
            label: 'Long',
        }
    ];
    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Danh mục
            </div>
            <div className="search">
                <div className="right" style={{ marginLeft: '80.5%', marginTop: '-20px' }}>
                    <Cascader style={{ marginLeft: ' 20px' }} options={options} onChange={onChange} placeholder="Tác vụ" />
                </div>
            </div>
            <div className="content">
                <div className="top">
                    <div className="QlyDoanhNghiep">
                        Quản lý doanh nghiệp
                    </div>
                </div>
                <Table columns={columns} dataSource={data} size="small" />
            </div>
        </div>
    )
}

export default Index