import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TrimPipe implements PipeTransform {
	transform(value) {
		if (typeof value === 'object' && value !== null) {
			Object.keys(value).forEach((key) => {
				if (typeof value[key] === 'string') {
					value[key] = value[key].trim();
				}
			});
		}

		return value;
	}
}
