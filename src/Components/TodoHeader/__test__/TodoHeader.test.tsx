import React from 'react';
import { render, screen } from '@testing-library/react'
import TodoHeader from '../TodoHeader';

it('should render header component', () => {
    render(<TodoHeader title="My Header" />)
    const header = screen.getByRole('heading')
    const txt = screen.getByText(/My Header/)

    expect(header).toBeInTheDocument()
    expect(txt).toBeInTheDocument()

})