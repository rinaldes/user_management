import React from 'react'
import logo from '../../picture/logo.PNG';
import { Button, Form, Grid, Header, Message, Segment, Image } from 'semantic-ui-react'

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Image src={logo} textAlign='center' style={{ marginRight: "auto", marginLeft: "auto" }} />
      <br />
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)

export default LoginForm