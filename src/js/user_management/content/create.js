import photos from '../../../picture/upload-photo.jpg';
import { Button, Grid, Segment, Header, Form, Checkbox, Dropdown } from 'semantic-ui-react';
import React from 'react';

const roleList = [
  { key: 'admin', value: 'Admin', text: 'Admin' },
  { key: 'engineer', value: 'Engineer', text: 'Engineer' },
  { key: 'designer', value: 'Designer', text: 'Designer' },
  { key: 'marketing', value: 'Marketing', text: 'Marketing' },
  { key: 'tester', value: 'Tester', text: 'Tester' },
]
const contactList = [
  { key: 'Email', value: 'Email', text: 'Email' },
  { key: 'Work Phone', value: 'Work Phone', text: 'Work Phone' },
  { key: 'Fax', value: 'Fax', text: 'Fax' },
  { key: 'Phone', value: 'Phone', text: 'Phone' },
]

function CreateUser(props) {
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
                    <Form>
                      <Form.Field>
                        <Grid>
                          <Grid.Column width="12">
                            <label>Email *</label>
                            <input placeholder="Enter user company email" value={(window.location.pathname === "/create") ? null : props.Email} />
                          </Grid.Column>
                          <Grid.Column width="4">
                            <label>Sync LDAP</label><br />
                            <Checkbox toggle />
                          </Grid.Column>
                        </Grid>
                      </Form.Field>
                      <Form.Field>
                        <label>Full Name *</label>
                        <input placeholder='Enter fullname' />
                      </Form.Field>
                      <Form.Field>
                        <label>Corporate Contact</label>
                        <Dropdown
                          placeholder='Choose Corporate Contact'
                          fluid
                          search
                          selection
                          options={contactList}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Grid>
                          <Grid.Column width="8">
                            <label>Admin</label>
                            <Dropdown
                              placeholder='Choose Role'
                              fluid
                              search
                              selection
                              options={roleList}
                            />
                          </Grid.Column>
                          <Grid.Column width="8">
                            <label>Active Status</label><br />
                            <Checkbox toggle />
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
    </Segment>
  );
}

export default CreateUser;