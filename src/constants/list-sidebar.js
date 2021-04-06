import {
	faCartArrowDown,
	faRandom,
	faTools,
	faGamepad,
	faSyncAlt,
	faNewspaper,
	faShieldAlt,
	faEllipsisH,
	faHome,
	faBug,
} from '@fortawesome/free-solid-svg-icons'
import { faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
export const ListSidebarItem = [
	{
		id: 0,
		title: 'Home',
		icon: faHome,
		content: 'home',
		child: [],
		href: '/home',
	},
	{
		id: 1,
		title: 'Buy ARI',
		icon: faCartArrowDown,
		child: [
			{
				id: '1',
				title: 'Buy on Pancake',
				href: '/buy-on-pancake',
				content: 'buy-ari',
			},
			{
				id: '2',
				title: 'ARI Live chart',
				href: '/ari-live-chart',
				content: 'buy-ari',
			},
			{
				id: '3',
				title: 'DEX Aggregator',
				href: '/dex-aggregator',
				content: 'buy-ari',
			},
		],
		content: 'buy-ari',
	},
	{
		id: 2,
		title: 'Swap',
		icon: faRandom,
		child: [
			{
				id: '1',
				title: 'ARI DEX',
				href: '/ari-dex',
				content: 'swap',
			},
			{
				id: '2',
				title: 'Farm Aggregator',
				href: '/farm-aggregator',
				content: 'swap',
			},
			{
				id: '3',
				title: 'Liquidity',
				href: '/liquidity',
				content: 'swap',
			},
			{
				id: '4',
				title: 'Retirement Vault',
				href: '/retirement-vault',
				content: 'swap',
			},
		],
		content: 'swap',
	},
	{
		id: 3,
		title: 'Tool',
		icon: faTools,
		child: [
			{
				id: '1',
				title: 'BSC Token analysis',
				href: '/bsc-token-anylysis',
				content: 'tools',
			},
			{
				id: '2',
				title: 'Whale Tracker',
				href: '/whale-tracker',
				content: 'tools',
			},
			{
				id: '3',
				title: 'Trading bots',
				href: '/trading-bots',
				content: 'tools',
			},
		],
		content: 'tools',
	},
	{
		id: 4,
		title: 'Game',
		icon: faGamepad,
		child: [
			{
				id: '1',
				title: 'Air drop',
				href: '/air-drop',
				content: 'game',
			},
			{
				id: '2',
				title: 'Raffles',
				href: '/raffles',
				content: 'game',
			},
			{
				id: '3',
				title: 'Lottery',
				href: '/lottery',
				content: 'game',
			},
		],
		content: 'game',
	},
	{
		id: 5,
		title: 'Referral',
		icon: faSyncAlt,
		child: [],
		content: 'referral',
		href: '/referral',
	},
	{
		id: 6,
		title: 'News',
		icon: faNewspaper,
		child: [],
		content: 'news',
		href: '/news',
	},
	{
		id: 7,
		title: 'Bug Bounty Programs',
		icon: faBug,
		child: [],
		content: 'bug-bounty',
		extra: '(On Going)',
		href: '/bug-bounty',
	},
	{
		id: 8,
		title: 'Audit Reports',
		icon: faShieldAlt,
		child: [],
		content: 'audit-reports',
		href: '/audit-reports',
	},
	{
		id: 9,
		title: 'More',
		icon: faEllipsisH,
		child: [
			// {
			// 	id: '1',
			// 	title: 'Github',
			// 	icon: faGithub,
			// 	href: '/github',
			// },
			{
				id: '2',
				title: 'Docs',
				icon: faFile,
				href: 'https://arise-finance.medium.com/',
				external: true,
			},
			// {
			// 	id: '3',
			// 	title: 'FAQ',
			// 	icon: faQuestionCircle,
			// 	href: '/faq',
			// },
			{
				id: '4',
				title: 'Telegram',
				icon: faTelegramPlane,
				href: 'https://t.me/AriseFinance',
				external: true,
			},
			{
				id: '5',
				title: 'Twitter',
				icon: faTwitter,
				href: 'https://twitter.com/arisefinance',
				external: true,
			},
		],
		content: 'more',
	},
]
export const listRoadmap = [
	{
		status: true,
		date: '1/4',
		title: 'Airdrop for Contributors ',
		content:
			'For our first 2,000 valid participants. Details will be announced soon on our Twitter',
	},
	{
		status: false,
		date: '7/4-10/4',
		title: ' Estimated Arise Pre-sale',
		content: 'Join our telegram group to see more information ',
	},
	{
		status: false,
		date: '10/4',
		title: 'Pancake Listing & Marketing Campaign ',
		content: 'Partners with Influencers, Youtubers, AMAs, and more',
	},
	{
		status: 'not-yet',
		date: '15/4',
		title: 'Coingecko & Coinmarketcap Listing ',
		content: '',
	},
	{
		status: 'not-yet',
		date: '20/4',
		title: 'Launch the first crypto game using ARI token & daily ARI airdrop event',
		content: '',
	},
	{
		status: 'not-yet',
		date: '30/4',
		title: 'Launch Farm & Retirement Vault',
		content: '',
	},
	{
		status: 'not-yet',
		date: 'May',
		title: 'Launch BSC Chart Tools & NFTs farming',
		content: '',
	},
	{
		status: 'not-yet',
		date: 'June',
		title: 'Launch BSC DEX Tools & Defi Aggregation',
		content: '',
	},
]
export const listTokenDetail = [
	{
		color: '#E05C53',
		title: 'Presale',
	},
	{
		color: '#CB9801',
		title: 'Liquidity/ Listing',
	},
	{
		color: '#513C84',
		title: 'Marketing, Partnership & Development',
	},
	{
		color: '#0070C0',
		title: 'Team',
	},
	{
		color: '#00B050',
		title: 'Lottery & Airdrop',
	},
	{
		color: '#5BCBCC',
		title: 'Vault & Liquidity fund',
	},
	{
		color: '#842F74',
		title: 'Marketing/Advisor/Partnership',
	},
]
export const ListUsage = [
	{
		color: '#E05C53',
		title: 'Provide liquidity to exchanges: 33%',
	},
	{
		color: '#513C84',
		title: 'Fund for farming, vault rewards: 32%',
	},
	{
		color: '#CB9801',
		title: 'Support Marketing/Partnerships and go-to market strategy: 20%',
	},
	{
		color: '#0070C0',
		title: 'Support development team: 5%',
	},
	{
		color: '#00B050',
		title: 'Fund for game, lottery & airdrop for holders: 10%',
	},
]
