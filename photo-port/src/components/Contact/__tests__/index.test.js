import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..'

afterEach(cleanup);

describe('Contact component', () => {
    
    it('renders', () => {
        render(<Contact />)
    })

    it('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('contact-h1')).toHaveTextContent('Contact me')
    })

    it('renders', () => {
        const { getByTestId } =render(<Contact />)
        expect(getByTestId('submit-btn')).toHaveTextContent('Submit')
    })
})

