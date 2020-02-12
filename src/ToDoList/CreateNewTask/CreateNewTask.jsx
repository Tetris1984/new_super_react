import React, { Component } from 'react';

export class CreateNewTask extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleTaskCreate = this.handleTaskCreate.bind(this);

    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleTaskCreate(event) {
    this.props.onTaskCreate(this.state.value);
    this.setState({ value: ''  });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="ADD" onClick={this.handleTaskCreate} disabled={!this.state.value} />
      </div>
    )
  }
}