/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen, waitFor } from '@testing-library/react';
import { useRobots } from '../../hooks/use.robots';
import { Robot } from '../../types/robot';
import { Favorites } from './favorites';

jest.mock('../../hooks/use.robots');

const mockFavorites = [new Robot('Test name', 2, 3, 'creationUser')];

describe('Given "Favorites" component', () => {
    beforeEach(() => {
        (useRobots as jest.Mock).mockReturnValue({
            robots: mockFavorites,
            handleLoad: jest.fn(),
            handleUpdate: jest.fn(),
        });
        mockFavorites[0].isFavorited = true;
    });
    describe('When it is initially instantiated', () => {
        beforeEach(async () => {
            await act(async () => {
                render(<Favorites></Favorites>);
            });
        });
        test(`Then component should be render the title`, () => {
            const elementTitle = screen.getByRole('heading', {
                name: 'Favorites',
            });
            expect(elementTitle).toBeInTheDocument();
        });

        test(`Then it should be render the data`, async () => {
            const elementList = await screen.findByRole('list'); // <ul />
            expect(elementList).toBeInTheDocument();
            await waitFor(() => {
                expect(useRobots().handleLoad).toHaveBeenCalled();
            });
            const elementItem = await screen.findByText(/Test name/i);
            expect(elementItem).toBeInTheDocument();
        });
    });
});
