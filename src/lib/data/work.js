// All site content lives here. Images go in static/assets/ and are referenced as '/assets/…'.
// Use url: '#' for placeholders; real URLs open in a new tab.

const img = (name) => `/assets/work/${name}.jpg`;
const placeholder = (n) => `/assets/placeholder/${n}.svg`;
const E = 'https://www.economist.com';

// Homepage promo: images only, 8–12 of them
export const promo = [
	'2024-is-the-biggest-election-year-in-history',
	'solar-power-is-going-to-be-huge',
	'americans-love-affair-with-big-cars-is-killing-them',
	'how-motherhood-hurts-careers',
	'how-ukraines-virtually-non-existent-navy-sank-russias-flagsh',
	'israel-gaza-map-hamas-war',
	'the-energy-transition-will-be-much-cheaper-than-you-think',
	'which-countries-have-the-most-educated-politicians',
	'how-india-prime-minister-sweet-talks-the-nation',
	'world-leaders-are-getting-older-except-in-democracies'
].map(img);

// Single charts and maps, each linking to the story it ran in
const v = (name) => `/assets/visuals/${name}`;

export const visuals = [
	{ image: v('economist-2026-07-30-lk24-2.jpg'), title: 'The Big Mac index at 40', pub: 'The Economist', year: 2026, url: 'https://www.economist.com/interactive/briefing/2026/07/30/the-big-mac-index-at-40' },
	{ image: v('economist-2026-07-30-lk24-1.jpg'), title: 'The Big Mac index at 40', pub: 'The Economist', year: 2026, url: 'https://www.economist.com/interactive/briefing/2026/07/30/the-big-mac-index-at-40' },
	{ image: v('economist-2026-07-30-lk24-0.jpg'), title: 'The Big Mac index at 40', pub: 'The Economist', year: 2026, url: 'https://www.economist.com/interactive/briefing/2026/07/30/the-big-mac-index-at-40' },
	{ image: v('economist-2026-06-22-6s2r-0.jpg'), title: 'Italy’s prime minister has seen off three British ones', pub: 'The Economist', year: 2026, url: 'https://bsky.app/profile/fteoldi.bsky.social/post/3mout4ed36s2r' },
	{ image: v('economist-2026-04-10-hc2w-1.jpg'), title: 'A giant succession wave is coming for family businesses', pub: 'The Economist', year: 2026, url: 'https://www.economist.com/interactive/business/2026/04/09/a-giant-succession-wave-is-coming-for-family-businesses' },
	{ image: v('economist-2026-04-10-hc2w-0.jpg'), title: 'A giant succession wave is coming for family businesses', pub: 'The Economist', year: 2026, url: 'https://www.economist.com/interactive/business/2026/04/09/a-giant-succession-wave-is-coming-for-family-businesses' },
	{ image: v('economist-2026-04-04-y22u-0.jpg'), title: 'The number of Catholic saints is climbing', pub: 'The Economist', year: 2026, url: 'https://www.economist.com/culture/2026/04/01/the-number-of-catholic-saints-is-climbing-heavenwards' },
	{ image: v('economist-2026-02-12-gc2o-0.jpg'), title: 'Inside Epstein’s network', pub: 'The Economist', year: 2026, url: 'https://www.economist.com/interactive/international/2026/02/12/inside-epsteins-network' },
	{ image: v('economist-2026-02-05-sc2r-1.jpg'), title: 'The world is more equal than you think', pub: 'The Economist', year: 2026, url: 'https://www.economist.com/graphic-detail/2026/02/03/the-world-is-more-equal-than-you-think' },
	{ image: v('economist-2026-02-05-sc2r-0.jpg'), title: 'The world is more equal than you think', pub: 'The Economist', year: 2026, url: 'https://www.economist.com/graphic-detail/2026/02/03/the-world-is-more-equal-than-you-think' },
	{ image: v('economist-2026-01-23-zk2z-0.jpg'), title: 'How an Economist cover is made, 2025', pub: 'The Economist', year: 2026, url: 'https://www.economist.com/interactive/2025-cover-story' },
	{ image: v('economist-2025-11-06-ec2n-0.jpg'), title: 'Tracking America’s strikes on drug boats', pub: 'The Economist', year: 2025, url: 'https://www.economist.com/interactive/the-americas/2025/11/05/tracking-american-drug-boat-strikes-off-venezuela-coast' },
	{ image: v('economist-2025-10-28-nc2c-0.jpg'), title: 'Hurricane Melissa is one of the strongest storms ever recorded', pub: 'The Economist', year: 2025, url: 'https://www.economist.com/interactive/the-americas/2025/10/28/hurricane-melissa-is-one-of-the-strongest-storms-ever-recorded' },
	{ image: v('economist-2025-07-10-pk2m-0.jpg'), title: 'Russia’s losses in Ukraine', pub: 'The Economist', year: 2025, url: 'https://bsky.app/profile/fteoldi.bsky.social/post/3ltlv67stpk2m' },
	{ image: v('economist-2025-07-10-bk2m-0.jpg'), title: 'Russia’s losses in Ukraine', pub: 'The Economist', year: 2025, url: 'https://bsky.app/profile/fteoldi.bsky.social/post/3ltlv6e2tbk2m' },
	{ image: v('economist-2025-04-24-m22w-0.jpg'), title: 'The coming struggle to choose the next pope', pub: 'The Economist', year: 2025, url: 'https://www.economist.com/international/2025/04/21/the-coming-struggle-to-choose-the-next-pope' },
	{ image: v('economist-2025-04-04-rs2y-0.jpg'), title: 'Trump approval tracker: the economy', pub: 'The Economist', year: 2025, url: 'https://www.economist.com/interactive/trump-approval-tracker/economy' },
	{ image: v('economist-2025-01-27-lc2r-0.jpg'), title: 'How an Economist cover is made', pub: 'The Economist', year: 2025, url: 'https://www.economist.com/interactive/2024-cover-story' },
	{ image: v('economist-2024-09-02-xe2c-0.jpg'), title: 'America’s love affair with big cars is killing them', pub: 'The Economist', year: 2024, url: 'https://www.economist.com/interactive/united-states/2024/08/31/americans-love-affair-with-big-cars-is-killing-them' },
	{ image: v('domani-713Rd.png'), title: 'Ci sono miliardi di ragioni per non toccare il tetto al contante in Italia', pub: 'Domani', year: 2022, url: 'https://www.editorialedomani.it/economia/dati/ci-sono-miliardi-di-ragioni-per-non-toccare-il-tetto-al-contante-in-italia-ssa9xwzk' },
	{ image: v('domani-77IZS.png'), title: 'Le donne continuano a restare lontane dai vertici delle istituzioni', pub: 'Domani', year: 2022, url: 'https://www.editorialedomani.it/economia/dati/le-donne-continuano-a-restare-lontane-dai-vertici-delle-istituzioni-dex7wkdx' },
	{ image: v('domani-4ijnf.png'), title: 'Effetto Falkland per Emmanuel Macron', pub: 'Domani', year: 2022, url: 'https://www.editorialedomani.it/economia/dati/effetto-falkland-per-emmanuel-macron-bwbq5gm6' },
	{ image: v('domani-0ZFF5.png'), title: 'Cosa rimane dell’Afghanistan dopo la guerra dei vent’anni', pub: 'Domani', year: 2021, url: 'https://www.editorialedomani.it/politica/mondo/afghanistan-cosa-rimane-dopo-guerra-venti-anni-talebani-tgbtuvp0' },
	{ image: v('domani-FLhWK.png'), title: 'La didattica a distanza dipende dalla regione, non dai contagi', pub: 'Domani', year: 2021, url: 'https://www.editorialedomani.it/economia/dati/la-didattica-a-distanza-dipende-dalla-regione-non-dai-contagi-il79zg2d' },
	{ image: v('domani-474nJ.png'), title: 'Ecco perché oltre un terzo delle scuole potrebbe restare aperto', pub: 'Domani', year: 2021, url: 'https://www.editorialedomani.it/economia/dati/ecco-perch-oltre-un-terzo-delle-scuole-potrebbe-restare-aperto-k7rmojcj' },
	{ image: v('domani-2szll.png'), title: 'Ecco perché oltre un terzo delle scuole potrebbe restare aperto', pub: 'Domani', year: 2021, url: 'https://www.editorialedomani.it/economia/dati/ecco-perch-oltre-un-terzo-delle-scuole-potrebbe-restare-aperto-k7rmojcj' },
	{ image: v('domani-9WBjE.png'), title: 'Gli altri dati della pandemia', pub: 'Domani', year: 2020, url: 'https://www.editorialedomani.it/economia/dati/gli-altri-dati-della-pandemia-qjb6zctn' },
	{ image: v('domani-7I4dK.png'), title: 'Oltre il Mediterraneo: le rotte dei migranti', pub: 'Domani', year: 2020, url: 'https://www.editorialedomani.it/economia/dati/oltre-il-mediterraneo-le-tratte-dei-migranti-plpvy0tj' },
	{ image: v('domani-0Wr71.png'), title: 'Oltre il Mediterraneo: le rotte dei migranti', pub: 'Domani', year: 2020, url: 'https://www.editorialedomani.it/economia/dati/oltre-il-mediterraneo-le-tratte-dei-migranti-plpvy0tj' },
	{ image: v('domani-1p4xQ.png'), title: 'Un cimitero chiamato  Mediterraneo', pub: 'Domani', year: 2020, url: 'https://www.editorialedomani.it/economia/dati/un-cimitero-chiamato-mediterrneo-h25srtfv' },
	{ image: v('domani-7h980.png'), title: 'Tutto quello che c’è da sapere sulle elezioni presidenziali negli Stati Uniti', pub: 'Domani', year: 2020, url: 'https://www.editorialedomani.it/economia/dati/elezioni-presidenziali-usa-bmermmlr' },
	{ image: v('domani-4qS7G.png'), title: 'Tutto quello che c’è da sapere sulle elezioni presidenziali negli Stati Uniti', pub: 'Domani', year: 2020, url: 'https://www.editorialedomani.it/economia/dati/elezioni-presidenziali-usa-bmermmlr' },
	{ image: v('domani-2GKhV.png'), title: 'Tutto quello che c’è da sapere sulle elezioni presidenziali negli Stati Uniti', pub: 'Domani', year: 2020, url: 'https://www.editorialedomani.it/economia/dati/elezioni-presidenziali-usa-bmermmlr' }
];

