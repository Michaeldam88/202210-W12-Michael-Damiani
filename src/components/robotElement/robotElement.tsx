import { SyntheticEvent } from 'react';
import { RobotsStructure } from '../../types/robot';

export function RobotElement({
    robot,
    handleDelete,
    handleUpdate,
}: {
    robot: RobotsStructure;
    handleDelete?: (id: RobotsStructure['id']) => Promise<void>;
    handleUpdate: (robot: Partial<RobotsStructure>) => Promise<void>;
}) {
    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        handleUpdate({
            ...robot,
            [element.name]: element.value,
        });
    };

    return (
        <li className="robot" key={robot.id}>
            <h4 className="robot__title">{robot.name}</h4>
            <img
                className="robot__image"
                src={robot.imageUrl}
                alt={robot.name}
            />
            <p className="robot__text">
                Velocidad:{' '}
                {robot.editingMode ? (
                    <input
                        className="robot__input"
                        type="number"
                        name="speed"
                        min="0"
                        max="10"
                        placeholder="Indica su velocidad 1-10"
                        onInput={handleInput}
                    />
                ) : (
                    robot.speed
                )}
            </p>
            <p className="robot__text">
                Resistencia:{' '}
                {robot.editingMode ? (
                    <input
                        className="robot__input"
                        type="number"
                        name="toughness"
                        min="0"
                        max="10"
                        placeholder="Indica su resistencia 1-10"
                        onInput={handleInput}
                    />
                ) : (
                    robot.toughness
                )}
            </p>
            <p className="robot__text">Creado por: {robot.creationUser}</p>
            <p className="robot__text">Fecha creacción: {robot.creationDate}</p>
            <button
                className="robot__button robot__button--first"
                onClick={() =>
                    handleUpdate({
                        ...robot,
                        editingMode: !robot.editingMode,
                    })
                }
            >
                {robot.editingMode ? 'Salir Edición' : 'Editar'}
            </button>
            <button
                className="robot__button"
                onClick={() =>
                    handleUpdate({
                        ...robot,
                        isFavorited: !robot.isFavorited,
                    })
                }
            >
                {robot.isFavorited
                    ? 'Quitar de favoritos'
                    : 'Añadir a favoritos'}
            </button>
            {handleDelete ? (
                <button
                    className="robot__button"
                    onClick={() => handleDelete(robot.id)}
                >
                    Eliminar
                </button>
            ) : null}
        </li>
    );
}
