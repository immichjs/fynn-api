import {
	Body,
	Controller,
	Get,
	Inject,
	Post,
	Req,
	UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/sign-up.dto';
import { IAccessData } from '@domain/interfaces/access-data.interface';
import { LoginDTO } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
	@Inject() private readonly authService: AuthService;

	@Post('signup')
	public async signUp(@Body() data: SignUpDTO): Promise<IAccessData> {
		return this.authService.signUp(data);
	}

	@Post('login')
	public async login(@Body() data: LoginDTO): Promise<IAccessData> {
		return this.authService.login(data);
	}

	@Post('refresh-token')
	public async refreshToken(
		@Body('refreshToken') refreshToken: string,
	): Promise<IAccessData> {
		return this.authService.refreshToken(refreshToken);
	}

	@Get('google/login')
	@UseGuards(AuthGuard('google'))
	public async googleAuth() {}

	@Get('google/callback')
	@UseGuards(AuthGuard('google'))
	public async googleAuthRedirect(@Req() req) {
		return this.authService.googleLogin(req.user);
	}
}
