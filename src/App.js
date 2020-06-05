import React from 'react';
import logo from './picture/logo.PNG';
import photos from './picture/upload-photo.jpg';
import './App.css';
import { Table, Button, Grid, Segment, Input, Header, List, Form, Checkbox, Dropdown } from 'semantic-ui-react';

const roleList = [
  { key: 'admin', value: 'Admin', text: 'Admin' },
  { key: 'engineer', value: 'Engineer', text: 'Engineer' },
  { key: 'designer', value: 'Designer', text: 'Designer' },
  { key: 'marketing', value: 'Marketing', text: 'Marketing' },
  { key: 'tester', value: 'Tester', text: 'Tester' },
]
const contactList = [
  { key: 'Email', value: 'Email', text: 'Email' },
  { key: 'Work Phone', value: 'Work Phone', text: 'Work Phone' },
  { key: 'Fax', value: 'Fax', text: 'Fax' },
  { key: 'Phone', value: 'Phone', text: 'Phone' },
]

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

function Content(props) {
  if (window.location.pathname === "/create") {
    return (<CreateUser />)
  } else if (window.location.pathname === "/edit") {
    return (<CreateUser user_list={props.user_list} />)
  } else {
    return (<Container user_list={props.user_list} />)
  }
}

// Halaman

// Create user
function CreateUser(props) {
  return (
    <Segment>
      <Grid centered>
        <Grid.Column width="14">
          <Grid>
            <Grid.Row className="add-five-margin-top">
              <Grid.Column width="9" floated="left">
                <Header as="h1">{(window.location.pathname === "/create") ? "Add" : "Edit"} User</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="add-eight-padding-top">
              <Grid.Column>
                <Grid>
                  <Grid.Column width="10">
                    <Form>
                      <Form.Field>
                        <Grid>
                          <Grid.Column width="12">
                            <label>Email *</label>
                            <input placeholder="Enter user company email" />
                          </Grid.Column>
                          <Grid.Column width="4">
                            <label>Sync LDAP</label><br />
                            <Checkbox toggle />
                          </Grid.Column>
                        </Grid>
                      </Form.Field>
                      <Form.Field>
                        <label>Full Name *</label>
                        <input placeholder='Enter fullname' />
                      </Form.Field>
                      <Form.Field>
                        <label>Corporate Contact</label>
                        <Dropdown
                          placeholder='Choose Corporate Contact'
                          fluid
                          search
                          selection
                          options={contactList}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Grid>
                          <Grid.Column width="8">
                            <label>Admin</label>
                            <Dropdown
                              placeholder='Choose Role'
                              fluid
                              search
                              selection
                              options={roleList}
                            />
                          </Grid.Column>
                          <Grid.Column width="8">
                            <label>Active Status</label><br />
                            <Checkbox toggle />
                          </Grid.Column>
                        </Grid>
                      </Form.Field>
                      <Button type='submit'>Save</Button>
                    </Form>
                  </Grid.Column>
                  <Grid.Column>
                    <Grid centered>
                      <Grid.Column width="8">
                        <img src={photos} />
                      </Grid.Column>
                    </Grid>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

// View User
function Container(props) {
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
                    <a href="/create">
                      <Button content="Add User" className="fluid green-button" />
                    </a>
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
                      props.user_list.map(user => {
                        return (
                          < Table.Row >
                            <Table.Cell>{user.FullName}</Table.Cell>
                            <Table.Cell>{user.Username}</Table.Cell>
                            <Table.Cell>{user.Email}</Table.Cell>
                            {
                              (user.JobDivision === "Admin")
                                ? <Table.Cell><font color="green">Ya</font></Table.Cell>
                                : <Table.Cell><font color="red">Bukan</font></Table.Cell>
                            }
                            {
                              (user.DeletedAt === "aktif")
                                ? <Table.Cell><font color="green">Ya</font></Table.Cell>
                                : <Table.Cell><font color="red">Tidak</font></Table.Cell>
                            }
                            <Table.Cell>
                              <a href={"/edit?id=" + user.UID}>
                                <Button className="fluid green-button">Edit</Button>
                              </a>
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
    </Segment >
  );
}

export {
  Sidebar, Content
}

export default Headbar;