import React from 'react';
import { Grid, Dropdown, Icon } from 'semantic-ui-react';
import '../css/App.css';

import Sidebar from './layout/sidebar';
import Content from './layout/content';

import { removeUserSession, getUser, urlAPI } from "./utils/API";
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
    axios.get(
      urlAPI + "restricted/orgs/" + localStorage.getItem('orgLogin') + "/users",
      {
        headers:
          { Authorization: "Bearer " + localStorage.getItem('token-access') }
      })
      .then(res => {
        this.setState({
          user_list: res.data.Data,
          get_done: true
        })
      })
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
                    <Dropdown text={localStorage.getItem('orgName')} className="white-text">
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