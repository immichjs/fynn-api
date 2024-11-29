export enum EDateFormat {
	// Date only formats
	ISO_DATE = 'YYYY-MM-DD',
	SHORT_DATE = 'MM/DD/YYYY',
	LONG_DATE = 'MMMM D, YYYY',
	FULL_DATE = 'dddd, MMMM D, YYYY',
	COMPACT_DATE = 'YYYYMMDD',
	DOTTED_DATE = 'DD.MM.YYYY',

	// DateTime formats
	ISO_DATE_TIME = 'YYYY-MM-DDTHH:mm:ssZ',
	SHORT_DATE_TIME = 'MM/DD/YYYY HH:mm',
	LONG_DATE_TIME = 'MMMM D, YYYY h:mm A',
	FULL_DATE_TIME = 'dddd, MMMM D, YYYY h:mm A',
	COMPACT_DATE_TIME = 'YYYYMMDDHHmmss',
	DOTTED_DATE_TIME = 'DD.MM.YYYY HH:mm:ss',

	// Time only formats
	ISO_TIME = 'HH:mm:ss',
	SHORT_TIME = 'HH:mm',
	LONG_TIME = 'h:mm A',

	// Weekday formats
	DAY_NAME = 'dddd',
	SHORT_DAY_NAME = 'ddd',
	DAY_NUMBER = 'E', // ISO-8601 day number (1 = Monday, 7 = Sunday)

	// Month formats
	FULL_MONTH = 'MMMM',
	SHORT_MONTH = 'MMM',
	MONTH_NUMBER = 'MM',

	// Year formats
	FULL_YEAR = 'YYYY',
	SHORT_YEAR = 'YY',

	// Custom formats
	FULL_DATE_TIME_WITH_ZONE = 'dddd, MMMM D, YYYY h:mm A ZZ', // Including time zone offset
	DATE_WITH_DAY_SUFFIX = 'MMMM Do, YYYY', // Example: October 22nd, 2024
}
