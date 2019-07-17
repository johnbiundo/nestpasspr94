import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateOrCreateSocialUser(profile): Promise<any> {
    return profile;
  }
}
