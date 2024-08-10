import { Controller, Post, Body } from '@nestjs/common';
import { NotificationsGateway } from './notifications.gateway';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsGateway: NotificationsGateway) {}

  @Post()
  sendNotification(@Body() data: any): void {
    this.notificationsGateway.handleSendNotification(data);
  }
}
