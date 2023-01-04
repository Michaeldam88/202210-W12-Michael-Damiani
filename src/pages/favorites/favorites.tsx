import { useEffect } from 'react';
import { RobotElement } from '../../components/robotElement/robotElement';
import { useRobots } from '../../hooks/use.robots';

export function Favorites() {
    const { handleLoad, robots, handleUpdate } = useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <section className="favorites">
            <h2>Favorites</h2>
            <ul className="favorites__list">
                {robots
                    .filter((el) => el.isFavorited)
                    .map((el) => (
                        <RobotElement
                            key={el.id}
                            robot={el}
                            handleUpdate={handleUpdate}
                        />
                    ))}
            </ul>
        </section>
    );
}
