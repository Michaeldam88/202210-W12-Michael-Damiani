import { RobotsRepo } from '../services/repository/robots.repo';
import { Robot } from '../types/robot';

export const mockRobot1 = new Robot('Test Robot 1', 1, 2, 'user');
mockRobot1.id = '000001';
export const mockRobot2 = new Robot('Test Robot 2', 2, 3, 'user');
mockRobot2.id = '000002';
export const mockRobots = [mockRobot1, mockRobot2];
export const mockAddRobot = new Robot('Added Robot', 3, 4, 'user');
mockAddRobot.id = '000003';
export const mockUpdateRobot = { ...mockRobot2, name: 'Update Robot' };

export const mockValidRepoResponse = () => {
    (RobotsRepo.prototype.load as jest.Mock).mockResolvedValue(mockRobots);
    (RobotsRepo.prototype.create as jest.Mock).mockResolvedValue(mockAddRobot);
    (RobotsRepo.prototype.update as jest.Mock).mockResolvedValue(
        mockUpdateRobot
    );
    (RobotsRepo.prototype.delete as jest.Mock).mockResolvedValue(mockRobot1.id);
};

