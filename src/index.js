const bannerContainer = document.getElementById('bannerContainer');

const images = [
	'https://inside-ua.com/files/places/rls-duha-1.500x625.webp?3bfbfdf4945f51d3b908367369405df3',
	'https://inside-ua.com/files/places/rls-duha-4.500x625.webp?7e68966b4ec912d5ee38934523824157',
	'https://inside-ua.com/files/places/blahovischenskyikostel-klevan-3.500x625.webp?3b1f86ef08c6356fed2d3bb8a31bd40d',
	'https://inside-ua.com/files/places/prypiatskyi-vantazhnyi-port-1.500x625.webp?e8c313181bdd0000e5cf70556635bdd5',
];

const firstRoll = [
	{
		top: 'Фортеці, замки, палаци',
		lingContent: 'Тараканівський форт',
		location: 'Тараканів',
		link: '#',
		bgUrl:
			'https://inside-ua.com/files/places/tarakanivskyi-fort-7.500x625.webp?e36dd62b7ffa265f25681c98b1e017b1',
	},
	{
		top: 'Кар`єри',
		lingContent: 'Білі гори',
		location: 'Рівне',
		link: '#',
		bgUrl:
			'https://inside-ua.com/files/places/bili-hory-1.500x625.webp?6c8168d8d3dfc6031c5188304cb547dd',
	},
];
const secondRoll = [
	{
		top: 'Природні об`єкти',
		lingContent: 'Тунель кохання',
		location: 'Клевань',
		link: '#',
		bgUrl:
			'https://inside-ua.com/files/places/klevan-love-01.500x625.webp?a2c36fa70f335ca9f9064d01ee5b948e',
	},
	{
		top: 'Церкви, костели, монастирі',
		lingContent: 'Благовіщенський костел',
		location: 'Клевань',
		link: '#',
		bgUrl:
			'https://inside-ua.com/files/places/blahovischenskyikostel-klevan-3.500x625.webp?3b1f86ef08c6356fed2d3bb8a31bd40d',
	},
];
const thirdRoll = [
	{
		top: 'Фортеці, замки, палаци',
		lingContent: 'Дубенський замок',
		location: 'Дубно',
		link: '#',
		bgUrl:
			'https://inside-ua.com/files/places/dubenskyi-zamok-1.500x625.webp?58ebb1ee454ebd855177c92ff8d9eb26',
	},
	{
		top: 'Озера',
		lingContent: 'Голубі озера',
		location: 'Сарненський район',
		link: '#',
		bgUrl: 'https://itvmg.com/img/20220622_5173.png',
	},
];

function createBanner(_top, _linkContent, _link, _location, bgUrl) {
	const banner = document.createElement('div');
	banner.className = 'banner_imageItem';
	const inner = document.createElement('div');
	inner.className = 'banner_inner';
	banner.style.backgroundImage = `url("${bgUrl}")`;

	const top = document.createElement('h2');
	top.innerText = _top;
	top.classList = 'banner_top';
	const link = document.createElement('a');
	link.innerText = _linkContent;
	link.href = _link;
	link.className = 'banner_title';
	const location = document.createElement('p');
	location.innerText = _location;
	location.classList = 'banner_location';

	inner.appendChild(top);
	inner.appendChild(link);
	inner.appendChild(location);

	banner.appendChild(inner);

	return banner;
}
function clearBanner() {
	bannerContainer.innerHTML = '';
	const logo = document.createElement('h1');
	logo.innerText = 'rivne';
	logo.className = 'banner_logo';
	bannerContainer.appendChild(logo);
}
const feedbackContainer = document.getElementById('feedbackContainer');
function createFeedbackCard(_imgUrl, _title, _stars) {
	const container = document.createElement('div');
	container.className = 'feedback_card_container';

	const img = document.createElement('img');
	img.src = _imgUrl;
	img.alt = 'fbimg';
	img.className = 'fcc_img';
	container.appendChild(img);

	const content = document.createElement('div');
	content.className = 'fcc_content';

	const title = document.createElement('h2');
	title.innerText = _title;
	title.className = 'fcc_title';
	content.appendChild(title);

	const starbox = document.createElement('div');
	starbox.className = 'fcc_star_box';

	const unstarred = 6 - _stars;
	Array.from({ length: _stars }).forEach(() => {
		const star = document.createElement('i');
		star.className = 'fa-solid fa-star star_selected';
		starbox.appendChild(star);
	});
	Array.from({ length: unstarred }).forEach(() => {
		const star = document.createElement('i');
		star.className = 'fa-solid fa-star';
		starbox.appendChild(star);
	});

	content.appendChild(starbox);
	container.appendChild(content);
	return container;
}

[getRandom(firstRoll), getRandom(secondRoll), getRandom(thirdRoll)].forEach(
	(f) => {
		bannerContainer.appendChild(
			createBanner(f.top, f.lingContent, f.link, f.location, f.bgUrl)
		);
	}
);

setInterval(() => {
	clearBanner();
	[getRandom(firstRoll), getRandom(secondRoll), getRandom(thirdRoll)].forEach(
		(f) => {
			bannerContainer.appendChild(
				createBanner(f.top, f.lingContent, f.link, f.location, f.bgUrl)
			);
		}
	);
}, 10000);

const feedback_js = [
	createFeedbackCard(
		'https://inside-ua.com/files/places/palats-brunytskykh-3.500x625.webp?d3cb2dbac82506437a9b21150d9e5964',
		'Тунель кохання',
		6
	),
	createFeedbackCard(
		'https://inside-ua.com/files/places/palats-brunytskykh-3.500x625.webp?d3cb2dbac82506437a9b21150d9e5964',
		'Соколині гори',
		3
	),
	createFeedbackCard(
		'https://inside-ua.com/files/places/palats-brunytskykh-3.500x625.webp?d3cb2dbac82506437a9b21150d9e5964',
		'Тараканівсський форд',
		5
	),
	createFeedbackCard(
		'https://inside-ua.com/files/places/palats-brunytskykh-3.500x625.webp?d3cb2dbac82506437a9b21150d9e5964',
		'Біле озеро',
		4
	),
	createFeedbackCard(
		'https://inside-ua.com/files/places/palats-brunytskykh-3.500x625.webp?d3cb2dbac82506437a9b21150d9e5964',
		'Зіньків камінь',
		3
	),
];

feedback_js.forEach((f) => {
	feedbackContainer.appendChild(f);
});
