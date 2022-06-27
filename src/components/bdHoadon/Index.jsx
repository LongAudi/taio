import { React, useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom"
import "./index.scss"
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

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
    { id: 1, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022' },
    { id: 2, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022' },
    { id: 3, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022' },
    { id: 4, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022' },
    { id: 5, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022' },
    { id: 6, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022' },
    { id: 7, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022' },
    { id: 8, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022' },
    { id: 9, nhaCC: 'CTY TNHH CJ Olivenetwork', ngayTL: '27/6/2022', tong: 3500000, trangthai: 'HĐ gốc', kyhieu: 'AA/20E', ngaykyHD: '29/6/2022' },
];

const Index = () => {
    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Hóa đơn
            </div>
            <div className="search">
                    <div className="left">
                        <input type="text" placeholder='Search...' />
                    </div>
                    <div className="right" style={{marginLeft: '40vh'}}>
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>up file hđ</Button>
                        </Upload>
                    </div>
                </div>

            <div style={{ height: 474.5, width: '81%', background: "white" }}>
                
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