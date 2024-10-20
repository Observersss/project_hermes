import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {User} from "../database/user.model";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[
      SequelizeModule.forFeature([User])
  ]
})
export class UsersModule {}
