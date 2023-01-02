import { SyntheticEvent, useState } from 'react';
import { Robot, RobotsStructure } from '../../types/robot';

export function AddRobots({
    handleAdd,
}: {
    handleAdd: (robotData: RobotsStructure) => Promise<void>;
}) {
    const initialRobot: Partial<RobotsStructure> = {
        name: '',
        speed: 0,
        toughness: 0,
        creationUser: '',
    };
    const [robotData, setRobotData] = useState(initialRobot);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setRobotData({ ...robotData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();

        handleAdd(
            new Robot(
                robotData.name as string,
                robotData.speed as number,
                robotData.toughness as number,
                robotData.creationUser as string
            )
        );
        resetForm();
    };

    const resetForm = () => {
        setRobotData(initialRobot);
        const robotForm = document.getElementById(
            'robot-form'
        ) as HTMLFormElement;
        if (robotForm) {
            robotForm.reset();
        }
    };

    return (
        <section className="add-robots">
            <h3>New Robot</h3>
            <form
                className="add-robots__form"
                onSubmit={handleSubmit}
                id="robot-form"
            >
                <div className="add-robots__container">
                    <label className="add-robots__label" htmlFor="name">
                        Nombre:
                    </label>
                    <input
                        className="add-robots__input"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nombre del Robot"
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="add-robots__container">
                    <label className="add-robots__label" htmlFor="speed">
                        Velocidad:
                    </label>
                    <input
                        className="add-robots__input"
                        type="number"
                        name="speed"
                        id="speed"
                        min="0"
                        max="10"
                        placeholder="Indica su velocidad 1-10"
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="add-robots__container">
                    <label className="add-robots__label" htmlFor="toughness">
                        Resistencia:
                    </label>
                    <input
                        className="add-robots__input"
                        type="number"
                        name="toughness"
                        min="0"
                        max="10"
                        id="toughness"
                        placeholder="Indica su resistencia 1-10"
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="add-robots__container">
                    <label className="add-robots__label" htmlFor="creationUser">
                        Creador:
                    </label>
                    <input
                        className="add-robots__input"
                        type="text"
                        name="creationUser"
                        id="creationUser"
                        placeholder="Escribe tu nombre"
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="add-robots__button-container">
                    <button className="add-robots__button">Crear</button>
                    <button
                        className="
                        add-robots__button"
                        onClick={resetForm}
                    >
                        Borrar datos
                    </button>
                </div>
            </form>
        </section>
    );
}
