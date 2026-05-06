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
			title: 'Cena (samo za referenco)',
		},
		{
			name: 'newPrice',
			type: 'string',
			title: 'Nova cena',
		},
		{
			name: 'oldPrice',
			type: 'string',
			title: 'Stara cena',
		},
		{
			name: 'isDiscounted',
			type: 'boolean',
			title: 'Popust',
		},
		{
			name: 'image',
			type: 'image',
			title: 'Slika modela',
			options: { hotspot: true },
		},
		{
			name: 'descriptionUp',
			type: 'array',
			title: 'Opis',
			of: [{ type: 'block' }],
		},
	],
};
