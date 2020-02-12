import React, { Component } from 'react';
import styles from './Task.scss';

export class Task extends Component {
    componentDidMount() {
    }

    handleCheckBoxClick = ()      => this.props.checkboxToggle(this.props.id);
    handleRemoveSelectedTask = () => this.props.removeTask(this.props.id);
    // handleEditSaveTask = () => this.props.editTask(this.props.id);

    state = {
        isEdit: false,
        name: this.props.name
    };

    ref = React.createRef();

    handleEditSelectedTask = () => {
        this.setState({isEdit: !this.state.isEdit}, () => this.ref.current.focus())
    };

    handleChange = (event) => {
        this.setState({name: event.target.value});
    };

    handleEditSaveTask = (event) => {
        console.log(styles);
        fetch("http://valeriy.com:3005/", {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({

            })
        }).then((response) => {
            // this.setState({tasks: res});
        }).catch(err => {
            console.error(err)
        })
    };


  render() {
      const isTaskChanged = this.state.name !== this.props.name;
    return (
        <li className={styles.body}>
          <input type="checkbox"
                 disabled={!this.state.isEdit}
                 checked={this.props.isDone}
                 onClick={this.handleCheckBoxClick}
                 className={styles.item}
          />

              <input type="text"
                     value={this.state.name}
                     onChange={this.handleChange}
                     disabled={!this.state.isEdit}
                     ref={this.ref}
                  />

            <button type="button"
                    className="btn btn-outline-danger btn-sm" onClick={isTaskChanged ? this.handleEditSaveTask : this.handleEditSelectedTask}>
                <i className={isTaskChanged ? "fa fa-floppy-o" : "fa fa-pencil" } />
            </button>
            <button type="button"
                    className="btn btn-outline-success btn-sm" onClick={this.handleRemoveSelectedTask}>
                <i className="fa fa-times" />
            </button>
        </li>
    )
  }
}