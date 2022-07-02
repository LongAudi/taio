import React from 'react'
import './index.scss'
import { Button, Form, Input ,Select} from 'antd';


const Index = () => {
    const [name, setName] = React.useState('Composed TextField');

    const handleChange = (event) => {
        setName(event.target.value);
    };
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Hệ thống
            </div>
            <div className="content">
                <div className="top" style={{ paddingRight: '104vh' }}>
                    <div className="bangke">
                        Thông tin tổ chức
                    </div>
                    <div className="tokhai">
                        Thông tin đại lý thuế
                    </div>
                    <div className="tokhai">
                        Thông tin khai báo ban đầu
                    </div>
                </div>
                <div className="bottom">
                    <Form.Item label="Mã số thuế:">
                        <Input style={{width: '80%',marginLeft: '60px'}}/>
                    </Form.Item>
                    <Form.Item label="Người nộp thuế:">
                        <Input style={{width: '82.000%',marginLeft: '32px'}}/>
                    </Form.Item>
                    <Form.Item label="Select">
                        <Select style={{width: '77.900%',marginLeft: '90px'}}>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Địa chỉ trụ sở:">
                        <Input style={{width: '80.800%',marginLeft: '48px'}}/>
                    </Form.Item>
                    .
                </div>
            </div>
        </div>
    )
}

export default Index