// text: one sentence on the story and what you built (for now it's the format from the work log)
export const pieces = [
	{ title: 'A year of our visual journalism', year: 2024, url: `${E}/interactive/christmas-specials/2024/12/19/a-year-of-our-visual-journalism`, image: img('a-year-of-our-visual-journalism'), text: 'Year in review.' },
	{ title: 'Germany’s 2025 election: polls and forecast', year: 2024, url: `${E}/interactive/2025-german-election`, image: img('2025-german-election'), text: 'Election tracker and forecast.' },
	{ title: 'World leaders are getting older, except in democracies', year: 2024, url: `${E}/interactive/the-world-ahead/2024/11/18/world-leaders-are-getting-older-except-in-democracies`, image: img('world-leaders-are-getting-older-except-in-democracies'), text: 'Scroller and charts.' },
	{ title: 'What would it cost to kill coal?', year: 2024, url: `${E}/interactive/the-economist-explains/2024/11/15/what-would-it-cost-to-kill-coal`, image: img('what-would-it-cost-to-kill-coal'), text: 'Long image header and scroller.' },
	{ title: 'Which countries have the most educated politicians?', year: 2024, url: `${E}/interactive/graphic-detail/2024/11/14/which-countries-have-the-most-educated-politicians`, image: img('which-countries-have-the-most-educated-politicians'), text: 'Charts.' },
	{ title: 'The energy transition will be much cheaper than you think', year: 2024, url: `${E}/interactive/briefing/2024/11/14/the-energy-transition-will-be-much-cheaper-than-you-think`, image: img('the-energy-transition-will-be-much-cheaper-than-you-think'), text: 'Video header.' },
	{ title: 'When politics is about hating the other side, democracy suffers', year: 2024, url: `${E}/interactive/essay/2024/10/31/when-politics-is-about-hating-the-other-side-democracy-suffers`, image: img('when-politics-is-about-hating-the-other-side-democracy-suffe'), text: 'Chart and header.' },
	{ title: 'Democrats struggle to limit the loss of black voters in Georgia', year: 2024, url: `${E}/interactive/united-states/2024/10/17/democrats-struggle-to-limit-the-loss-of-black-voters-in-georgia`, image: img('democrats-struggle-to-limit-the-loss-of-black-voters-in-geor'), text: 'Scroller and charts.' },
	{ title: 'How to escape from China to America', year: 2024, url: `${E}/interactive/china/2024/10/08/how-to-escape-from-china-to-america`, image: img('how-to-escape-from-china-to-america'), text: 'Video, animated map and header.' },
	{ title: 'Mapping the war in Lebanon', year: 2024, url: `${E}/interactive/middle-east-and-africa/israel-lebanon-hizbullah-iran-war-strikes-map-tracker`, image: img('israel-lebanon-hizbullah-iran-war-strikes-map-tracker'), text: 'Tracker charts.' },
	{ title: 'What supertall skyscrapers reveal about the countries that build them', year: 2024, url: `${E}/interactive/culture/2024/09/20/what-supertall-skyscrapers-reveal-about-countries-that-build-them`, image: img('what-supertall-skyscrapers-reveal-about-countries-that-build'), text: 'Interactive chart and header.' },
	{ title: 'America’s love affair with big cars is killing them', year: 2024, url: `${E}/interactive/united-states/2024/08/31/americans-love-affair-with-big-cars-is-killing-them`, image: img('americans-love-affair-with-big-cars-is-killing-them'), text: 'Scroller and charts.' },
	{ title: 'Can Donald Trump win back suburban voters?', year: 2024, url: `${E}/interactive/united-states/2024/07/26/can-donald-trump-win-back-suburban-voters`, image: img('can-donald-trump-win-back-suburban-voters'), text: 'Scroller and charts.' },
	{ title: 'Solar power is going to be huge', year: 2024, url: `${E}/interactive/essay/2024/06/20/solar-power-is-going-to-be-huge`, image: img('solar-power-is-going-to-be-huge'), text: 'Scroller, charts and video header.' },
	{ title: 'India’s election results', year: 2024, url: `${E}/interactive/india-election-results-2024-modi-gandhi`, image: img('india-election-results-2024-modi-gandhi'), text: 'Election results.' },
	{ title: 'Rural white voters in Wisconsin could decide America’s election', year: 2024, url: `${E}/interactive/united-states/2024/05/22/rural-white-voters-in-wisconsin-could-decide-americas-election`, image: img('rural-white-voters-in-wisconsin-could-decide-americas-electi'), text: 'Scroller and charts.' },
	{ title: 'How India’s prime minister sweet-talks the nation', year: 2024, url: `${E}/interactive/asia/2024/04/17/how-india-prime-minister-sweet-talks-the-nation`, image: img('how-india-prime-minister-sweet-talks-the-nation'), text: 'Grids and scroller.' },
	{ title: 'Antarctica, Earth’s largest refrigerator, is defrosting', year: 2024, url: `${E}/interactive/science-and-technology/2024/03/27/antarctica-earths-largest-refrigerator-is-defrosting`, image: img('antarctica-earths-largest-refrigerator-is-defrosting'), text: 'Video header, chart and images.' },
	{ title: 'Joe Biden’s weakness among Latinos threatens his re-election', year: 2024, url: `${E}/interactive/united-states/2024/03/19/joe-bidens-weakness-among-latinos-threatens-his-re-election`, image: img('joe-bidens-weakness-among-latinos-threatens-his-re-election'), text: 'Scroller and charts.' },
	{ title: 'Cheap racing drones offer precision warfare at scale', year: 2024, url: `${E}/interactive/science-and-technology/2024/02/05/cheap-racing-drones-offer-precision-warfare-at-scale`, image: img('cheap-racing-drones-offer-precision-warfare-at-scale'), text: 'Video header and chart.' },
	{ title: 'How motherhood hurts careers', year: 2024, url: `${E}/interactive/graphic-detail/2024/01/30/how-motherhood-hurts-careers`, image: img('how-motherhood-hurts-careers'), text: 'Scroller and charts.' },
	{ title: 'On safari in the world’s most dangerous county', year: 2023, url: `${E}/interactive/christmas-specials/2023/12/20/on-safari-in-the-worlds-most-dangerous-county`, image: img('on-safari-in-the-worlds-most-dangerous-county'), text: 'Multimedia and video.' },
	{ title: 'How five Ukrainian cities are coping despite Putin’s war', year: 2023, url: `${E}/interactive/christmas-specials/2023/12/20/how-five-ukrainian-cities-are-coping-despite-putins-war`, image: img('how-five-ukrainian-cities-are-coping-despite-putins-war'), text: 'Multimedia and video.' },
	{ title: 'Why is Israel using so many dumb bombs in Gaza?', year: 2023, url: `${E}/interactive/middle-east-and-africa/2023/12/16/why-is-israel-using-so-many-dumb-bombs-in-gaza`, image: img('why-is-israel-using-so-many-dumb-bombs-in-gaza'), text: 'Video header and films.' },
	{ title: 'The Extremely Large Telescope will transform astronomy', year: 2023, url: `${E}/interactive/science-and-technology/2023/12/06/the-extremely-telescope-will-trasform-astronomy`, image: img('the-extremely-telescope-will-trasform-astronomy'), text: 'Video header and chart.' },
	{ title: 'Who are the Palestinians in Israel’s prisons?', year: 2023, url: `${E}/interactive/the-economist-explains/2023/11/27/who-are-the-palestinians-in-israels-prisons`, image: img('who-are-the-palestinians-in-israels-prisons'), text: 'Video header.' },
	{ title: '2024 is the biggest election year in history', year: 2023, url: `${E}/interactive/the-world-ahead/2023/11/13/2024-is-the-biggest-election-year-in-history`, image: img('2024-is-the-biggest-election-year-in-history'), text: 'Bubble scroller.' },
	{ title: 'Why Gaza’s refugee camps are so vulnerable', year: 2023, url: `${E}/interactive/the-economist-explains/2023/11/02/why-gazas-refugee-camps-vulnerable-jabalia`, image: img('why-gazas-refugee-camps-vulnerable-jabalia'), text: 'Video header, annotations and sliders.' },
	{ title: 'What evidence reveals about the Gaza hospital blast’s source', year: 2023, url: `${E}/interactive/the-economist-explains/2023/10/20/what-evidence-reveals-about-the-gaza-hospital-blasts-source`, image: img('what-evidence-reveals-about-the-gaza-hospital-blasts-source'), text: 'Video header, table and annotations.' },
	{ title: 'Mapping Israel’s war in Gaza', year: 2023, url: `${E}/interactive/briefing/2023/10/17/israel-gaza-map-hamas-war`, image: img('israel-gaza-map-hamas-war'), text: 'Maps, sliders and charts.' },
	{ title: 'The Baghdad job: who was behind history’s biggest bank heist?', year: 2023, url: `${E}/interactive/1843/2023/07/27/the-baghdad-job-who-was-behind-historys-biggest-bank-heist`, image: img('the-baghdad-job-who-was-behind-historys-biggest-bank-heist'), text: 'Video.' },
	{ title: 'How Ukraine’s virtually non-existent navy sank Russia’s flagship', year: 2023, url: `${E}/interactive/1843/2023/07/27/how-ukraines-virtually-non-existent-navy-sank-russias-flagship`, image: img('how-ukraines-virtually-non-existent-navy-sank-russias-flagsh'), text: 'Multimedia scroller and maps.' },
	{ title: 'Data on air bases suggest a Chinese invasion of Taiwan may not be imminent', year: 2023, url: `${E}/interactive/graphic-detail/2023/07/27/data-on-air-bases-suggest-a-chinese-invasion-of-taiwan-may-not-be-imminent`, image: img('data-on-air-bases-suggest-a-chinese-invasion-of-taiwan-may-n'), text: 'Satellite images.' },
	{ title: 'The surprising upside of climate migration', year: 2023, url: `${E}/interactive/briefing/2023/07/01/the-surprising-upside-of-climate-migration`, image: img('the-surprising-upside-of-climate-migration'), text: 'Map scroller.' },
	{ title: 'Hollywood is losing the battle for China', year: 2023, url: `${E}/interactive/2023/04/29/hollywood-is-losing-the-battle-for-china`, image: img('hollywood-is-losing-the-battle-for-china'), text: 'Multimedia and data interactive.' }
].map((p) => ({ pub: 'The Economist', ...p }));

export const other = [
	{
		title: 'Placeholder: Triennale Milano',
		where: 'Triennale Milano',
		year: 2025,
		url: '#',
		image: placeholder(9),
		text: 'Two or three sentences on what you made for the Triennale, your role, and what visitors saw.'
	}
];
