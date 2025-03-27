import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';

const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/nest-tutorial';

@Module({
  imports: [TasksModule, MongooseModule.forRoot(MONGO_URI)],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
