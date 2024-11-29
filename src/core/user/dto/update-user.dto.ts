import {
	IsEmail,
	IsNotEmpty,
	IsString,
	Matches,
	MaxLength,
	MinLength,
} from 'class-validator';

export class UpdateUserDTO {
	@IsNotEmpty({ message: 'O nome é obrigatório.' })
	@IsString({ message: 'O nome deve ser uma string.' })
	@MinLength(3, { message: 'O nome deve conter pelo menos 3 caracteres.' })
	@MaxLength(128, { message: 'O nome deve conter no máximo 128 caracteres.' })
	name: string;

	@IsNotEmpty({ message: 'O e-mail é obrigatório.' })
	@IsString({ message: 'O e-mail deve ser uma string.' })
	@IsEmail({}, { message: 'O e-mail deve ser válido.' })
	email: string;

	@IsNotEmpty({ message: 'A senha é obrigatória.' })
	@IsString({ message: 'A senha deve ser uma string.' })
	@MinLength(8, { message: 'A senha deve conter pelo menos 8 caracteres.' })
	@MaxLength(12, { message: 'A senha deve conter no máximo 12 caracteres.' })
	@Matches(/[A-Z]/, {
		message: 'A senha deve conter pelo menos uma letra maiúscula.',
	})
	@Matches(/[a-z]/, {
		message: 'A senha deve conter pelo menos uma letra minúscula.',
	})
	@Matches(/\d/, { message: 'A senha deve conter pelo menos um número.' })
	@Matches(/[\W_]/, {
		message: 'A senha deve conter pelo menos um caractere especial.',
	})
	password: string;
}
