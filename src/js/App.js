import React from 'react';
import '../css/App.css';
import Headbar from './user_management/heabar';
import Sidebar from './user_management/sidebar';
import Content from './user_management/content';
import { user_list_var } from './api';
import { Grid } from 'semantic-ui-react';

class Application extends React.Component {

  render() {
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
                <Content user_list={user_list_var.data} />
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}

export default Application;