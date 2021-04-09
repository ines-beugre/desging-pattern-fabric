import Transport from "./interface";
import Logistics from "./logistics";
import Truck from "./truck";

class RoadLogistics extends Logistics {
    createTransport(): Transport {
        return new Truck();
    }

    // planDelivery(): string {
    //     return 'Goods delivered by road';
    // }   
    
}

export default RoadLogistics;