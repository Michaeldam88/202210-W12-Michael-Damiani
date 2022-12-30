import { useEffect } from 'react';
import { Robot } from '../../components/robot/robot';
import { useRobots } from '../../hooks/use.robots';

export function Favorites() {
    const { handleLoad, robots, handleUpdate } = useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <section>
            <h2>Favorites</h2>
            {robots
                .filter((el) => el.isFavorited)
                .map((el) => (
                    <Robot key={el.id} robot={el} handleUpdate={handleUpdate} />
                ))}
        </section>
    );
}
