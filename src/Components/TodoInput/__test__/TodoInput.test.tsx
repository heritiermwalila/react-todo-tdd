import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import TodoInput from '../TodoInput';

const mockedSetTodo = jest.fn()


describe('TodoInput', () => {
   
    beforeEach(() => {
        render(<TodoInput todos={[]} setTodos={mockedSetTodo}/>)
    })

    it('should render todo input with empty value', () => {
        const input = screen.getByPlaceholderText('Add todo') as HTMLInputElement
        expect(input.value).toBeFalsy()
    })

    it('should Type in the todo input', () => {
        const inputEl = screen.getByPlaceholderText('Add todo') as HTMLInputElement
        fireEvent.change(inputEl, {target: {value: 'foo'}})

        expect(inputEl.value).toBeTruthy()

    })

    it('should submit the input and empty the input', () => {
        const btn = screen.getByRole('button')
        const inputEl = screen.getByPlaceholderText('Add todo') as HTMLInputElement
        fireEvent.click(btn)

        expect(inputEl.value).toBeFalsy()

    })
})