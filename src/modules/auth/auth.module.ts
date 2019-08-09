import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './session.serializer';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [
    PassportModule.register({
      authType: 'reauthenticate',
      prompt: 'select_account',
    }),
  ],
  providers: [AuthService, GoogleStrategy, SessionSerializer],
  exports: [AuthService, PassportModule],
})
export class AuthModule {}
