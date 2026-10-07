// All site content lives here. Images go in static/img/ and are referenced as '/img/…'.
// Use url: '#' for placeholders; real URLs open in a new tab.

const ph = (n) => `/img/placeholder/${n}.svg`;

// Homepage promo: images only, 8–12 of them
export const promo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(ph);

export const visuals = [
	{ title: 'Placeholder: interactive map', role: 'Data and map', year: 2025, url: '#', image: ph(2) },
	{ title: 'Placeholder: chart', role: 'Data collection', year: 2025, url: '#', image: ph(1) },
	{ title: 'Placeholder: visual story', role: 'Data', year: 2024, url: '#', image: ph(3) },
	{ title: 'Placeholder: another map', role: 'Map', year: 2024, url: '#', image: ph(7) },
	{ title: 'Placeholder: election tracker', role: 'Chart', year: 2024, url: '#', image: ph(6) },
	{ title: 'Placeholder: weekly chart', role: 'Data and chart', year: 2023, url: '#', image: ph(4) }
];

// text: one sentence on the story and what you built for it
export const pieces = [
	{ title: 'Sun Machine', pub: 'The Economist', year: '[year]', url: '#', image: ph(5), text: 'One sentence on the story and what you built for it.' },
	{ title: 'Placeholder: another article', pub: 'The Economist', year: 2025, url: '#', image: ph(1), text: 'One sentence on the story and what you built for it.' },
	{ title: 'Placeholder: a data story', pub: 'The Economist', year: 2025, url: '#', image: ph(2), text: 'One sentence on the story and what you built for it.' },
	{ title: 'Placeholder: an explainer', pub: 'The Economist', year: 2024, url: '#', image: ph(3), text: 'One sentence on the story and what you built for it.' },
	{ title: 'Placeholder: a piece for Domani', pub: 'Domani', year: 2022, url: '#', image: ph(4), text: 'One sentence on the story and what you built for it.' }
];

export const other = [
	{
		title: 'Placeholder: Triennale Milano',
		where: 'Triennale Milano',
		year: 2025,
		url: '#',
		image: ph(9),
		text: 'Two or three sentences on what you made for the Triennale, your role, and what visitors saw.'
	}
];
