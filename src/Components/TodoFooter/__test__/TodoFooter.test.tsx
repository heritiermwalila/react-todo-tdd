import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import TodoFooter, { TodoFooterProps } from '../TodoFooter'

describe('TodoFooter', () => {

    const MockTodoFooter = ({numOfIncompleteTask}: TodoFooterProps) => {
        return (
            <BrowserRouter>
                <TodoFooter {...{numOfIncompleteTask}}/>
            </BrowserRouter>
        )
    }



it('should render footer component', () => {
    render(<MockTodoFooter numOfIncompleteTask={5}/>)

    const taskTxt = screen.getByText(/5 Tasks left/)
    expect(taskTxt).toBeInTheDocument()
})



it('should render task when the imcomplete task is 1', () => {
    render(<MockTodoFooter numOfIncompleteTask={1}/>)

    const taskTxt = screen.getByText(/1 Task left/)
    expect(taskTxt).toBeVisible()
})
})

