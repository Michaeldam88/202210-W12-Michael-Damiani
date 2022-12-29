import { AddRobots } from "../../components/addRobot/addRobots";
import { RobotsList } from "../../components/list/robotsList";

export function Robots() {
    return (
        <section>
            <h2>Robots</h2>
            <AddRobots />
            <RobotsList/>
        </section>
    );
}
