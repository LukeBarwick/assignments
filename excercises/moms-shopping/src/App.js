import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "hello welcome to my website"
      inputs: {
        name: 'tyler',
        age: 12
      }
    };
  }

  handleChange = e => {
    this.setState({
      inputs:{
          [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.inputs.name} onChange={this.handleChange} name='name'/>
        <input type='text' value={this.state.inputs.age} onChange={this.handleChange} name='age'/>
      </div>

    );
  }
}

export default App;
