import React, { useState } from 'react';
import logo from '../../picture/logo.PNG';
import axios from 'axios';
import { setUserSession, urlAPI } from '../utils/API';
import { Button, Form, Grid, Segment, Image } from 'semantic-ui-react'

function LoginForm(props) {
  const username = useFormInput('');
  const password = useFormInput('');

  const handleLogin = () => {
    axios.post(
      urlAPI + "public/auth/login", {
      username: username.value,
      password: password.value
    })
      .then(response => {
        console.log(response);
        setUserSession(response.data.Data.Token, response.data.Data.User, response.data.Data.Organizations[0]);
        props.history.push('/');
      });

    setTimeout(function () { //Start the timer
      props.history.push('/');
    }.bind(this), 400)
  }

  return (
    <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Image src={logo} textAlign='center' style={{ marginRight: "auto", marginLeft: "auto" }} />
        <br />
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' {...username} iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              {...password}
            />
            <Button color='teal'
              fluid size='large'
              value='Login'
              onClick={handleLogin}
            >
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default LoginForm