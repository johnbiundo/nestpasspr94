import { Module } from '@nestjs/common';
import { AccountsModule } from './modules/accounts/accounts.module';
import { ConfigModule } from './shared/config/config.module';

@Module({
  imports: [AccountsModule, ConfigModule],
})
export class AppModule {}
