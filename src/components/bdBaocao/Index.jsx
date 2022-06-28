import React from 'react'
import { Table } from 'antd';
import 'antd/dist/antd.css';
import './index.scss'
import { Button, message, Upload, AutoComplete, Input, Cascader } from 'antd';

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
    },
    {
        title: 'Kỳ kê khai',
        dataIndex: 'KKK',
    },
    {
        title: 'Giá trị HHDV mua vào chưa có thuê',
        dataIndex: 'hhdv',
    },
    {
        title: 'thuế GTGT đầu vào',
        dataIndex: 'thueGTGT',
    },
    {
        title: 'Doanh thu chưa có thuế GTGT',
        dataIndex: 'doanhthuGTGT',
    },
    {
        title: 'Thuế GTGT...',
        dataIndex: 'thueGTGT',
    },
];

const data = [
    {
        stt: '1',
        KKK: 'Qúy 4',
        hhdv: '1.040.000.000đ',
        thueGTGT: '0.000đ',
        doanhthuGTGT: '0.000đ',
        thueGTGT:'0.000đ'
    },
    {
        stt: '1',
        KKK: 'Qúy 4',
        hhdv: '1.040.000.000đ',
        thueGTGT: '0.000đ',
        doanhthuGTGT: '0.000đ',
        thueGTGT:'0.000đ'
    },
    {
        stt: '1',
        KKK: 'Qúy 4',
        hhdv: '1.040.000.000đ',
        thueGTGT: '0.000đ',
        doanhthuGTGT: '0.000đ',
        thueGTGT:'0.000đ'
    },
    {
        stt: '1',
        KKK: 'Qúy 4',
        hhdv: '1.040.000.000đ',
        thueGTGT: '0.000đ',
        doanhthuGTGT: '0.000đ',
        thueGTGT:'0.000đ'
    },
    {
        stt: '1',
        KKK: 'Qúy 4',
        hhdv: '1.040.000.000đ',
        thueGTGT: '0.000đ',
        doanhthuGTGT: '0.000đ',
        thueGTGT:'0.000đ'
    },
    {
        stt: '1',
        KKK: 'Qúy 4',
        hhdv: '1.040.000.000đ',
        thueGTGT: '0.000đ',
        doanhthuGTGT: '0.000đ',
        thueGTGT:'0.000đ'
    },
    {
        stt: '1',
        KKK: 'Qúy 4',
        hhdv: '1.040.000.000đ',
        thueGTGT: '0.000đ',
        doanhthuGTGT: '0.000đ',
        thueGTGT:'0.000đ'
    },
    {
        stt: '1',
        KKK: 'Qúy 4',
        hhdv: '1.040.000.000đ',
        thueGTGT: '0.000đ',
        doanhthuGTGT: '0.000đ',
        thueGTGT:'0.000đ'
    },
    {
        stt: '1',
        KKK: 'Qúy 4',
        hhdv: '1.040.000.000đ',
        thueGTGT: '0.000đ',
        doanhthuGTGT: '0.000đ',
        thueGTGT:'0.000đ'
    },
    {
        stt: '1',
        KKK: 'Qúy 4',
        hhdv: '1.040.000.000đ',
        thueGTGT: '0.000đ',
        doanhthuGTGT: '0.000đ',
        thueGTGT:'0.000đ'
    },
    {
        stt: '1',
        KKK: 'Qúy 4',
        hhdv: '1.040.000.000đ',
        thueGTGT: '0.000đ',
        doanhthuGTGT: '0.000đ',
        thueGTGT:'0.000đ'
    },
];

const onChange = (value) => {
    console.log(value);
};

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
                Báo cáo
            </div>
            <div className="search">
                <div className="right" style={{ marginLeft: '83.5%',marginTop: '-20px' }}>                  
                    <Cascader style={{ marginLeft: ' 20px' }} options={options} onChange={onChange} placeholder="Tác vụ" />
                </div>
            </div>
            <div className="content">
                <div className="top">
                    <div className="bangke">
                        Bảng kê
                    </div>
                    <div className="tokhai">
                        Tờ khai thuế GTGT
                    </div>
                </div>
                <Table columns={columns} dataSource={data} size="small" />
            </div>
        </div>
    )
}

export default Index