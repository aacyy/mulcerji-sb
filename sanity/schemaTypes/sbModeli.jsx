export default {
	name: 'Modeli',
	type: 'document',
	title: 'Modeli',
	fields: [
		{ name: 'title', type: 'string', title: 'Naslov' },
		{
			name: 'price',
			type: 'string',
			title: 'Cena (samo za referenco)',
		},
		{ name: 'newPrice', type: 'string', title: 'Nova cena' },
		{ name: 'oldPrice', type: 'string', title: 'Stara cena' },
		{ name: 'isDiscounted', type: 'boolean', title: 'Je na popustu?' },
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
		// new fields from sbModels
		{ name: 'modelName', type: 'string', title: 'Ime modela' },
		{ name: 'modelType', type: 'string', title: 'Tip modela' },
		{ name: 'motor', type: 'string', title: 'Moč motorja' },
		{ name: 'domet', type: 'string', title: 'Domet daljinca' },
		{ name: 'kosnja', type: 'string', title: 'Nastavljiva višina košnje' },
		{ name: 'povrsina', type: 'string', title: 'Površina košnje' },
		{ name: 'dimenzije', type: 'string', title: 'Dimenzije (mm)' },
		{ name: 'maxKosnja', type: 'string', title: 'Maksimalni naklon' },
		{ name: 'teza', type: 'string', title: 'Teža stroja' },
	],
};
