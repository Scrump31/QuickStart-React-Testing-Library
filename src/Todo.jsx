import React, { useState } from 'react'
import styled from 'styled-components'

const TodoItem = styled.div`
  padding: 16px 10px;
  border-bottom: 1px dotted #bbb;
  display: flex;
  &:hover {
    background: #f4d58d;
    color: #001427;
  }
`
const ItemName = styled.span`
  flex-basis: 0;
  flex-grow: 9;
`
const ItemEdit = styled.span`
  flex-basis: 0;
  text-align: left;
  font-weight: bold;
  cursor: pointer;
  align-self: center;
`
const SaveEdits = styled.span`
  padding-right: 5px;
`
const UpdateTodo = styled.span`
  display: flex;
  width: 100%;
`
const UpdateInput = styled.input`
  font-size: x-large;
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border: 2px solid #708d81;
`
const ItemRemove = styled.span`
  flex-basis: 0;
  text-align: right;
  color: #aa422f;
  font-weight: bold;
  cursor: pointer;
  margin-left: 3em;
`

const Todo = ({ deleteTodo, updateTodo, todo }) => {
  const [edit, setEdit] = useState(false)
  const [newVal, setNewVal] = useState('')

  const handleDelete = () => deleteTodo(todo.id)

  const handleEditState = () => setEdit(!edit)

  const handleUpdateNewVal = e => setNewVal(e.target.value)

  const handleSave = () => updateTodo(todo, newVal)

  return (
    <li>
      <TodoItem data-testid={`${todo.todo.replace(/[ ]/g, '-')}-wrapper`}>
        {!edit && <ItemName data-testid="itemName">{todo.todo}</ItemName>}
        {edit && (
          <UpdateTodo>
            <UpdateInput
              data-testid="updateInput"
              type="text"
              placeholder={todo.todo}
              value={newVal}
              onChange={handleUpdateNewVal}
            />
          </UpdateTodo>
        )}

        <ItemEdit onClick={handleEditState}>
          {edit ? (
            <SaveEdits data-testid="saveEdits" onClick={handleSave}>
              save
            </SaveEdits>
          ) : (
            <span>edit</span>
          )}
        </ItemEdit>

        {!edit && (
          <ItemRemove data-testid="itemRemove" onClick={handleDelete}>
            delete
          </ItemRemove>
        )}
      </TodoItem>
    </li>
  )
}

export default Todo
