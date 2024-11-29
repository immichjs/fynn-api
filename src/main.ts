import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { EDateFormat } from '@common/enums/date-format.enum';

import * as moment from 'moment-timezone';
import { TrimPipe } from '@common/pipes/trim.pipe';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableCors({
		origin: '*',
		credentials: true,
	});

	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			whitelist: true,
			forbidUnknownValues: true,
			stopAtFirstError: true,
			validateCustomDecorators: true,
		}),
	);
	app.useGlobalPipes(new TrimPipe());

	Date.prototype.toJSON = () =>
		moment(this).tz('America/Sao_Paulo').format(EDateFormat.ISO_DATE_TIME);

	await app.listen(3000);
}
bootstrap();
