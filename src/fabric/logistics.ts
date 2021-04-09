import Transport from './interface';

abstract class Logistics {
    
    abstract createTransport(): Transport; // factoryMethod

    planDelivery(): string {
        const transport: Transport = this.createTransport(); // factory method to create a product object
        return `Plan delivery is: ${transport.delivery()}`;
    } 
}

export default Logistics;