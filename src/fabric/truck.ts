import Transport from "./interface";

class Truck implements Transport {
    delivery(): string {
       return 'I deliver by road';
    }

}

export default Truck;