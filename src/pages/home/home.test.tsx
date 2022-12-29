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

    describe('When it has been render', () => {
        test('Then its child components should be render also with its image', () => {
            const homeLogo = screen.queryByRole('img', {
                name: 'Home Logo',
            });
            expect(homeLogo).toBeInTheDocument();
        });

        test('Then its child components should be render also with its paragraph', () => {
            const totalRobotsParagraph = screen.getByTestId('totalRobots');
            expect(totalRobotsParagraph).toBeInTheDocument();
        });
    });
});
