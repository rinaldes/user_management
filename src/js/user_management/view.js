import { Grid, Segment, Header, Icon } from 'semantic-ui-react';
import { Button, Input, Table, Space } from 'antd';
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
    console.log(urlAPI + "restricted/orgs/" + localStorage.getItem('orgLogin') + user_keyword)
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
    console.log(data)
    return (
      <Segment>
        <Grid centered>
          <Grid.Column width="14">
            <Grid>
              <Grid.Row className="add-five-margin-top">
                <Grid.Column width="9" floated="left">
                  <Header as="h1">User List</Header>
                </Grid.Column>
                <Grid.Column width="7" floated="right">
                  <Grid>
                    <Grid.Column width="10" className="fluid">
                      <Search icon="search" placeholder="Masukan username" id="user_keyword" onChange={this.handlechange} />
                    </Grid.Column>
                    <Grid.Column width="6">
                      <Link to="/create">
                        <Button type="primary" className="green-button">
                          Add User
                        </Button>
                      </Link>
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="add-eight-padding-top">
                <Grid.Column>
                  <Table columns={columns} dataSource={data} onChange={this.handleChange} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
        <br />
      </Segment >
    );
  }
}

export default Container;