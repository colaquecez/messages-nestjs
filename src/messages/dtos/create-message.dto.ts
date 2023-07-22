import { IsString } from 'class-validator';

class CreateMessageDto {
  @IsString()
  content: string;
}

export { CreateMessageDto };
