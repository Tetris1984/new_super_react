import React, { Component } from 'react';
import { TasksList } from './TaskList/TasksList'
import { CreateNewTask } from './CreateNewTask/CreateNewTask'
import uuid from 'uuid'
import styles from './ToDoList.scss'
import { connect} from "react-redux";
import {getAllTodo, createNewTodo, deleteTodo} from '../actions'

class ToDoList extends Component {
    state = {
        isLoading: true
    };

    componentDidMount() {
      this.props.setAllTodos();
    }

  handleTaskCreate = (newTask) => {
      const newTaskObj = { name: newTask, isDone: false, id: uuid() };
      fetch("http://valeriy.com:3005/", {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({
              ...newTaskObj
          }),
      }).then(
        this.props.createNewTodo(newTaskObj)
      );
  };

  handleRemoveSelectedTask = (id) => {
      fetch("http://valeriy.com:3005/", {
          method: 'DELETE',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({id}),
      }).then(
        this.props.removeTask(id)
      );
  };

    handleEditSelectedTask = (id) => {
        console.log(id);
    };

  handleRemoveTasks = () => {
      fetch("http://valeriy.com:3005/delete_all", {
          method: 'DELETE',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
          },
      }).then(() => this.setState({ tasks: [] }));
  };

  handleCheckboxToggle = (id) => {
      let selectedTask = {};
      var res = this.state.tasks.map(function(num) {
          if(num.id === id){
              selectedTask = {...num, isDone: !num.isDone};
              return selectedTask
          }
          return num
      });
      fetch("http://valeriy.com:3005/", {
          method: 'PUT',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({
              ...selectedTask
          })
      }).then((response) => {
          this.setState({tasks: res});
      }).catch(err => {
          console.error(err)
      })
  };

  render() {
    // console.log("TODO LIST PROPS", this.props.todos.allTask.tasks)
    return (
      <div>
        <h1>ToDo List</h1>
        <CreateNewTask onTaskCreate={this.handleTaskCreate} />
        <TasksList tasks={this.props.todos}
                   isLoading={this.state.isLoading}
                   onRemoveTasks={this.handleRemoveTasks}
                   onCheckboxToggle={this.handleCheckboxToggle}
                   onRemoveSelectedTask={this.handleRemoveSelectedTask}
                   onEditSelectedTask={this.handleEditSelectedTask}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  todos: state.allTask.tasks
});

const mapDispatchToProps = dispatch => ({
  setAllTodos: tasks => {
    return dispatch(getAllTodo(tasks));
  },

  createNewTodo: task => {
    dispatch(createNewTodo(task))
  },


  removeTask: task => {
    dispatch(deleteTodo(task))
  },
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList)

