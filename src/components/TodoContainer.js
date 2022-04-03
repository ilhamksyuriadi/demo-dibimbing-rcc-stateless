import React, { Component } from 'react'
import { connect } from 'react-redux';
import './TodoContainer.css';
import AddTodo from './AddTodo';
import TodoCard from './TodoCard'

class TodoContainer extends Component {
  constructor() {
    super()
    this.state = {
      todoList: [
      ]
    }
  }

  render() {
    return (
      <section>
        <AddTodo />
        {this.props.todos.map((todo,index) => {
          return (
            <TodoCard todo={todo} key={index} />
          )
        })}
      </section>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect (mapStateToProps) (TodoContainer);