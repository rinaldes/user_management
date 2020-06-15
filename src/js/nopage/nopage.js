import React from 'react';
import logo from '../../picture/logo.PNG';
import { Row, Col } from 'antd';

function NoPage() {
  return (
    <Row align="middle" style={{ marginTop: "35vh" }}>
      <Col span={8}></Col>
      <Col span={8}>
        <Row>
          <Col span={8}></Col>
          <Col span={8}>
            <img src={logo} />
          </Col>
          <Col span={8}></Col>
        </Row>
        <br />
        <Row>
          <Col span={6}></Col>
          <Col span={12}>
            <h2 className="white">404 Not Found</h2>
          </Col>
          <Col span={6}></Col>
        </Row>
      </Col>
    </Row>
  )
}

export default NoPage