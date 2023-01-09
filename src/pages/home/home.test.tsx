import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './home';

const sessionStorageMock = (function () {
    let store: { [keys: string]: string } = {};

    return {
        getItem(key: string) {
            return store[key]||null;
        },

        setItem(key: string, value: string) {
            store[key] = value;
        },

        clear() {
            store = {};
        },

        removeItem(key: string) {
            delete store[key];
        },

        getAll() {
            return store;
        },
    };
})();

Object.defineProperty(window, 'sessionStorage', { value: sessionStorageMock });

describe('Given Home component', () => {

    
    beforeEach(() => {
        sessionStorage.clear();
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
    });

    test('Then its child components should be render also with its paragraph', () => {
        const totalRobotsParagraph = screen.getByTestId('totalRobots');
        expect(totalRobotsParagraph).toBeInTheDocument();
    });

    test('if there is no info in session storage should show Total robots disponibles 0', () => {
        const totalRobotsParagraph = screen.getByTestId('totalRobots');
        expect(totalRobotsParagraph).toBeInTheDocument();
        sessionStorage.clear();
        const noRobotsParagraph = screen.getByText(
            'Total robots disponibles 0'
        );
        expect(noRobotsParagraph).toBeInTheDocument();
    });

    test('if there are 2 robots in the database it should show the correct number', () => {
        sessionStorage.setItem('totalRobots', JSON.stringify(2));
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        const noRobotsParagraph = screen.getByText(
            'Total robots disponibles 2'
        );
        expect(noRobotsParagraph).toBeInTheDocument();
    });
});
