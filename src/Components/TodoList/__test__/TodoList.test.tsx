import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TodoList from '../TodoList';

const MockTodoList = () => {
    return <BrowserRouter>
        <TodoList todos={[]} onClompleteTask={jest.fn()}/>
    </BrowserRouter>
}


describe('TodoList', () => {
    it('should render an empty list of todos', () => {
        render(<MockTodoList />)
    })
})