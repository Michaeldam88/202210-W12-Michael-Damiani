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
        <li key={robot.id}>
            <h4>{robot.name}</h4>
            <img src={robot.imageUrl} alt={robot.name} />
            <p>Velocidad: {robot.speed}</p>
            <p>Resistencia: {robot.toughness}</p>
            <p>Creado por: {robot.creationUser}</p>
            <p>Fecha creacción: {robot.creationDate}</p>
            <button>Modificar</button>
            <button
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
                <button onClick={() => handleDelete(robot.id)}>Eliminar</button>
            ) : null}
        </li>
    );
}
