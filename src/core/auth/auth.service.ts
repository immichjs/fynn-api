import { Injectable } from '@nestjs/common';
import { UserNotFoundException } from '@common/exceptions/user-not-found.exception';
import { UserService } from '@core/user/user.service';
import { User } from '@domain/entities/user';
import { Inject, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { SignUpDTO } from './dto/sign-up.dto';
import { IAccessData } from '@domain/interfaces/access-data.interface';
import { LoginDTO } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { GoogleLoginDTO } from './dto/google-login.dto';

@Injectable()
export class AuthService {
	@Inject() private readonly userService: UserService;
	@Inject() private readonly jwtService: JwtService;

	public async signUp(data: SignUpDTO): Promise<IAccessData> {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(data.password, salt);

		const user = await this.userService.create({
			...data,
			password: hashedPassword,
		});

		return this.generateTokens(user);
	}

	public async login(data: LoginDTO) {
		const user = await this.userService.findByEmail(data.email);
		if (!user) {
			throw new UserNotFoundException();
		}

		const validPassword = await bcrypt.compare(data.password, user.password);

		if (!validPassword) {
			throw new UnauthorizedException('Credênciais inválidas.');
		}

		return this.generateTokens(user);
	}

	public async googleLogin(data: GoogleLoginDTO): Promise<any> {
		let user = await this.userService.findByEmail(data.email);

		if (!user) {
			user = await this.userService.createWithGoogle({
				email: data.email,
				name: data.name,
				password: null,
				picture: data.picture,
			});
		}

		return this.generateTokens(user);
	}

	private generateTokens(user: User): IAccessData {
		const payload = {
			sub: user.id,
			email: user.email,
		};

		return {
			accessToken: this.jwtService.sign(payload),
			refreshToken: this.jwtService.sign(payload, {
				expiresIn: '7d',
				issuer: 'refresh',
			}),
		};
	}

	public async refreshToken(refreshToken: string): Promise<IAccessData> {
		try {
			const decoded = this.jwtService.verify(refreshToken, {
				issuer: 'refresh',
			});
			const user = await this.userService.findById(decoded.sub);

			if (!user) {
				throw new UserNotFoundException();
			}

			return this.generateTokens(user);
		} catch (error) {
			throw new UnauthorizedException('Token expirado/inválido,');
		}
	}
}
