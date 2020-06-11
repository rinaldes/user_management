import React from 'react';
import logo from '../../picture/logo.PNG';
import { Grid, Image } from 'semantic-ui-react'

function NoPage() {
  return (
    <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Image src={logo} textAlign='center' style={{ marginRight: "auto", marginLeft: "auto" }} />
        <br />
        <h2>404 Not Found</h2>
      </Grid.Column>
    </Grid>
  )
}

export default NoPage