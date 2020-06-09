import React from 'react';

export let user_list_var = {
  data: [],
};

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_list: []
    };

    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  create(e) {
    e.preventDefault();
    fetch("https://api.relier.works/restricted/orgs/breerje6uiensniapev0/users", {
      "method": "POST",
      "headers": {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MTAwMDAwLCJVSUQiOiJicjZpNTNlNnVpZWtvZWxlMXFlMCIsIlVzZXJuYW1lIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJleHAiOjE1OTM3NDk3NjEsImlzcyI6IkhpcGVXb3JrIn0.t6ol6UEb3UZ53wkaBSMX36ndiEqy-8P0TrDXw8n2pPM`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      "body": JSON.stringify({
        FullName: this.state.FullName,
        Email: this.state.Email,
        UserUID: this.state.id,
        OrganizationUID: "breerje6uiensniapev0",
        JobRole: this.state.JobRole,
        JobDivision: this.state.JobDivision
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });
  }

  update(e) {
    e.preventDefault();
    fetch("https://api.relier.works/restricted/orgs/breerje6uiensniapev0/users/${this.state.id}", {
      "method": "PUT",
      "headers": {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MTAwMDAwLCJVSUQiOiJicjZpNTNlNnVpZWtvZWxlMXFlMCIsIlVzZXJuYW1lIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJleHAiOjE1OTM3NDk3NjEsImlzcyI6IkhpcGVXb3JrIn0.t6ol6UEb3UZ53wkaBSMX36ndiEqy-8P0TrDXw8n2pPM`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      "body": JSON.stringify({
        _id: this.state.id,
        FullName: this.state.FullName,
        Email: this.state.Email,
        UserUID: this.state.id,
        JobRole: this.state.JobRole,
        JobDivision: this.state.JobDivision
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(err => { console.log(err); });
  }

  delete(e) {
    e.preventDefault();
    fetch(`https://api.relier.works/restricted/orgs/br6i53e6uiekoele1qdg/contacts/${this.state.id}`, {
      "method": "DELETE",
      "headers": {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MTAwMDAwLCJVSUQiOiJicjZpNTNlNnVpZWtvZWxlMXFlMCIsIlVzZXJuYW1lIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJleHAiOjE1OTM3NDk3NjEsImlzcyI6IkhpcGVXb3JrIn0.t6ol6UEb3UZ53wkaBSMX36ndiEqy-8P0TrDXw8n2pPM`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }
}

export default Api;