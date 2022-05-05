import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TodoPage from './TodoPage';

const MockTodoPage = () => {
    return <BrowserRouter>
        <TodoPage />
    </BrowserRouter>
}

const addTask = (tasks: string[]) => {
    const inputEl = screen.getByPlaceholderText('Add todo')
    const addBtn = screen.getByRole('button', {name: 'Add todo'})

    tasks.forEach(todo => {
        fireEvent.change(inputEl, {target: {value: todo}})
        fireEvent.click(addBtn)
    })

   
}

describe('TodoPage', () => {
    beforeEach(() => {
        render(<MockTodoPage />)
    })
   
    it('Should add a new todo in the todo list', () => {
        addTask(["Wash by car"])
        const imcompleteTaskEl = screen.getByTestId('imcomplete')

       
        const newTodoEl = screen.getByText(/Wash by car/)
        expect(newTodoEl).toBeInTheDocument()
        expect(imcompleteTaskEl.textContent).toBe('1 Task left')
    })

    it('Should add a many todos and count them', () => {
        addTask(["Go shopping", "Feed the cow", "Arrange the bed"])
        const taskListEl = screen.getAllByTestId('task-container')

        expect(taskListEl.length).toBe(3)
    })

    it('Should add a todo with incomplete state style', () => {
        addTask(["Go shopping"])
        const taskListEl = screen.getByText(/Go shopping/)

        expect(taskListEl).not.toHaveClass('todo-item-active')
    })

    it('Should have a completed task style', () => {
        addTask(["Go shopping"])
        const taskListEl = screen.getByText(/Go shopping/)

        fireEvent.click(taskListEl)
        const taskListElUp = screen.queryByRole('deletion')

        expect(taskListElUp).toBeTruthy()
    })
})


