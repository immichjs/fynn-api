import { IsNotEmpty, MaxLength } from 'class-validator';

export class LoginDTO {
	@IsNotEmpty()
	email: string;

	@IsNotEmpty()
	@MaxLength(16)
	password: string;
}
