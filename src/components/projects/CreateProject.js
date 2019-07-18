import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
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
          <h5 className='grey-text text-darken-3'>Create Project</h5>
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='content'>Project Content</label>
            <textarea
              name='content'
              className='materialize-textarea'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field'>
            <button className='btn cyan accent-4 z-depth-0'>Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
