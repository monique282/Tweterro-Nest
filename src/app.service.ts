import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { TweetDTO } from './dtos/tweet.dto';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];
  constructor() {
    this.users = [];
    this.tweets = [];
  }
  getHealth(): string {
    return 'Hello World!';
  }

  login(body: any) {
    const { username, avatar } = body;
    return this.users.push(new User(username, avatar));
  }

  createTweet(body: TweetDTO) {
    const { username, tweet } = body;
    const user = this.getUserByUsername(username);
    if (!user) throw new Error('User does not existe!');
    return this.tweets.push(new Tweet(user, tweet));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
