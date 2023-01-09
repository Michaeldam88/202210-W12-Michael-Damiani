import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './home';

describe('Given Home component', () => {
    beforeEach(() => {
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
});

describe('Given sessin storage with data', () => {
    sessionStorage.setItem('totalRobots', JSON.stringify(2));
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
    });

    test('if there is 2 robots in session storage should show the correct number', () => {
        const noRobotsParagraph = screen.getByText(
            'Total robots disponibles 2'
        );
        expect(noRobotsParagraph).toBeInTheDocument();
    });
});
