import { Injectable } from '@nestjs/common';
import { ConfigManager } from 'nestjs-config-manager';

import * as Joi from '@hapi/joi';

@Injectable()
export class ConfigService extends ConfigManager {
  provideConfigSpec() {
    return {
      GOOGLE_SCOPE: {
        validate: Joi.string(),
        required: true,
      },
      GOOGLE_CLIENT_ID: {
        validate: Joi.string(),
        required: true,
      },
      GOOGLE_CLIENT_SECRET: {
        validate: Joi.string(),
        required: true,
      },
      GOOGLE_CALLBACK_URL: {
        validate: Joi.string(),
        required: false,
        default: 'http://localhost:3000/auth/google/callback',
      },
      SESSION_SECRET: {
        validate: Joi.string(),
        required: true,
      },
    };
  }

  public getGoogleOptions() {
    return {
      clientID: this.get('GOOGLE_CLIENT_ID'),
      clientSecret: this.get('GOOGLE_CLIENT_SECRET'),
      callbackURL: this.get('GOOGLE_CALLBACK_URL'),
      scope: this.get('GOOGLE_SCOPE'),
    };
  }
}
