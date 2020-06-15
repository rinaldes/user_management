import { Table, Grid, Segment, Header, Icon } from 'semantic-ui-react';
import { Button, Input } from 'antd';
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
      arah_sort: null,
      column_sort: null
    };
    this.handleSort = this.handleSort.bind(this)
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

  handleSort(event, sortKey) {
    let { user_list, column_sort, arah_sort } = this.state;
    if (this.state.column_sort === null || this.state.column_sort !== sortKey) {
      user_list.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
      column_sort = sortKey
      arah_sort = "up"
    } else {
      user_list.reverse();
      arah_sort = ((this.state.arah_sort === "up") ? "down" : "up");
    }
    this.setState({
      user_list: user_list,
      column_sort: column_sort,
      arah_sort: arah_sort
    })
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
                  <Table>
                    <Table.Header className="add-five-padding-top">
                      <Table.Row>
                        <Table.HeaderCell onClick={e => this.handleSort(e, 'FullName')}>
                          <Grid columns='equal'>
                            <Grid.Column>
                              Nama
                            </Grid.Column>
                            <Grid.Column width={2}>
                              <Icon name={(this.state.column_sort !== "FullName") ? "sort" : ((this.state.arah_sort === "up") ? "sort ascending" : "sort descending")} />
                            </Grid.Column>
                          </Grid>
                        </Table.HeaderCell>
                        <Table.HeaderCell onClick={e => this.handleSort(e, 'Username')}>
                          <Grid columns='equal'>
                            <Grid.Column>
                              Username
                            </Grid.Column>
                            <Grid.Column width={2}>
                              <Icon name={(this.state.column_sort !== "Username") ? "sort" : ((this.state.arah_sort === "up") ? "sort ascending" : "sort descending")} />
                            </Grid.Column>
                          </Grid>
                        </Table.HeaderCell>
                        <Table.HeaderCell onClick={e => this.handleSort(e, 'Email')}>
                          <Grid columns='equal'>
                            <Grid.Column>
                              Email
                            </Grid.Column>
                            <Grid.Column width={2}>
                              <Icon name={(this.state.column_sort !== "Email") ? "sort" : ((this.state.arah_sort === "up") ? "sort ascending" : "sort descending")} />
                            </Grid.Column>
                          </Grid>
                        </Table.HeaderCell>
                        <Table.HeaderCell>Admin</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {
                        this.state.user_list.map(user => {
                          return (
                            < Table.Row >
                              <Table.Cell>{user.FullName}</Table.Cell>
                              <Table.Cell>{user.Username}</Table.Cell>
                              <Table.Cell>{user.Email}</Table.Cell>
                              {
                                (user.IsAdministrator)
                                  ? <Table.Cell><font color="green">Ya</font></Table.Cell>
                                  : <Table.Cell><font color="red">Bukan</font></Table.Cell>
                              }
                              {
                                (user.IsActive)
                                  ? <Table.Cell><font color="green">Ya</font></Table.Cell>
                                  : <Table.Cell><font color="red">Tidak</font></Table.Cell>
                              }
                              <Table.Cell>
                                <Link to={"/edit?code=" + user.UID}>
                                  <Button type="primary" className="green-button">
                                    Edit
                                  </Button>
                                </Link>
                                <br />
                                <br />
                                <Button type="danger" onClick={() => { this.handleClick(user.UID) }} >
                                  Hapus
                                </Button>

                              </Table.Cell>
                            </Table.Row>
                          )
                        })
                      }
                    </Table.Body>
                  </Table>
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