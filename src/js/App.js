import React from 'react';
import '../css/App.css';
import Headbar from './layout/heabar';
import Sidebar from './layout/sidebar';
import Content from './layout/content';
import { Grid } from 'semantic-ui-react';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_list: [],
      get_done: false
    };
  }
  componentDidMount() {
    fetch("https://api.relier.works/restricted/orgs/breerje6uiensniapev0/users?limit=10", {
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
    console.log(this.state.user_list.length);
  }

  render() {
    if (this.state.get_done === false) {
      this.componentDidMount();
    }
    return (
      <Grid className="no-padding">

        <Grid.Row className="no-padding no-margin">
          <Grid.Column width="16" className="app-headbar">
            <Headbar />
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