import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('client.createUser')
  creatUser(user: any) {
    return this.appService.createClient(user);
  }
  @MessagePattern('client.findAll')
  findAll(): any {
    return this.appService.findAll();
  }
}
