import {
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsString,
	IsUrl,
	MaxLength,
	MinLength,
} from 'class-validator';
import { CreateUserDTO } from './create-user.dto';

export class CreateUserGoogleDTO extends CreateUserDTO {
	@IsNotEmpty({ message: 'O nome é obrigatório.' })
	@IsString({ message: 'O nome deve ser uma string.' })
	@MinLength(3, { message: 'O nome deve conter pelo menos 3 caracteres.' })
	@MaxLength(128, { message: 'O nome deve conter no máximo 128 caracteres.' })
	name: string;

	@IsNotEmpty({ message: 'O e-mail é obrigatório.' })
	@IsString({ message: 'O e-mail deve ser uma string.' })
	@IsEmail({}, { message: 'O e-mail deve ser válido.' })
	email: string;

	@IsOptional()
	password: string;

	@IsOptional()
	@IsString()
	@IsUrl()
	picture: string;
}
