import { render, screen } from '@testing-library/react';
import { AddRobots } from './addRobots';
import userEvent from '@testing-library/user-event';

describe('Given "AddRobots" component', () => {
    const handleAdd = jest.fn();
    const resetForm = jest.fn();

    beforeEach(() => {
        render(<AddRobots handleAdd={handleAdd}></AddRobots>);
    });

    describe('When component is call with a DOM implementation', () => {
        test(`Then it should be render with its title`, () => {
            const newRobotTitle = screen.getByRole('heading', {
                name: 'New Robot',
            });

            expect(newRobotTitle).toBeInTheDocument();
        });
    });

    describe('When data are provided in the form', () => {
        const mockName = 'Test name';
        const mockSpeed = '2';
        const mockToughness = '2';
        const mockSpeedResult = 2;
        const mockToughnessResult = 2;
        const mockCreationUser = 'Test creationUser';

        let inputTextBox: Array<HTMLElement>;
        let inputNumberBox: Array<HTMLElement>;
        let elementsButton: Array<HTMLElement>;

        beforeEach(() => {
            inputTextBox = screen.getAllByRole('textbox');
            inputNumberBox = screen.getAllByRole('spinbutton');
            elementsButton = screen.getAllByRole('button');
        });
        test('Then form could be used for type content', () => {
            expect(inputTextBox[0]).toBeInTheDocument();
            expect(inputNumberBox[0]).toBeInTheDocument();
            expect(inputNumberBox[1]).toBeInTheDocument();
            expect(inputTextBox[1]).toBeInTheDocument();
            userEvent.type(inputTextBox[0], mockName);
            userEvent.type(inputNumberBox[0], mockSpeed);
            userEvent.type(inputNumberBox[1], mockToughness);
            userEvent.type(inputTextBox[1], mockCreationUser);
            expect(inputTextBox[0]).toHaveValue(mockName);
            expect(inputNumberBox[0]).toHaveValue(mockSpeedResult);
            expect(inputNumberBox[1]).toHaveValue(mockToughnessResult);
            expect(inputTextBox[1]).toHaveValue(mockCreationUser);
        });
        test('Then form could be used for send the function received in props', () => {
            userEvent.type(inputTextBox[0], mockName);
            userEvent.type(inputNumberBox[0], mockSpeed);
            userEvent.type(inputNumberBox[1], mockToughness);
            userEvent.type(inputTextBox[1], mockCreationUser);
            userEvent.click(elementsButton[0]);
            expect(handleAdd).toHaveBeenCalled();
        });
        // test('Then form could be used for reset all inputs', () => {            
        //     userEvent.type(inputTextBox[0], mockName);
        //     userEvent.type(inputNumberBox[0], mockSpeed);
        //     userEvent.type(inputNumberBox[1], mockToughness);
        //     userEvent.type(inputTextBox[1], mockCreationUser);            
        //     userEvent.click(elementsButton[1]);            
        //     expect(inputTextBox[0]).toHaveValue('');
        //     expect(inputNumberBox[0]).toHaveValue(null);
        //     expect(inputNumberBox[1]).toHaveValue(null);
        //     expect(inputTextBox[1]).toHaveValue('');
        // });
    });
});
