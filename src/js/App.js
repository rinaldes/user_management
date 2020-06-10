import React, { useState, useEffect } from 'react';
import { Grid, Dropdown, Icon } from 'semantic-ui-react';
import '../css/App.css';

import Sidebar from './layout/sidebar';
import Content from './layout/content';

import { getToken, removeUserSession, setUserSession, getUser } from "./utils/API";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';


class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_login: getUser(),
      user_list: [],
      get_done: false
    };
  }
  handleLogout = () => {
    removeUserSession();
    this.props.history.push('/login');
  }

  componentDidMount() {
    fetch("https://api.relier.works/restricted/orgs/breerje6uiensniapev0/users?limit=100", {
      "method": "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MTAwMDAwLCJVSUQiOiJicjZpNTNlNnVpZWtvZWxlMXFlMCIsIlVzZXJuYW1lIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJleHAiOjE1OTM3NDk3NjEsImlzcyI6IkhpcGVXb3JrIn0.t6ol6UEb3UZ53wkaBSMX36ndiEqy-8P0TrDXw8n2pPM`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          user_list: response.Data,
          get_done: true
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.get_done === false) {
      this.componentDidMount();
    }
    return (
      <Grid className="no-padding">

        <Grid.Row className="no-padding no-margin">
          <Grid.Column width="16" className="app-headbar">
            <div>
              <Grid centered>
                <Grid.Column width="4" floated="right" className="add-five-margin-top add-two-margin-bottom">
                  <span>
                    <Icon circular inverted name='users' />
                    <Dropdown text='Hipe Indonesia' className="white-text">
                      <Dropdown.Menu>
                        <Dropdown.Item text=' ' />
                      </Dropdown.Menu>
                    </Dropdown>
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <Icon circular inverted name='users' />
                    <Dropdown text={this.state.user_login.FullName} className="white-text">
                      <Dropdown.Menu>
                        <Dropdown.Item text='Logout' onClick={this.handleLogout} />
                      </Dropdown.Menu>
                    </Dropdown>
                  </span>
                </Grid.Column>
              </Grid>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns="equal" className="no-padding no-margin">
          <Grid.Column width="3" className="app-sidebar">
            <Sidebar />
          </Grid.Column>
          <Grid.Column className="add-ten-padding-top app-content">
            <Grid centered>
              <Grid.Column width="14">
                <Content user_list={this.state.user_list} />
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}

export default Application;