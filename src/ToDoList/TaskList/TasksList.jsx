import React, { Component, Fragment } from 'react';
import { Task } from '../Task/Task';
import styles from './TaskList.css'


export class TasksList extends Component {
  constructor(props) {
    super(props);
  }

  handleRemoveTasks = () => {
    this.props.onRemoveTasks();
  };

  render() {
    console.log("TASK LIST", this.props.tasks);
    return (

      <Fragment>

              <ul className="list-group todo-list">
                  {this.props.tasks.map((item, index) => (
                      <Task
                          key={index}
                          name={item.name}
                          isDone={item.isDone}
                          id={item.id}
                          isDisabled={true}
                          checkboxToggle={this.props.onCheckboxToggle}
                          removeTask={this.props.onRemoveSelectedTask}
                          editTask={this.props.onEditSelectedTask}
                      />
                  ))}
              </ul>


        <button onClick={this.handleRemoveTasks}>Clear</button>

      </Fragment>
    )
  }
}
