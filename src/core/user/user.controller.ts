import {
	Body,
	Controller,
	Delete,
	Inject,
	Param,
	ParseUUIDPipe,
	Put,
} from '@nestjs/common';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from '@domain/entities/user';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
	@Inject() private readonly userService: UserService;

	@Put(':id')
	public async update(
		@Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
		@Body() data: UpdateUserDTO,
	): Promise<User> {
		return this.userService.update(id, data);
	}

	@Delete(':id')
	public async delete(
		@Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
	): Promise<void> {
		return this.userService.delete(id);
	}
}
