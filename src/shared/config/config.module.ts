import { Module, Global } from '@nestjs/common';
import { ConfigManagerModule } from 'nestjs-config-manager';
import { ConfigService } from './config.service';

@Global()
@Module({
  imports: [
    ConfigManagerModule.register({
      envKey: 'NODE_ENV',
      useFile: 'config/development.env',
      allowExtras: true,
    }),
    ConfigModule,
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
