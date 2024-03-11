import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDTO } from './dtos/login.dto';
import { TweetDTO } from './dtos/tweet.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Post('sign-up')
  @HttpCode(HttpStatus.OK)
  signUp(@Body() body: LoginDTO) {
    return this.appService.login(body);
  }

  @Get('tweets')
  getTweets() {
    return this.appService.getTweets();
  }

  @Post('tweets')
  createTweer(@Body() body: TweetDTO) {
    try {
      return this.appService.createTweet(body);
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }
}
