import { Module } from '@nestjs/common';
import { AdministratorService } from './services/administrator.service';
import { AdministratorController } from './controllers/administrator.controller';

@Module({
  providers: [AdministratorService],
  controllers: [AdministratorController]
})
export class AdministratorModule {}
