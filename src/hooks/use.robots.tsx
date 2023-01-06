import { useCallback, useEffect, useMemo, useState } from 'react';
import { RobotsRepo } from '../services/repository/robots.repo';
import { consoleDebug } from '../tools/debug';
import { RobotsStructure } from '../types/robot';

export type UseRobots = {
    handleLoad: () => Promise<void>;
    robots: Array<RobotsStructure>;
    handleAdd: (robotData: RobotsStructure) => Promise<void>;
    handleDelete: (id: RobotsStructure['id']) => Promise<void>;
    handleUpdate: (robot: Partial<RobotsStructure>) => Promise<void>;
    getStatus: () => Status;
};

type Status = 'Starting' | 'Loading' | 'Loaded';

export function useRobots(): UseRobots {
    const repo = useMemo(() => new RobotsRepo(), []);
    consoleDebug('useRobots Instance');

    const initialState: Array<RobotsStructure> = [];    
    const [robots, setRobots] = useState(initialState);
    const initialStatus = 'Starting' as Status;
    const [status, setStatus] = useState(initialStatus);

    const getStatus = () => status;

    useEffect(() => {
        sessionStorage.setItem('totalRobots', JSON.stringify(robots.length));
    }, [robots]);

    const handleLoad = useCallback(async () => {
        setStatus('Loading');
        const robotList = await repo.load();
        setStatus('Loaded');       
        consoleDebug('LOAD Robots'); 
        setRobots(robotList);
    }, [repo]);

    const handleAdd = async (robotData: RobotsStructure) => {
        const newRobot = await repo.create(robotData);
        setRobots([...robots, newRobot]);        
    };

    const handleUpdate = async (robot: Partial<RobotsStructure>) => {
        const updatedRobot = await repo.update(robot);
        setRobots((prev) =>
            prev.map((item) =>
                item.id === updatedRobot.id ? updatedRobot : item
            )
        );
    };

    const handleDelete = async (id: RobotsStructure['id']) => {
        const elementToRemove = await repo.delete(id);
        setRobots((prev) => prev.filter((item) => item.id !== elementToRemove));       
    };

    return {
        getStatus,
        handleLoad,
        robots,
        handleAdd,
        handleDelete,
        handleUpdate,
    };
}
