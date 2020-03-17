import React from 'react'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Todo from './Todo'
import RenderTodos from './RenderTodos'

describe('<Todo />', () => {
  const mockTodo = { id: 1, todo: 'test todo' }

  it('should render a todo object', () => {
    const { getByTestId } = render(<Todo todo={mockTodo} />)
    const ItemName = getByTestId('itemName')
    expect(ItemName).toHaveTextContent(mockTodo.todo)
  })

  it('should display the previous state in the edit input ', () => {
    const { getByText, getByPlaceholderText } = render(<Todo todo={mockTodo} />)
    const EditBtn = getByText(/edit/i)
    user.click(EditBtn)
    const UpdateInput = getByPlaceholderText(mockTodo.todo)
    expect(UpdateInput).toBeInTheDocument()
  })

  it('should update the todo via the edit input', () => {
    const { getByText, getByPlaceholderText } = render(<Todo todo={mockTodo} />)
    const EditBtn = getByText(/edit/i)
    user.click(EditBtn)
    const UpdateInput = getByPlaceholderText(mockTodo.todo)
    user.type(UpdateInput, 'updated todo')
    expect(UpdateInput).toHaveValue('updated todo')
  })

  describe('Edit/Delete todos', () => {
    const mockUpdateTodo = jest.fn()
    const mockDeleteTodo = jest.fn()
    const mockTodo = [{ id: 1, todo: 'wash up' }]

    it('should save an updated todo ', () => {
      const { getByText, getByTestId } = render(
        <RenderTodos
          updateTodo={mockUpdateTodo}
          deleteTodo={mockDeleteTodo}
          todos={mockTodo}
        />
      )
      const EditBtn = getByText(/edit/i)
      user.click(EditBtn)
      const UpdateInput = getByTestId('updateInput')
      user.click(UpdateInput)
      user.type(UpdateInput, 'updated todo')
      const saveEdit = getByTestId('saveEdits')
      user.click(saveEdit)

      expect(mockUpdateTodo).toHaveBeenCalled()
      expect(mockUpdateTodo).toHaveBeenCalledTimes(1)
    })

    it('should delete a todo ', () => {
      const { getByTestId } = render(
        <RenderTodos
          updateTodo={mockUpdateTodo}
          deleteTodo={mockDeleteTodo}
          todos={mockTodo}
        />
      )
      const DeleteBtn = getByTestId('itemRemove')
      user.click(DeleteBtn)
      expect(mockDeleteTodo).toHaveBeenCalled()
      expect(mockDeleteTodo).toHaveBeenCalledTimes(1)
    })
  })
})
