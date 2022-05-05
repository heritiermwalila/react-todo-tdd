import { render } from '@testing-library/react';
import React from 'react';
import TodoItem from '../TodoItem';
import {v4} from 'uuid'

describe('TodoItem', () => {
    it('should render the component', () => {
        render(<TodoItem {...{
            todo: {
                id: v4(),
                task: 'Clean the bed',
                completed: false
            }
        }} />)
    })
})