import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AddTodo from './AddTodo'
import LoadingMsg from './LoadingMsg/LoadingMsg'
import RenderTodos from './RenderTodos'
import idGen from './util/idGenerator'

const Container = styled.main`
  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
    padding: 0;
  }
`
const Header = styled.h1`
  font-family: 'Permanent Marker', cursive;
  text-align: center;
`
const App = () => {
  const LOCAL_STORAGE_KEY = 'getting-things-done'
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  // When app first loads, get localStorage data and provide to App.
  useEffect(() => {
    const todos = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (todos !== null) {
      setTodos(JSON.parse(todos))
    }
    setLoading(false)
  }, [])

  // When todos state changes, update local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const deleteTodo = id => {
    try {
      const updatedTodos = todos.filter(todo => todo.id !== id)
      setTodos(updatedTodos)
    } catch (error) {
      console.log('cannot delete todo', error)
    }
  }

  const addTodo = item => {
    try {
      let newTodo = { id: idGen(), todo: item }
      setTodos(prevTodos => [...prevTodos, newTodo])
    } catch (error) {
      console.log('cannot add todo', error)
    }
  }

  const updateTodo = (oldTodo, updatedTodo) => {
    try {
      if (updatedTodo !== '') {
        const updated = todos.map(todo => {
          if (todo.id === oldTodo.id) {
            return { ...oldTodo, todo: updatedTodo }
          }
          return todo
        })
        setTodos(updated)
      } else {
        return null
      }
    } catch (error) {
      console.log('cannot update todo', error)
    }
  }

  return (
    <Container>
      <Header>Getting things done</Header>

      {todos.length > 0 && (
        <RenderTodos
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      )}

      {loading && <LoadingMsg />}

      <AddTodo addTodo={addTodo} />
    </Container>
  )
}

export default App
