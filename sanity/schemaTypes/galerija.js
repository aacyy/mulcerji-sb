export default {
	name: 'galleryImage',
	title: 'Galerija',
	type: 'document',
	fields: [
		{ name: 'title', title: 'Naslov slike', type: 'string' },
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true },
		},
	],
};
