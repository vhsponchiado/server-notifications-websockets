import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsGateway } from './notifications/notifications.gateway';
import { NotificationsController } from './notifications/notifications.controller';

@Module({
  imports: [],
  controllers: [AppController, NotificationsController],
  providers: [AppService, NotificationsGateway],
})
export class AppModule {}
