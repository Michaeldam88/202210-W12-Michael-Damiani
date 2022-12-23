import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

describe('Given App component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    });
    describe('When it has been render', () => {
        test('Then its child components should be render also with its title', () => {
            const headerTitle = screen.getByRole('heading', {
                name: 'Robots Factory',
            });
            expect(headerTitle).toBeInTheDocument();
        });

        test('Then the Home menu link should be render', () => {
            const headerTitle = screen.getByRole('link', {
                name: 'Home',
            });
            expect(headerTitle).toBeInTheDocument();
        });

        test('Then the Robots menu link should be render', () => {
            const headerTitle = screen.getByRole('link', {
                name: 'Robots',
            });
            expect(headerTitle).toBeInTheDocument();
        });

        test('Then the Favorites menu link should be render', () => {
            const headerTitle = screen.getByRole('link', {
                name: 'Favorites',
            });
            expect(headerTitle).toBeInTheDocument();
        });
    });
});
