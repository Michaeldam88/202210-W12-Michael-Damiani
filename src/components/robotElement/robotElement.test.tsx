import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Robot } from '../../types/robot';
import { RobotElement } from './robotElement';

describe('Given "Item" component', () => {
    const handleUpdate = jest.fn();
    const handleDelete = jest.fn();
    const mockName = 'Test_name';
    const mockSpeed = 2;
    const mockToughness = 3;
    const mockCreationUser = 'Test creationUser';
    const date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

    const mockRobot = new Robot(
        mockName,
        mockSpeed,
        mockToughness,
        mockCreationUser
    );

    const mockRobot2 = new Robot(
        mockName,
        mockSpeed,
        mockToughness,
        mockCreationUser
    );

    mockRobot2.isFavorited = true;
    mockRobot2.editingMode = true;

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
                screen.getByText('Velocidad: 2'),
                screen.getByText('Resistencia: 3'),
                screen.getByText('Creado por: Test creationUser'),
                screen.getByText('Fecha creacción: ' + date),
                screen.getByRole('button', { name: 'Añadir a favoritos' }),
                screen.getByRole('button', { name: 'Eliminar' }),
            ];

            expect(elements[0]).toBeInTheDocument();
            expect(elements[1]).toHaveAttribute(
                'src',
                `https://robohash.org/${mockName}.png`
            );
            expect(elements[2]).toBeInTheDocument();
            expect(elements[3]).toBeInTheDocument();
            expect(elements[4]).toBeInTheDocument();
            expect(elements[5]).toBeInTheDocument();
            expect(elements[6]).toBeInTheDocument();

            userEvent.click(elements[6]);
            expect(handleUpdate).toHaveBeenCalledTimes(1);

            userEvent.click(elements[7]);
            expect(handleDelete).toHaveBeenCalledTimes(1);
        });
    });

    describe('When we are in editing mode', () => {
        let inputNumberBox: Array<HTMLElement>;

        test('Then form could be used for type content', () => {
            render(
                <RobotElement
                    robot={mockRobot2}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                ></RobotElement>
            );
            const editBtn = screen.getByRole('button', {
                name: 'Salir Edición',
            });
            inputNumberBox = screen.getAllByRole('spinbutton');

            userEvent.click(editBtn);
            expect(handleUpdate).toHaveBeenCalledTimes(1);

            expect(editBtn).toBeInTheDocument();
            expect(inputNumberBox[0]).toBeInTheDocument();
            expect(inputNumberBox[1]).toBeInTheDocument();
            userEvent.type(inputNumberBox[0], '2');
            userEvent.type(inputNumberBox[1], '3');
            expect(inputNumberBox[0]).toHaveValue(2);
            expect(inputNumberBox[1]).toHaveValue(3);
        });
    });
});
