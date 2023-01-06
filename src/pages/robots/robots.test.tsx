/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen, waitFor } from '@testing-library/react';
import { useRobots } from '../../hooks/use.robots';
import { Robot } from '../../types/robot';
import { Robots } from './robots';

jest.mock('../../hooks/use.robots');

const mockFavorites = [new Robot('Test name', 2, 3, 'creationUser')];

describe('Given "Favorites" component', () => {
    beforeEach(() => {
        (useRobots as jest.Mock).mockReturnValue({
            robots: mockFavorites,
            handleLoad: jest.fn(),
            handleUpdate: jest.fn(),
        });
    });
    describe('When it is initially instantiated', () => {
        beforeEach(async () => {
            await act(async () => {
                render(<Robots></Robots>);
            });
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
