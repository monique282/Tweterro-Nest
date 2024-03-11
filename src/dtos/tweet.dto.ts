import { IsNotEmpty, IsString } from 'class-validator';

export class Tweet {
  @IsString()
  @IsNotEmpty({
    message: 'All field are required!',
  })
  username: string;

  @IsString()
  @IsNotEmpty({
    message: 'All field are required!',
  })
  tweet: string;
}
