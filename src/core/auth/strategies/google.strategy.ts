import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(configService: ConfigService) {
		super({
			clientID: configService.get('google.clientId'),
			clientSecret: configService.get('google.clientSecret'),
			callbackURL: configService.get('google.callbackUrl'),
			scope: ['email', 'profile'],
		});
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: any,
		done: VerifyCallback,
	): Promise<any> {
		const { id, name, emails } = profile;

		const user = {
			id,
			email: emails[0].value,
			name: name.givenName + ' ' + name.familyName,
			accessToken,
			picture: profile.photos[0].value,
		};

		done(null, user);
	}
}
