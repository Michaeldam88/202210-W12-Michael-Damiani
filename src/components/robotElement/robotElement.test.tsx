import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Robot } from '../../types/robot';
import { RobotElement } from './robotElement';

describe('Given "Item" component', () => {
    const handleUpdate = jest.fn();
    const handleDelete = jest.fn();
    const mockName = 'Test_name';
    const mockSpeed = 2;
    const mockToughness = 2;
    const mockCreationUser = 'Test creationUser';

    const mockRobot = new Robot(
        mockName,
        mockSpeed,
        mockToughness,
        mockCreationUser
    );
    describe('When data are provided in the component', () => {
        test('Then user could interact with them', async () => {
            render(
                <RobotElement
                    robot={mockRobot}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                ></RobotElement>
            );

            const elements = [
                screen.getByRole('heading', { name: mockName }),
                screen.getByRole('img'),
                //...screen.getAllByRole('paragraph'),
                //...screen.getAllByRole('button'),
            ];

            expect(elements[0]).toBeInTheDocument();
            expect(elements[1]).toHaveAttribute(
                'src',
                `https://robohash.org/${mockName}.png`
            );

            // userEvent.click(elements[3][1]);
            // expect(handleUpdate).toHaveBeenCalledTimes(1);
            // userEvent.click(elements[3][2]);
            // expect(handleDelete).toHaveBeenCalledTimes(1);
        });
    });
});
