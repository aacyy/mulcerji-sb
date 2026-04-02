export default {
	name: 'Modeli',
	type: 'document',
	title: 'Modeli',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Naslov (ne moreš spreminjati ;) )',
			readOnly: false,
		},
		{
			name: 'price',
			type: 'string',
			title: 'Cena',
		},
		{
			name: 'image', // 👈 add
			type: 'image',
			title: 'Slika modela',
			options: { hotspot: true },
		},
		{
			name: 'descriptionUp',
			type: 'array', // 👈 change from string to array
			title: 'Opis',
			of: [{ type: 'block' }], // 👈 Portable Text
		},
	],
};
