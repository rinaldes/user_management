import React from 'react';
import '../css/App.css';
import Headbar from './user_management/heabar';
import Sidebar from './user_management/sidebar';
import Content from './user_management/content';
import { Grid } from 'semantic-ui-react';

class Application extends React.Component {
  state = {
    user_list: []
  }

  // API Code
  getUser() {
    fetch('https://api.relier.works/restricted/orgs/br6i53e6uiekoele1qdg/contacts', {
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

  postUser() {
    const createUser = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          FullName: "John Doe Lokshumwe",
          Email: "john.doe@example.com",
          Picture: "pciture.png",
          JobRole: "manager",
          JobDivision: "development",
          OrganizationUID: "br8vma6344r9q4vvuofg"
        }
      )
    };
    fetch('https://api.relier.works/restricted/orgs/br6i53e6uiekoele1qdg/contacts', createUser)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
  }

  render() {
    if (this.state.user_list !== undefined) {
      this.state.user_list.map(user => {
        console.log(user)
      })
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