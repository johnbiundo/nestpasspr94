// tslint:disable: variable-name
import { Strategy } from 'passport-google-oauth2';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConfigService } from '../../shared/config/config.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super(configService.getGoogleOptions());
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile,
    callback: (error: Error, user: any) => void,
  ) {
    const user = await this.authService.validateOrCreateSocialUser({
      id: profile.sub,
      email: profile.email,
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    callback(null, user);
  }
}
