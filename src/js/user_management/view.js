import { Segment } from 'semantic-ui-react';
import { Button, Input, Table, Space, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import { urlAPI } from "../utils/API";
import axios from "axios";
const { Search } = Input;

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_list: [],
      get_done: false,
      search_item: "",
    };
  }

  componentDidMount() {
    let user_keyword = "/users"
    if (this.state.search_item != "" && this.state.search_item != null && this.state.search_item != 0) {
      user_keyword += "?keyword=" + this.state.search_item
    }
    axios.get(
      urlAPI + "restricted/orgs/" + localStorage.getItem('orgLogin') + user_keyword,
      {
        headers:
          { Authorization: "Bearer " + localStorage.getItem('token-access') }
      })
      .then(res => {
        this.setState({
          user_list: res.data.Data
        })
      })
    this.state.get_done = true
  }

  handleClick = userUId => {
    axios.delete(
      urlAPI + "restricted/orgs/" + localStorage.getItem('orgLogin') + "/users/" + userUId,
      {
        headers:
          { Authorization: "Bearer " + localStorage.getItem('token-access') }
      })
    setTimeout(function () { //Start the timer
      window.location.reload()
    }.bind(this), 400)
  }

  handlechange = () => {
    this.state.search_item = document.getElementById("user_keyword").value
    this.componentDidMount()
  }

  render() {
    if (this.state.get_done === false) {
      this.componentDidMount();
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
      },
      {
        title: 'Status',
        dataIndex: 'Status',
        key: 'Status',
        sorter: (a, b) => a.Status.localeCompare(b.Status),
        sortDirections: ['descend', 'ascend'],
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
            <Button type="danger" onClick={() => { this.handleClick(record.key) }} >
              Hapus
            </Button>
          </Space>
        ),
      },
    ];

    const data = [];

    this.state.user_list.map(user => {
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
      <Segment>
        <Row className="add-five-margin-top">
          <Col span={1}></Col>
          <Col span={22}>
            <Row>
              <Col span={14}><h1>User List</h1></Col>
              <Col span={10}>
                <Row>
                  <Col span={14}>
                    <Search icon="search" placeholder="Masukan username" id="user_keyword" onChange={this.handlechange} />
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
                <Table columns={columns} dataSource={data} onChange={this.handleChange} />
              </Col>
            </Row>
          </Col>
          <Col span={1}></Col>
        </Row>
        <br />
      </Segment >
    );
  }
}

export default Container;