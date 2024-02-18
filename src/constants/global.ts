export const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

export const monthNamesOptions = monthNames.map((month) => ({
	value: month,
	label: month
}));

export const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const dayNamesOptions = dayNames.map((day) => ({
	value: day,
	label: day
}));

export const genderOptions = [
	{
		label: 'Male',
		value: 'male'
	},
	{
		label: 'Female',
		value: 'female'
	},
	{
		label: 'Other',
		value: 'other'
	}
];
export const bloodGroupOptions = [
	{
		label: 'A+',
		value: 'A+'
	},
	{
		label: 'A-',
		value: 'A-'
	},
	{
		label: 'B+',
		value: 'B+'
	},
	{
		label: 'B-',
		value: 'B-'
	},
	{
		label: 'AB+',
		value: 'AB+'
	},
	{
		label: 'AB-',
		value: 'AB-'
	},
	{
		label: 'O+',
		value: 'O+'
	},
	{
		label: 'O-',
		value: 'O-'
	}
];
