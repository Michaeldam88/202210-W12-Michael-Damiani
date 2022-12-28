import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';

const pageTitles = ['Home', 'Robots', 'Favorites'];

const testRoute = (index: number) => {
    const title = new RegExp(`^${pageTitles[index]}$`);
    const element = screen.getByRole('heading', { name: title });
    expect(element).toBeInTheDocument();
};

describe('Given AppRoutes component', () => {
    let paths: Array<string>;
    beforeEach(() => {
        paths = ['/home', '/robots', '/favorites'];
    });
    describe(`When we render the component`, () => {
        test('Then, if the route is home, it should display the Home Page', () => {
            render(
                <Router initialEntries={paths} initialIndex={0}>
                    <AppRoutes />
                </Router>
            );
            testRoute(0);
        });

        test('Then, if the route is Robots, it should display the Robots Page', () => {
            render(
                <Router initialEntries={paths} initialIndex={1}>
                    <AppRoutes />
                </Router>
            );
            testRoute(1);
        });

        test('Then, if the route is Favorites, it should display the Favorites Page', () => {
            render(
                <Router initialEntries={paths} initialIndex={2}>
                    <AppRoutes />
                </Router>
            );
            testRoute(2);
        });
    });
});
