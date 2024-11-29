import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get('database.host'),
				port: configService.get('database.port'),
				username: configService.get('database.username'),
				password: configService.get('database.password'),
				database: configService.get('database.name'),
				autoLoadEntities: true,
				synchronize: true,
				migrations: ['./migrations'],
				migrationsTableName: 'migrations',
				logging: false,
			}),
			inject: [ConfigService],
		}),
	],
})
export class DatabaseModule {}
