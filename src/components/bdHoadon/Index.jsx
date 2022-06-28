import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import 'antd/dist/antd.css';
import "./index.scss"
import { UploadOutlined, DownloadOutlined, UserOutlined } from '@ant-design/icons';
import { Button, message, Upload, AutoComplete, Input, Cascader } from 'antd';
import { style } from '@mui/system';

const columns = [
    { field: 'id', headerName: 'Số hóa đơn', width: 100 },
    { field: 'ngayTL', headerName: 'Ngày thành lập', width: 130 },
    { field: 'nhaCC', headerName: 'Nhà cung cấp', width: 260 },
    {
        field: 'tong',
        headerName: 'Tổng tiền',
        type: 'number',
        width: 130,
    },
    { field: 'trangthai', headerName: 'Trạng thái', width: 120 },
    { field: 'kyhieu', headerName: 'Ký hiệu', width: 120 },
    { field: 'ngaykyHD', headerName: 'Ngày ký HĐ', width: 130 },
    { field: 'thuesuat', headerName: 'Thuế suất', width: 130 },
];

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

const rows = [
    { id: 1, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022', thuesuat: 'Không chịu thuế' },
    { id: 2, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022', thuesuat: 'Không chịu thuế' },
    { id: 3, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022', thuesuat: 'Không chịu thuế' },
    { id: 4, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022', thuesuat: 'Không chịu thuế' },
    { id: 5, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022', thuesuat: 'Không chịu thuế' },
    { id: 6, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022', thuesuat: 'Không chịu thuế' },
    { id: 7, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022', thuesuat: 'Không chịu thuế' },
    { id: 8, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022', thuesuat: 'Không chịu thuế' },
    { id: 9, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022', thuesuat: 'Không chịu thuế' },
];

const renderTitle = (title) => (
    <span>
        {title}
        <a
            style={{
                float: 'right',
            }}
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
        >
            more
        </a>
    </span>
);

const renderItem = (title, count) => ({
    value: title,
    label: (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            {title}
            <span>
                <UserOutlined /> {count}
            </span>
        </div>
    ),
});

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
                Hóa đơn
            </div>
            <div className="search">
                <div className="left">
                    {/* <input type="text" placeholder='Search...' /> */}
                    <AutoComplete
                        dropdownClassName="certain-category-search-dropdown"
                        dropdownMatchSelectWidth={500}
                        style={{
                            width: 250,
                        }}
                        options={options}
                    >
                        <Input.Search size="large" placeholder="Search..." />
                    </AutoComplete>
                </div>
                <div className="right" style={{ marginLeft: '40vh' }}>
                    <Upload {...props} >
                        <Button icon={<UploadOutlined />} style={{ background: 'white' }}>up file hđ</Button>
                    </Upload>
                    <Cascader style={{ marginLeft: ' 20px' }} options={options} onChange={onChange} placeholder="Tác vụ" />
                    <Button type="primary" shape="circle" icon={<DownloadOutlined />} style={{ marginLeft: '20px', backgroundColor: '#BABEC8' }} size={size} />
                </div>
            </div>

            <div style={{ height: 474.5, width: '93.360%', background: "white" }}>

                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default Index