import Transport from "./interface";

class Ship implements Transport {
    delivery(): string {
        return 'I deliver by see';
    }

}

export default Ship;