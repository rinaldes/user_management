import logo from '../../picture/logo.PNG';
import { Grid, List } from 'semantic-ui-react';
import React from 'react';

function Sidebar() {
    return (
        <Grid centered>
            <Grid.Row className="add-five-margin-top">
                <Grid.Column width="8">
                    <img src={logo}></img>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width="10">
                    <List relaxed>
                        <List.Item icon="home" content="Org Management" />
                        <List.Item icon="users" content="User Management" />
                        <List.Item icon="users" content="Event" />
                        <List.Item icon="users" content="Corporate Contact" />
                        <List.Item icon="users" content="My Contact" />
                    </List>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Sidebar;