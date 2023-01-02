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
    });
