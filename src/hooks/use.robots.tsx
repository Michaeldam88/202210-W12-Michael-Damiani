import { useCallback, useMemo, useState } from 'react';
import { RobotsRepo } from '../services/repository/robots.repo';
import { RobotsStructure } from '../types/robot';

export type UseRobots = {
    handleLoad: () => Promise<void>;
    getRobots: () => Array<RobotsStructure>;
    handleAdd: (robotData: RobotsStructure) => Promise<void>;
    handleDelete: (id: RobotsStructure['id']) => Promise<void>;
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
        setRobots((prev) => [...prev, newRobot]);
    };

    const handleDelete = async (id: RobotsStructure['id']) => {
        const elementToRemove = await repo.delete(id);
        setRobots((prev) => prev.filter((item) => item.id !== elementToRemove));
    };

    const getRobots = () => robots;

    return {
        handleLoad,
        getRobots,
        handleAdd,
        handleDelete,
    };
}
