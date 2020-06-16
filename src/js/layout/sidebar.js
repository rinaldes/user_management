import logo from '../../picture/logo.PNG';
import { Row, Col } from 'antd';
import { BankOutlined, CarryOutOutlined, ShopOutlined, SwitcherOutlined } from '@ant-design/icons';
import React from 'react';

function Sidebar() {
    return (
        <Row>
            <Col span={24}>
                <Row className="add-five-margin-top">
                    <Col span={6}></Col>
                    <Col span={12}>
                        <img src={logo} />
                    </Col>
                    <Col span={6}></Col>
                </Row >
                <br />
                <Row>
                    <Col span={4}></Col>
                    <Col span={20}>
                        <label><BankOutlined /> Org Management</label><br /><br />
                        <label><CarryOutOutlined /> Event</label><br /><br />
                        <label><ShopOutlined /> Corporate Contact</label><br /><br />
                        <label><SwitcherOutlined /> My Contact</label>
                    </Col>
                </Row>
            </Col>
        </Row >
    )
}

export default Sidebar;