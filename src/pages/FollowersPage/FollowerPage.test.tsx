import { render, screen, cleanup, waitFor } from '@testing-library/react'
import React from 'react'
import FollowerPage from './FollowerPage'
import axios from 'axios'

describe('FollowerPageComponent', () => {
    afterEach(cleanup)
    it('should render', async () => {
        render(<FollowerPage />)
        const countFlws = await waitFor(() => screen.findAllByTestId(/follower-item/))
        expect(countFlws.length).toBe(2)
        expect(axios.get).toHaveBeenCalled()
    })
})