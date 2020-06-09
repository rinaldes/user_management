import photos from '../../picture/upload-photo.jpg';
import { Button, Grid, Segment, Header, Form, Checkbox, Dropdown } from 'semantic-ui-react';
import React from 'react';

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactListAPI: [],
      contactList: [],
      get_done: false,
      data_user: {
        email: "",
        fullname: "",
        corporate: "",
        jobrole: "",
        is_active: false
      },
      email: "",
      fullname: "",
      corporate: "",
      jobrole: "",
      is_active: false,
      roleList: [
        { key: 'admin', value: 'Admin', text: 'Admin' },
        { key: 'engineer', value: 'Engineer', text: 'Engineer' },
        { key: 'designer', value: 'Designer', text: 'Designer' },
        { key: 'marketing', value: 'Marketing', text: 'Marketing' },
        { key: 'tester', value: 'Tester', text: 'Tester' },
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Get Contact Data
  GetContact() {
    fetch('https://api.relier.works/restricted/orgs/breerje6uiensniapev0/contacts?limit=1', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MTAwMDAwLCJVSUQiOiJicjZpNTNlNnVpZWtvZWxlMXFlMCIsIlVzZXJuYW1lIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJleHAiOjE1OTM3NDk3NjEsImlzcyI6IkhpcGVXb3JrIn0.t6ol6UEb3UZ53wkaBSMX36ndiEqy-8P0TrDXw8n2pPM`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        this.state.contactListAPI = [json.Data]
        console.log(this.state.contactListAPI)
        this.state.contactListAPI.map(contact => {
          this.state.contactList.push({
            key: contact.UID,
            value: contact.UID,
            text: contact.Title,
          })
        })
        this.state.get_done = true
      })
  }

  // Proses Save
  handleSubmit(event) {

  }

  handleChange(event) {
    if (event.target.id === "user_email") {
      this.setState({
        email: event.target.value
      });
    } else if (event.target.id === "fullname") {
      this.setState({
        fullname: event.target.value
      });
    } else if (event.target.id === "role") {
      this.setState({
        jobrole: event.target.value
      });
    } else if (event.target.id === "corporate_contact") {
      this.setState({
        corporate: event.target.value
      });
    } else if (event.target.id === "is_active") {
      this.setState({
        is_active: !this.state.is_active
      });
    }
    this.setState({
      data_user: {
        is_active: this.state.is_active,
        email: this.state.email,
        fullname: this.state.fullname,
        jobrole: this.state.jobrole,
        corporate: this.state.corporate
      }
    });
    console.log(this.state.data_user)
  }

  handleChangeRole = (e, { value }) => {
    e.persist();
    this.setState({
      jobrole: value
    });
    this.setState({
      data_user: {
        is_active: this.state.is_active,
        email: this.state.email,
        fullname: this.state.fullname,
        jobrole: this.state.jobrole,
        corporate: this.state.corporate
      }
    });
  };

  handleChangeContact = (e, { value }) => {
    e.persist();
    this.setState({
      corporate: value
    });
    this.setState({
      data_user: {
        is_active: this.state.is_active,
        email: this.state.email,
        fullname: this.state.fullname,
        jobrole: this.state.jobrole,
        corporate: this.state.corporate
      }
    });
  };

  render() {
    if (this.state.get_done === false) {
      this.GetContact();
    }
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
                      <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                          <Grid>
                            <Grid.Column width="12">
                              <label>Email *</label>
                              <input
                                id="user_email"
                                placeholder="Enter user company email"
                                onChange={this.handleChange}
                              />
                            </Grid.Column>
                            <Grid.Column width="4">
                              <label>Sync LDAP</label><br />
                              <Checkbox toggle />
                            </Grid.Column>
                          </Grid>
                        </Form.Field>
                        <Form.Field>
                          <label>Full Name *</label>
                          <input
                            id="fullname"
                            placeholder='Enter fullname'
                            onChange={this.handleChange}
                          />
                        </Form.Field>
                        <Form.Field>
                          <label>Corporate Contact</label>
                          <Dropdown
                            id="corporate_contact"
                            placeholder='Choose Corporate Contact'
                            fluid
                            search
                            selection
                            options={this.state.contactList}
                            onChange={this.handleChangeContact}
                          />
                        </Form.Field>
                        <Form.Field>
                          <Grid>
                            <Grid.Column width="8">
                              <label>Admin</label>
                              <Dropdown
                                id="role"
                                placeholder='Choose Role'
                                fluid
                                search
                                selection
                                options={this.state.roleList}
                                onChange={this.handleChangeRole}
                              />
                            </Grid.Column>
                            <Grid.Column width="8">
                              <label>Active Status</label><br />
                              <Checkbox
                                toggle id="is_active"
                                onChange={this.handleChange}
                              />
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
      </Segment >
    );
  };
}

export default CreateUser;