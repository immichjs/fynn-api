import { databaseConfig } from '@config/database.config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infrasctructure/database/database.module';
import { UploadModule } from './core/upload/upload.module';
import { UserModule } from './core/user/user.module';
import { AuthModule } from './core/auth/auth.module';
import { jwtConfig } from '@config/jwt.config';
import { googleConfig } from '@config/google.config';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [databaseConfig, jwtConfig, googleConfig],
		}),
		DatabaseModule,
		UploadModule,
		UserModule,
		AuthModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
