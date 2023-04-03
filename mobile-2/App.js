import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
  }

  render() {
    return (
      <div style={{width: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
        <form onSubmit={this.handleFormSubmit} style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '10px', boxShadow: '0px 3px 5px rgba(0,0,0,0.2)' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            <span style={{ display: 'block', marginBottom: '5px' }}>Username:</span>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              style={{ padding: '10px', borderRadius: '5px', border: 'none', boxShadow: '0px 3px 5px rgba(0,0,0,0.1)', fontSize: '16px' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            <span style={{ display: 'block', marginBottom: '5px' }}>Password:</span>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              style={{ padding: '10px', borderRadius: '5px', border: 'none', boxShadow: '0px 3px 5px rgba(0,0,0,0.1)', fontSize: '16px' }}
            />
          </label>
          <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: 'white', fontSize: '16px', cursor: 'pointer' }}>Login</button>
        </form>
        {this.state.username && this.state.password &&
          <div style={{ marginTop: '20px' }}>
            <p>Username: {this.state.username}</p>
            <p>Password: {this.state.password}</p>
          </div>
        }
      </div>
    );
  }
}

export default LoginForm;


