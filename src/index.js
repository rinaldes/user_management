import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import Headbar, { Sidebar, Content } from './App';
import { Grid } from 'semantic-ui-react';
import * as serviceWorker from './serviceWorker';

class Application extends React.Component {
  state = {
    user_list: []
  }

  getUser() {
    fetch('https://api.relier.works/restricted/orgs/br6i53e6uiekoele1qdg/contacts?limit=10', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MTAwMDAwLCJVSUQiOiJicjZpNTNlNnVpZWtvZWxlMXFlMCIsIlVzZXJuYW1lIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJleHAiOjE1OTM3NDk3NjEsImlzcyI6IkhpcGVXb3JrIn0.t6ol6UEb3UZ53wkaBSMX36ndiEqy-8P0TrDXw8n2pPM`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          user_list: json.Data,
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    this.getUser();
    this.state.user_list.map(user => {
      console.log(user)
    })
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


ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();