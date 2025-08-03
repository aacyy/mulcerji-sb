export default {
	name: 'Modeli',
	type: 'document',
	title: 'Modeli',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Naslov (ne moreš spreminjati ;) )',
			readOnly: true,
		},

		{
			name: 'price',
			type: 'string',
			title: 'Cena',
		},
		{
			name: 'descriptionUp',
			type: 'string',
			title: 'Splošni opis',
		},
		{
			name: 'descriptionDown',
			type: 'string',
			title: 'Tehnični opis',
		},
	],
};
