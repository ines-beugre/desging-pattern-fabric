import { Module, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import Logistics from './fabric/logistics';
import RoadLogistics from './fabric/roadLogistics';
import SeeLogistics from './fabric/seeLogistics';

@Module({
  imports: [],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    this.codeClient(new RoadLogistics());
    console.log('');
    this.codeClient(new SeeLogistics());
  }

  codeClient(logistics: Logistics) {
    console.log('I don\'t know what type of transport will be used but it works');
    console.log(logistics.planDelivery());

  }

}
