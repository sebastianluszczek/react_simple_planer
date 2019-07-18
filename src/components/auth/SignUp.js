import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Sign Up</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' name='firstName' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' name='lastName' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field'>
            <button className='btn cyan accent-4 z-depth-0'>SIGN UP</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
