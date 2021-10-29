import { render } from '@testing-library/react'
import React from 'react'
import mockTodos from './mock/mockTodos'
import RenderTodos from './RenderTodos'

it('should renders an array of todo objects', () => {
  const fakeUpdateTodo = jest.fn()
  const fakeDeleteTodo = jest.fn()

  const { container } = render(
    <RenderTodos
      todos={mockTodos}
      updateTodo={fakeUpdateTodo}
      deleteTodo={fakeDeleteTodo}
    />
  )
  expect(container).toMatchInlineSnapshot(`
    <div>
      <ul>
        <li>
          <div
            class="sc-bdvvtL iVlmDW"
            data-testid="wash-up-wrapper"
          >
            <span
              class="sc-gsDKAQ dzLrXU"
              data-testid="itemName"
            >
              wash up
            </span>
            <span
              class="sc-dkPtRN fGNxnC"
            >
              <span>
                edit
              </span>
            </span>
            <span
              class="sc-gKclnd KAeOw"
              data-testid="itemRemove"
            >
              delete
            </span>
          </div>
        </li>
        <li>
          <div
            class="sc-bdvvtL iVlmDW"
            data-testid="eat-some-cheese-wrapper"
          >
            <span
              class="sc-gsDKAQ dzLrXU"
              data-testid="itemName"
            >
              eat some cheese
            </span>
            <span
              class="sc-dkPtRN fGNxnC"
            >
              <span>
                edit
              </span>
            </span>
            <span
              class="sc-gKclnd KAeOw"
              data-testid="itemRemove"
            >
              delete
            </span>
          </div>
        </li>
        <li>
          <div
            class="sc-bdvvtL iVlmDW"
            data-testid="take-a-nap-wrapper"
          >
            <span
              class="sc-gsDKAQ dzLrXU"
              data-testid="itemName"
            >
              take a nap
            </span>
            <span
              class="sc-dkPtRN fGNxnC"
            >
              <span>
                edit
              </span>
            </span>
            <span
              class="sc-gKclnd KAeOw"
              data-testid="itemRemove"
            >
              delete
            </span>
          </div>
        </li>
      </ul>
    </div>
  `)
})
