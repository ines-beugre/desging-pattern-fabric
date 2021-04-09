import Transport from "./interface";
import Logistics from "./logistics";
import Ship from "./ship";

class SeeLogistics extends Logistics {
    createTransport(): Transport {
        return new Ship(); 
    }
   
}

export default SeeLogistics;