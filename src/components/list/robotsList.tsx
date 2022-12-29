import { useCallback, useEffect, useMemo, useState } from 'react';
import { RobotsRepo } from '../../services/repository/robots.repo';
import { RobotsStructure } from '../../types/robot';

export function RobotsList() {
    const repo = useMemo(() => new RobotsRepo(), []);
    const initialState: Array<RobotsStructure> = [];
    const [robots, setRobots] = useState(initialState);

    const handleLoad = useCallback(async () => {
        const robotList = await repo.load();
        setRobots(robotList);
    }, [repo]);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <section>
            <h3>Robots List</h3>
            <ul>
                {robots.map((el) => {
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
                            <button>Eliminar</button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
