import React, { useState } from 'react'
import { Table } from 'antd';
import 'antd/dist/antd.css';
import './index.scss'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UploadOutlined, DownloadOutlined, UserOutlined } from '@ant-design/icons';
import { Button, message, Upload, AutoComplete, Input, Cascader } from 'antd';

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },

    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }

        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'trangthai',
    },
    {
        title: 'Hóa đơn đầu vào',
        dataIndex: 'HDdauvao',
    },
    {
        title: 'Hóa đơn đầu ra',
        dataIndex: 'HDdaura',
    },
];

const data = [
    {
        stt: '1',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '2',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '3',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '1',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '2',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '3',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '1',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '2',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '3',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '1',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '2',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '3',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '1',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '2',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '3',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '1',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '2',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '3',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '1',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '2',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '3',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '1',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '2',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
    {
        stt: '3',
        trangthai: 'Đã duyệt',
        HDdauvao: 2,
        HDdaura: 5,
    },
];

const percentage = 66;

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

const onChange = (value) => {
    console.log(value);
};

const Index = () => {

    const [size, setSize] = useState('large');

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Thống kê
            </div>
            <div className="search">
                <div className="left">
                    {/* <input type="text" placeholder='Search...' /> */}
                    <Cascader style={{ marginLeft: ' 20px' }} options={options} onChange={onChange} placeholder="Tác vụ" />
                </div>
                <div className="right" style={{ marginLeft: '10vh' }}>                  
                    <Cascader style={{ marginLeft: ' 20px' }} options={options} onChange={onChange} placeholder="Tác vụ" />
                </div>
            </div>
            <div className="center">
                <div className="left"><Table columns={columns} dataSource={data} size="small" /></div>
                <div className="right">
                    <div className="topTK">
                        Thống kê hóa đơn theo trạng thái
                    </div>
                    <div className="centerTK">
                        <div className="featuredChart">
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    textColor: "#454459",
                                    pathColor: "#41CAC0",
                                    trailColor: "#F6DE85",
                                })}
                            />
                        </div>
                    </div>
                    <div className="bottomTK">
                        <div className="color">
                            <div className='mau'></div>
                            <div className="trangthai">
                                Đang chờ
                            </div>
                        </div>
                        <div className="color">
                            <div className='mau'></div>
                            <div className="trangthai">
                                Đang chờ
                            </div>
                        </div>
                        <div className="color">
                            <div className='mau'></div>
                            <div className="trangthai">
                                Đang chờ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index