import { HttpException, HttpStatus } from '@nestjs/common';

export class UserUnauthorizedException extends HttpException {
	constructor() {
		super('Usuário não autorizado a realizar esta ação.', HttpStatus.FORBIDDEN);
	}
}
