import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDTO } from './dtos/login.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Post('sign-up')
  signUp(@Body() body: LoginDTO) {
    return this.appService.login(body);
  }
}
