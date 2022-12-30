import { useCallback, useMemo, useState } from 'react';
import { RobotsRepo } from '../services/repository/robots.repo';
import { RobotsStructure } from '../types/robot';

export type UseRobots = {
    handleLoad: () => Promise<void>;
    robots: Array<RobotsStructure>;
    handleAdd: (robotData: RobotsStructure) => Promise<void>;
    handleDelete: (id: RobotsStructure['id']) => Promise<void>;
    handleUpdate: (robot:Partial<RobotsStructure>) => Promise<void>;
};

export function useRobots(): UseRobots {
    const repo = useMemo(() => new RobotsRepo(), []);

    const initialState: Array<RobotsStructure> = [];
    const [robots, setRobots] = useState(initialState);

    const handleLoad = useCallback(async () => {
        const robotList = await repo.load();
        setRobots(robotList);
    }, [repo]);

    const handleAdd = async (robotData: RobotsStructure) => {
        const newRobot = await repo.create(robotData);
        setRobots([...robots, newRobot]);
    };

    const handleUpdate = async (robot: Partial<RobotsStructure>) => {
        const updatedRobot = await repo.update(robot);
        setRobots((prev) => prev.map((item) => (item.id === updatedRobot.id ? updatedRobot : item)));
    };

    const handleDelete = async (id: RobotsStructure['id']) => {
        const elementToRemove = await repo.delete(id);
        setRobots((prev) => prev.filter((item) => item.id !== elementToRemove));
    };



    return {
        handleLoad,
        robots,
        handleAdd,
        handleDelete,
        handleUpdate
    };
}
