import photos from '../../picture/upload-photo.jpg';
import { Button, Input, Select, Switch, Row, Col, Typography, Form, Card } from 'antd';
import React from 'react';
import axios from 'axios';
import { urlAPI } from '../utils/API';
const { Title } = Typography;

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    const urlparameter = window.location.search;
    const params = new URLSearchParams(urlparameter);
    this.state = {
      code: params.get('code'),
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
      dataUser: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  // Get Contact Data
  GetContact() {
    setTimeout(function () { //Start the timer
      axios.get(
        urlAPI + "restricted/orgs/" + localStorage.getItem('orgLogin') + "/contacts",
        {
          headers:
            { Authorization: "Bearer " + localStorage.getItem('token-access') }
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
    }.bind(this), 250)

  }

  // Get User Data
  GetUserData() {
    setTimeout(function () { //Start the timer
      axios.get(
        urlAPI + "restricted/orgs/" + localStorage.getItem('orgLogin') + "/users/" + this.state.code,
        {
          headers:
            { Authorization: "Bearer " + localStorage.getItem('token-access') }
        })
        .then(response => {
          this.setState({
            dataUser: response.data.Data,
            get_done_user: true,
            email: response.data.Data.Email,
            fullname: response.data.Data.FullName,
            jobrole: false,
            corporate: localStorage.getItem("orgLogin"),
            is_active: response.data.Data.IsActive
          })
        })
    }.bind(this), 300)
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
        urlAPI + "restricted/orgs/" + localStorage.getItem('orgLogin') + "/users", inputDataUser,
        {
          headers:
            { Authorization: "Bearer " + localStorage.getItem('token-access') }
        })
    } else if (window.location.pathname === "/edit") {
      axios.put(
        urlAPI + "restricted/orgs/" + localStorage.getItem('orgLogin') + "/users/" + this.state.code, inputDataUser,
        {
          headers:
            { Authorization: "Bearer " + localStorage.getItem('token-access') }
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
    }
  }

  handleChangeActive = (e, { value }) => {
    this.setState({
      is_active: !this.state.is_active
    });
  };

  handleChangeRole = (e, { value }) => {
    this.setState({
      jobrole: value
    });
  };

  handleChangeContact = (e, { value }) => {
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
      <Card>
        <Row className="add-five-margin-top">
          <Col span={1}></Col>
          <Col span={22}>
            <Row>
              <Col span={24}><Title level={2}>{(window.location.pathname === "/create") ? "Add" : "Edit"} User</Title></Col>
            </Row>
            <Row className="add-five-padding-top">
              <Col span={14}>
                <Form layout="horizontal" >
                  <Form.Item>
                    <Row>
                      <Col span={20}>
                        <label>Email *</label>
                        <Input onChange={this.handleChange}
                          value={this.state.email}
                          id="user_email" />
                      </Col>
                      <Col span={1}></Col>
                      <Col span={3}>
                        <label>Sync LDAP</label><br />
                        <Switch /></Col>
                    </Row>
                  </Form.Item>
                  <Form.Item>
                    <label>Full Name</label>
                    <Input onChange={this.handleChange}
                      value={this.state.fullname}
                      id="fullname" />
                  </Form.Item>
                  <Form.Item>
                    <label>Corporate Contact</label>
                    <Select onChange={this.handleChangeContact} value={this.state.corporate} id="corporate_contact">
                      {
                        this.state.contactListAPI.map(item => (
                          <Select.Option value={item.UID}>{item.Title}</Select.Option>
                        ))
                      }
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Row>
                      <Col span={10}>
                        <label>Admin</label>
                        <Select onChange={this.handleChangeRole}
                          value={this.state.jobrole}
                          id="role">
                          <Select.Option value={true}>Ya</Select.Option>
                          <Select.Option value={false}>Bukan</Select.Option>
                        </Select>
                      </Col>
                      <Col span={1}></Col>
                      <Col span={8}>
                        <label>Active Status</label><br />
                        <Switch onChange={this.handleChangeActive}
                          checked={this.state.is_active}
                          id="is_active" />
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item>
                    <Row>
                      <Col span={4}>
                        <Button type='primary' onClick={this.handleSubmit}>Save</Button>
                      </Col>
                    </Row>
                  </Form.Item>
                </Form>
              </Col>
              <Col span={2}></Col>
              <Col span={8}>
                <img src={photos} />
              </Col>
            </Row>
          </Col>
          <Col span={1}></Col>
        </Row>
      </Card >
    );
  };
}

export default CreateUser;