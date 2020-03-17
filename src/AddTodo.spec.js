import React from 'react'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import AddTodo from './AddTodo'

it('should accepts values for the new todo ', () => {
  const mockAddTodo = jest.fn()
  const { getByLabelText, getByText } = render(
    <AddTodo addTodo={mockAddTodo} />
  )
  const Input = getByLabelText(/add todo/i)
  user.type(Input, 'a new todo')
  expect(Input).toHaveValue('a new todo')

  const SubmitBtn = getByText(/add todo/i)
  user.click(SubmitBtn)
  expect(mockAddTodo).toHaveBeenCalled()
  expect(mockAddTodo).toHaveBeenCalledTimes(1)
})
