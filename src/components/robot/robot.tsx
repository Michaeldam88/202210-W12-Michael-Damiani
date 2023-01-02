import { RobotsStructure } from '../../types/robot';

export function Robot({
    robot,
    handleDelete,
    handleUpdate,
}: {
    robot: RobotsStructure;
    handleDelete?: (id: RobotsStructure['id']) => Promise<void>;
    handleUpdate: (robot: Partial<RobotsStructure>) => Promise<void>;
}) {
    return (
        <li className="robot" key={robot.id}>
            <h4 className="robot__title">{robot.name}</h4>
            <img
                className="robot__image"
                src={robot.imageUrl}
                alt={robot.name}
            />
            <p className="robot__text">Velocidad: {robot.speed}</p>
            <p className="robot__text">Resistencia: {robot.toughness}</p>
            <p className="robot__text">Creado por: {robot.creationUser}</p>
            <p className="robot__text">Fecha creacción: {robot.creationDate}</p>
            <button className="robot__button robot__button--first">Modificar</button>
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
