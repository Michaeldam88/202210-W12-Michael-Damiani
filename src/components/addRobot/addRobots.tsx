import { SyntheticEvent, useMemo, useState } from 'react';
import { RobotsRepo } from '../../services/repository/robots.repo';
import { Robot, RobotsStructure } from '../../types/robot';

export function AddRobots() {
    const repo = useMemo(() => new RobotsRepo(), []);
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

        repo.create(
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
        <section>
            <h3>New Robot</h3>
            <form onSubmit={handleSubmit} id="robot-form">
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nombre del Robot"
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="speed">Velocidad</label>
                    <input
                        type="number"
                        name="speed"
                        id="speed"
                        min="0"
                        max="10"
                        placeholder="Indica su velocidad"
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="toughness">Resistencia</label>
                    <input
                        type="number"
                        name="toughness"
                        min="0"
                        max="10"
                        id="toughness"
                        placeholder="Indica su resistencia"
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="creationUser">Creador</label>
                    <input
                        type="text"
                        name="creationUser"
                        id="creationUser"
                        placeholder="Escribe tu nombre"
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <button>Crear</button>
                    <button onClick={resetForm}>Borrar datos</button>
                </div>
            </form>
        </section>
    );
}
