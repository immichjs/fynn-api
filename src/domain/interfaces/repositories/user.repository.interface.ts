import { CreateUserDTO } from '@core/user/dto/create-user.dto';
import { UpdateUserDTO } from '@core/user/dto/update-user.dto';
import { User } from '@domain/entities/user';

export interface IUserRepository {
	create(data: CreateUserDTO): Promise<User>;
	get(data: Partial<User>): Promise<User>;
	update(id: string, data: UpdateUserDTO): Promise<User>;
	delete(id: string): Promise<void>;
}
