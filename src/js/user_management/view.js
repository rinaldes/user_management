import React, { useState, useEffect } from 'react';
import { Button, Input, Table, Space, Row, Col, Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { urlAPI } from "../utils/API";
import axios from "axios";
const { Search } = Input;
const { Title } = Typography;

function Container() {
  const [get_done, setGet_done] = useState(false);
  const [search_item, setSearch_item] = useState("");
  const [user_list, setUser_list] = useState([]);
  const data = [];

  useEffect(() => {
    if (get_done === false) {
      let user_keyword = "/users"
      if (search_item != null && search_item != 0) {
        user_keyword += "?keyword=" + search_item
      }
      axios.get(
        urlAPI + "restricted/orgs/" + localStorage.getItem('orgLogin') + user_keyword,
        {
          headers:
            { Authorization: "Bearer " + localStorage.getItem('token-access') }
        })
        .then(res => {
          setUser_list(res.data.Data)
        })
    }
    setGet_done(true);
  });

  const handleClick = userUId => {
    axios.delete(
      urlAPI + "restricted/orgs/" + localStorage.getItem('orgLogin') + "/users/" + userUId,
      {
        headers:
          { Authorization: "Bearer " + localStorage.getItem('token-access') }
      })
    setTimeout(function () {
      window.location.reload()
    }.bind(this), 400)
  }

  const handleChange = () => {
    setSearch_item(document.getElementById("user_keyword").value)
    setGet_done(false)
  }

  const columns = [
    {
      title: 'Nama',
      dataIndex: 'FullName',
      key: 'FullName',
      sorter: (a, b) => a.FullName.localeCompare(b.FullName),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Username',
      dataIndex: 'Username',
      key: 'Username',
      sorter: (a, b) => a.Username.localeCompare(b.Username),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
      sorter: (a, b) => a.Email.localeCompare(b.Email),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Admin',
      dataIndex: 'Admin',
      key: 'Admin',
      sorter: (a, b) => a.Admin.localeCompare(b.Admin),
      sortDirections: ['descend', 'ascend'],
      render: (text, record) => (
        <p style={(text != "Ya") ? { color: "red" } : { color: "green" }} > {text}</p >
      )
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
      sorter: (a, b) => a.Status.localeCompare(b.Status),
      sortDirections: ['descend', 'ascend'],
      render: (text, record) => (
        <p style={(text != "Ya") ? { color: "red" } : { color: "green" }} > {text}</p >
      )
    },
    {
      title: ' ',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Link to={"/edit?code=" + record.key}>
            <Button type="primary" className="green-button">
              Edit
              </Button>
          </Link>
          <Button type="danger" onClick={() => { handleClick(record.key) }} >
            Hapus
            </Button>
        </Space>
      ),
    },
  ];

  console.log(user_list)

  user_list.map(user => {
    data.push({
      key: user.UID,
      FullName: user.FullName,
      Username: user.Username,
      Email: user.Email,
      Admin: (user.IsAdministrator) ? "Ya" : "Bukan",
      Status: (user.IsActive) ? "Ya" : "Tidak",
    })
  })

  return (
    <Card>
      <Row className="add-five-margin-top">
        <Col span={1}></Col>
        <Col span={22}>
          <Row>
            <Col span={14}><Title level={2}>User List</Title ></Col>
            <Col span={10}>
              <Row>
                <Col span={14}>
                  <Search icon="search" placeholder="Masukan username" id="user_keyword" onChange={handleChange} />
                </Col>
                <Col span={2}></Col>
                <Col span={8}>
                  <Link to="/create">
                    <Button type="primary" className="green-button">
                      Add User
                        </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="add-five-padding-top">
            <Col span="24">
              <Table columns={columns} dataSource={data} onChange={handleChange} />
            </Col>
          </Row>
        </Col>
        <Col span={1}></Col>
      </Row>
    </Card >
  );
}

export default Container;