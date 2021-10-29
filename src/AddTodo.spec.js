import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import React from 'react'
import AddTodo from './AddTodo'

it('should accept values for the new todo', () => {
  const mockAddTodo = jest.fn()
  render(<AddTodo addTodo={mockAddTodo} />)
  const Input = screen.getByRole('textbox', { name: /add todo/i })

  user.type(Input, 'a new todo')

  expect(Input).toHaveValue('a new todo')
})

it('should call "mockAddTodo"', () => {
  const mockAddTodo = jest.fn()
  render(<AddTodo addTodo={mockAddTodo} />)

  const SubmitBtn = screen.getByText(/add todo/i)
  user.click(SubmitBtn)

  expect(mockAddTodo).toHaveBeenCalled()
  expect(mockAddTodo).toHaveBeenCalledTimes(1)
})
