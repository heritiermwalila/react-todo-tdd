import { render, screen } from '@testing-library/react';
import React from 'react';
import Follower, { FollowerProps } from './Follower';

describe('Follower', () => {
    beforeEach(() => {
        const follower: FollowerProps = {
            gender: 'male',
            name: {
                first: 'Heritier',
                last: 'Mbumba',
                title: 'Mr'
            },
            picture: {
                medium: 'https://randomuser.me/api/portraits/med/men/97.jpg'
            }
        }
        render(<Follower {...{...follower}}/>)
    })

    it('should render without', () => {
        const titleTxt = screen.getByText(/Heritier-Mbumba/)
        expect(titleTxt).toBeInTheDocument()
    })
})