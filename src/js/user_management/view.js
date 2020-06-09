import { Table, Button, Grid, Segment, Input, Header } from 'semantic-ui-react';
import React from 'react';

function Container(props) {
  const handleClick = userUId => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MTAwMDAwLCJVSUQiOiJicjZpNTNlNnVpZWtvZWxlMXFlMCIsIlVzZXJuYW1lIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJleHAiOjE1OTM3NDk3NjEsImlzcyI6IkhpcGVXb3JrIn0.t6ol6UEb3UZ53wkaBSMX36ndiEqy-8P0TrDXw8n2pPM`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
    fetch("https://api.relier.works/restricted/orgs/breerje6uiensniapev0/users/" + userUId, requestOptions).then((response) => {
      return response.json();
    })
    console.log("terhapus");
    setTimeout(function () { //Start the timer
      window.location.reload()
    }.bind(this), 400)
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
                              <a href={"/edit?code=" + user.UID}>
                                <Button className="fluid green-button">Edit</Button>
                              </a>
                              <br />
                              <Button className="fluid" color="red" onClick={() => { handleClick(user.UID) }} >Hapus</Button>
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

export default Container;