import { HttpException, HttpStatus } from '@nestjs/common';

export class UserConflictException extends HttpException {
	constructor() {
		super(`Usuário já cadastrado.`, HttpStatus.CONFLICT);
	}
}
