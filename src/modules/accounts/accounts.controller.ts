import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleLoginGuard } from '../../common/guards/googleLogin.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AccountsController {
  @UseGuards(AuthGuard('google'))
  @Get('glogin')
  async loginFromGoogle() {
    // (intentionally) never gets called
  }

  @UseGuards(GoogleLoginGuard)
  @Get('/auth/google/callback')
  async googleCallback(@Req() req, @Res() res) {
    res.send('Logged In');
  }
}
