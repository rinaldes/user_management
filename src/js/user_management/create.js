import photos from '../../picture/upload-photo.jpg';
import { Button, Grid, Segment, Header, Form, Checkbox, Dropdown } from 'semantic-ui-react';
import React from 'react';
import axios from 'axios';
import { urlAPI } from '../utils/API';

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: props.user_list,
      contactListAPI: [],
      contactList: [],
      get_done: false,
      get_done_user: false,
      previous_uid: "",
      email: "",
      fullname: "",
      corporate: "",
      jobrole: false,
      is_active: null,
      dataUser: {},
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
    axios.get(
      urlAPI + "restricted/orgs/" + sessionStorage.getItem('orgLogin') + "/contacts",
      {
        headers:
          { Authorization: "Bearer " + sessionStorage.getItem('token-access') }
      })
      .then(json => {
        this.state.contactListAPI = [json.data.Data]
        this.state.contactListAPI.map(contact => {
          if (this.state.previous_uid !== contact.UID) {
            this.state.contactList.push({
              key: contact.UID,
              value: contact.UID,
              text: contact.Title,
            })
            this.state.previous_uid = contact.UID
          }
        })
        this.state.get_done = true
      })
  }

  // Get User Data
  GetUserData() {
    axios.get(
      urlAPI + "restricted/orgs/" + sessionStorage.getItem('orgLogin') + "/users/" + this.state.code,
      {
        headers:
          { Authorization: "Bearer " + sessionStorage.getItem('token-access') }
      })
      .then(response => {
        this.setState({
          dataUser: response.data.Data,
          get_done_user: true
        })
        this.state.email = this.state.dataUser.Email
        this.state.fullname = this.state.dataUser.FullName
        this.state.corporate = sessionStorage.getItem("orgLogin")
        this.state.jobrole = this.state.dataUser.IsAdministrator
        this.state.is_active = this.state.dataUser.IsActive
      })
  }

  // Proses Save
  handleSubmit() {
    const inputDataUser = {
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
    }

    if (window.location.pathname === "/create") {
      axios.post(
        urlAPI + "restricted/orgs/" + sessionStorage.getItem('orgLogin') + "/users", inputDataUser,
        {
          headers:
            { Authorization: "Bearer " + sessionStorage.getItem('token-access') }
        })
    } else if (window.location.pathname === "/edit") {
      axios.put(
        urlAPI + "restricted/orgs/" + sessionStorage.getItem('orgLogin') + "/users/" + this.state.code, inputDataUser,
        {
          headers:
            { Authorization: "Bearer " + sessionStorage.getItem('token-access') }
        })
    }
    setTimeout(function () {
      window.location.replace("/");
    }.bind(this), 400)
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
  }

  handleChangeRole = (e, { value }) => {
    e.persist();
    this.setState({
      jobrole: value
    });
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
    if (this.state.get_done_user === false && window.location.pathname === "/edit") {
      this.GetUserData();
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
                                value={this.state.email}
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
                            value={this.state.fullname}
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
                            value={this.state.corporate}
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
                                checked={this.state.is_active}
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