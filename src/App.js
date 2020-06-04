import React from 'react';
import logo from './picture/logo.PNG';
import './App.css';
import { Table, Button, Grid, Segment, Input, Header, List } from 'semantic-ui-react';

var user_list = []

user_list.push({ nama: "Budi Markodi", username: "budi007", email: "budi@gmail.com", admin: "yes", status: "aktif" })
user_list.push({ nama: "Albert Ahmadi", username: "ahmadi99", email: "ahmadi@gmail.com", admin: "no", status: "tidak aktif" })
user_list.push({ nama: "Soni Moni", username: "moni88", email: "moni@gmail.com", admin: "no", status: "aktif" })

function Headbar() {
  return (
    <div>
    </div>
  );
}

function Sidebar() {
  return (
    <Grid centered>
      <Grid.Row className="add-five-margin-top">
        <Grid.Column width="8">
          <img src={logo}></img>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width="10">
          <List relaxed>
            <List.Item icon="home" content="Org Management" />
            <List.Item icon="users" content="User Management" />
            <List.Item icon="users" content="Event" />
            <List.Item icon="users" content="Corporate Contact" />
            <List.Item icon="users" content="My Contact" />
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

function Container() {
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
                    <Input icon="search" placeholder="Search user here" />
                  </Grid.Column>
                  <Grid.Column width="6">
                    <Button content="Add User" className="fluid green-button" />
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="add-eight-padding-top">
              <Grid.Column>
                <Table>
                  <Table.Header className="add-five-padding-top">
                    <Table.Row>
                      <Table.HeaderCell>Nama</Table.HeaderCell>
                      <Table.HeaderCell>Username</Table.HeaderCell>
                      <Table.HeaderCell>Email</Table.HeaderCell>
                      <Table.HeaderCell>Admin</Table.HeaderCell>
                      <Table.HeaderCell>Status</Table.HeaderCell>
                      <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {
                      user_list.map(user => {
                        return (
                          <Table.Row>
                            <Table.Cell>{user.nama}</Table.Cell>
                            <Table.Cell>{user.username}</Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            {
                              (user.admin === "yes")
                                ? <Table.Cell><font color="green">{user.admin}</font></Table.Cell>
                                : <Table.Cell><font color="red">{user.admin}</font></Table.Cell>
                            }
                            {
                              (user.status === "aktif")
                                ? <Table.Cell><font color="green">{user.status}</font></Table.Cell>
                                : <Table.Cell><font color="red">{user.status}</font></Table.Cell>
                            }
                            <Table.Cell><Button className="fluid green-button">Edit</Button></Table.Cell>
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
    </Segment>
  );
}

export {
  Sidebar, Container
}

export default Headbar;