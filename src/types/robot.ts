export type RobotsStructure = {
    id: string;
    name: string;
    speed: number | null;
    toughness: number | null;
    creationDate: string;
    creationUser: string;
    imageUrl: string;
    isFavorited: boolean;
    editingMode: boolean;
};

export class Robot implements RobotsStructure {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    id: string;
    imageUrl: string;
    creationDate: string;
    isFavorited: boolean;
    editingMode: boolean;

    constructor(
        public name: string,
        public speed: number,
        public toughness: number,
        public creationUser: string
    ) {
        this.imageUrl = `https://robohash.org/${this.name}.png`;
        this.creationDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        this.id = Robot.generateId();
        this.isFavorited = false;
        this.editingMode = false;
    }
}
