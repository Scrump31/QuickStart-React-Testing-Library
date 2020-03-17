import React from 'react'
import Todo from './Todo'

const RenderTodos = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}

export default RenderTodos
