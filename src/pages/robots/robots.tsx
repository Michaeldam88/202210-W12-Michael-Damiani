import { useEffect } from 'react';
import { AddRobots } from '../../components/addRobot/addRobots';
import { RobotElement } from '../../components/robotElement/robotElement';
import { useRobots } from '../../hooks/use.robots';

export function Robots() {
    const { handleLoad, robots, handleDelete, handleAdd, handleUpdate } =
        useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <section className="robots">
            <h2 className="robots__title">Robots</h2>
            <AddRobots handleAdd={handleAdd} />
            <section>
                <h3>Robots List</h3>
                <ul className="robots__list">
                    {robots.map((el) => (
                        <RobotElement
                            key={el.id}
                            robot={el}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        />
                    ))}
                </ul>
            </section>
        </section>
    );
}
