import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
`
const Input = styled.input`
  font-size: x-large;
  flex-basis: 0;
  flex-grow: 7;
  padding: 10px;
  border: 2px solid #708d81;
  border-radius: 4px 0 0 4px;
  color: #777;
`
const Submit = styled.button`
  font-size: x-large;
  font-weight: bold;
  flex-grow: 3;
  padding: 10px;
  background: #708d81;
  border-radius: 0 4px 4px 0;
  border: 2px solid #708d81;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`

const AddTodo = ({ addTodo }) => {
  const [todoVal, setTodoVal] = useState('')

  const updateInputVal = e => setTodoVal(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(todoVal)
    setTodoVal('')
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          aria-label="Add Todo"
          type="text"
          required
          value={todoVal}
          onChange={updateInputVal}
        />
        <Submit type="submit">Add Todo</Submit>
      </Form>
    </div>
  )
}

export default AddTodo
