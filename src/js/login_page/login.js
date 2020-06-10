import React, { useState } from 'react';
import logo from '../../picture/logo.PNG';
import axios from 'axios';
import { setUserSession } from '../utils/API';
import { Button, Form, Grid, Segment, Image } from 'semantic-ui-react'

function LoginForm(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    props.history.push('/');

    setError(null);
    setLoading(true);
    axios.post('https://api.relier.works/public/auth/login',
      { username: username.value, password: password.value })
      .then(response => {
        setLoading(false);
        console.log(response);
        setUserSession(response.data.Data.Token, response.data.Data.User);
        props.history.push('/');
      }).catch(error => {
        setLoading(false);
      });
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
              value={loading ? 'Loading...' : 'Login'}
              onClick={handleLogin}
              disabled={loading}
            >
              Login
            </Button>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
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