import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class LoginDTO {
  @IsString()
  @IsNotEmpty({
    message: 'All field are required!',
  })
  username: string;
  @IsUrl()
  @IsNotEmpty({
    message: 'All field are required!',
  })
  avatar: string;
}
