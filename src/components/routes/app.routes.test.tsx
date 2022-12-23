import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Favorites } from '../../pages/favorites/favorites';
import { Home } from '../../pages/home/home';
import { Robots } from '../../pages/robots/robots';
import { AppRoutes } from './app.routes';

const pageTitles = ['Test Home', 'Test Robots', 'Test Favorites'];

jest.mock('../../pages/favorites/favorites');
jest.mock('../../pages/home/home');
jest.mock('../../pages/robots/robots');

const testRoute = (index: number) => {
    const title = new RegExp(pageTitles[index], 'i');
    const element = screen.getByRole('heading', { name: title });
    expect(element).toBeInTheDocument();
};

describe('Given AppRoutes component', () => {
    let paths: Array<string>;
    beforeEach(() => {
        paths = ['/home', '/robots', '/favorites'];
    });
    describe(`When we render the component`, () => {
        test('Then, if the route is home, it should display the HomePage', () => {
            (Home as jest.Mock).mockReturnValue(<p>{pageTitles[0]}</p>);
            render(
                <Router initialEntries={paths} initialIndex={0}>
                    <AppRoutes />
                </Router>
            );
            testRoute(0);
        });

        test('Then, if the route is todo, it should display the Robots', () => {
            (Robots as jest.Mock).mockReturnValue(<p>{pageTitles[1]}</p>);
            render(
                <Router initialEntries={paths} initialIndex={1}>
                    <AppRoutes />
                </Router>
            );
            testRoute(1);
        });

        test('Then, if the route is notes, it should display the Favorites', () => {
            (Favorites as jest.Mock).mockReturnValue(<p>{pageTitles[2]}</p>);
            render(
                <Router initialEntries={paths} initialIndex={2}>
                    <AppRoutes />
                </Router>
            );
            testRoute(2);
        });
    });
});
