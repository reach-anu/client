import { Injectable } from '@nestjs/common';
let users = [];

@Injectable()
export class AppService {
  createClient(user: any): any {
    users.push(user.name);
    return user;
  }

  findAll() {
    return users;
  }
}
