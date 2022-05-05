import { render, screen } from '@testing-library/react';
import React from 'react';
import FollowerList from './FollowerList';


describe('FollowerListComponent', () => {
    it('should render', () => {
        render(<FollowerList followers={[
            {
                gender: 'male',
                name: {
                    first: 'John',
                    last: 'Smith',
                    title: 'Mr'
                },
                picture: {
                    medium: 'https://randomuser.me/api/portraits/med/men/97.jpg'
                }
            }
        ]}/>)
        const flws = screen.getAllByTestId(/follower-item/)
        expect(flws).toHaveLength(1)
    })
})