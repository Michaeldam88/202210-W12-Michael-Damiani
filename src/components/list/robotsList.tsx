import { useEffect } from 'react';
import { useRobots } from '../../hooks/use.robots';

export function RobotsList() {
    const { handleLoad, getRobots, handleDelete } = useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <section>
            <h3>Robots List</h3>
            <ul>
                {getRobots().map((el) => {
                    return (
                        <li key={el.id}>
                            <h4>{el.name}</h4>
                            <img src={el.imageUrl} alt={el.name} />
                            <p>Velocidad: {el.speed}</p>
                            <p>Resistencia: {el.toughness}</p>
                            <p>Creado por: {el.creationUser}</p>
                            <p>Fecha creacción: {el.creationDate}</p>
                            <button>Modificar</button>
                            <button>Añadir a favoritos</button>
                            <button onClick={handleDelete(el.id)}>
                                Eliminar
                            </button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
