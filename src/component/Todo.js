import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../store/actions/index";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: ""
    };
    // this.setState = {
    //   newItem: ""
    // };
  }

  updateInput = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  addItem = e => {
    e.preventDefault();
    this.props.addTodo({
      title: this.state.newItem,
      id: Date.now(),
      iscomplete: false
    });
    this.setState({ newItem: "" });
  };

  render() {
    return (
      <div>
        <div className="bigbloc">
          <h1 className="app-title">To-Do APP !</h1>
          <p className="app-title1">Add new To-Do</p>
          <form onSubmit={this.addItem}>
            <input
              type="text"
              value={this.state.newItem}
              onChange={this.updateInput}
              className="input"
              placeholder="Enter a task here"
            />
            <button className="add-btn" onClick={() => this.addItem}>
              Add
            </button>
          </form>
        </div>
        <div>
          {this.props.todos.map(todo => (
            <div key={todo.id}>
              <li className={todo.iscomplete ? "complete" : ""}>
                {todo.title}

                <button
                  className="button1"
                  onClick={() => this.props.editTodo(todo.id)}
                >
                  {!todo.iscomplete ? "complete" : "undo"}
                </button>
                <button
                  className="button1"
                  onClick={() => this.props.deleteTodo(todo.id)}
                >
                  {" "}
                  Delete
                </button>
              </li>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: id => dispatch(editTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
