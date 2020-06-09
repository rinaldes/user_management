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
      email: "",
      fullname: "",
      corporate: "",
      jobrole: false,
      is_active: null,
      roleList: [
        { key: 'Ya', value: true, text: 'Ya' },
        { key: 'Bukan', value: false, text: 'Bukan' },
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
  handleSubmit() {
    fetch("https://api.relier.works/restricted/orgs/breerje6uiensniapev0/users", {
      "method": "POST",
      "headers": {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MTAwMDAwLCJVSUQiOiJicjZpNTNlNnVpZWtvZWxlMXFlMCIsIlVzZXJuYW1lIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJleHAiOjE1OTM3NDk3NjEsImlzcyI6IkhpcGVXb3JrIn0.t6ol6UEb3UZ53wkaBSMX36ndiEqy-8P0TrDXw8n2pPM`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        FullName: this.state.fullname,
        Email: this.state.email,
        IsAdministrator: this.state.jobrole,
        IsActive: this.state.is_active,
        OrganizationUID: this.state.corporate,
        Username: this.state.email,
        NickName: this.state.fullname.substring(0, 4),
        Picture: "foto.png",
        Status: "",
        IsOnline: false,
        IsIdle: false,
        IsOnCall: false,
        LastOnlineAt: "0001-01-01T00:00:00Z"
      })
    })
    window.location.replace("/");
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
    } else if (event.target.id === "is_active") {
      this.setState({
        is_active: !this.state.is_active
      });
    }
    console.log(this.state.jobrole)
  }

  handleChangeRole = (e, { value }) => {
    e.persist();
    this.setState({
      jobrole: value
    });
    console.log(this.state.jobrole)
  };

  handleChangeContact = (e, { value }) => {
    e.persist();
    this.setState({
      corporate: value
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
                                value={this.state.jobrole}
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