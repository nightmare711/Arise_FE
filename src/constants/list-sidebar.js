import {
	faCartArrowDown,
	// faRandom,
	// faTools,
	faGamepad,
	faSyncAlt,
	faNewspaper,
	faShieldAlt,
	faEllipsisH,
	faHome,
	faBug,
	faBinoculars,
	faRocket,
	faGem,
} from '@fortawesome/free-solid-svg-icons'
// import { faImages } from '@fortawesome/free-regular-svg-icons'
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
		onClick: () => {},
	},
	{
		id: 1,
		title: 'Buy ARI',
		icon: faCartArrowDown,
		child: [],
		bestSale: false,
		content: 'buy-ari',
		onClick: () => {
			window.open(
				'https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0xcb77d84066f6192ab79bbc6d6450ddbe72661d7c',
				'_blank'
			)
		},
	},
	{
		id: 11,
		title: 'NFTs Marketplace',
		icon: faGem,
		child: [],
		content: 'my-collection',
		href: '/my-collection',
		onClick: () => {},
		bestSale: true,
	},
	{
		id: 6,
		title: 'Dex Aggregator',
		icon: faBinoculars,
		child: [],
		content: 'swap-aggregator',
		href: '/swap-aggregator',
		onClick: () => {},
		bestSale: true,
	},
	// {
	// 	id: 2,
	// 	title: 'Swap',
	// 	icon: faRandom,
	// 	child: [
	// 		{
	// 			id: '1',
	// 			title: 'ARI DEX',
	// 			href: '/ari-dex',
	// 			content: 'swap',
	// 		},
	// 		{
	// 			id: '2',
	// 			title: 'Farm Aggregator',
	// 			href: '/farm-aggregator',
	// 			content: 'swap',
	// 		},
	// 		{
	// 			id: '3',
	// 			title: 'Liquidity',
	// 			href: '/liquidity',
	// 			content: 'swap',
	// 		},
	// 		{
	// 			id: '4',
	// 			title: 'Retirement Vault',
	// 			href: '/retirement-vault',
	// 			content: 'swap',
	// 		},
	// 	],
	// 	bestSale: false,
	// 	content: 'swap',
	// 	onClick: () => {},
	// },
	// {
	// 	id: 3,
	// 	title: 'Tool',
	// 	icon: faTools,
	// 	onClick: () => {},
	// 	child: [
	// 		{
	// 			id: '1',
	// 			title: 'BSC Token analysis',
	// 			href: '/bsc-token-anylysis',
	// 			content: 'tools',
	// 		},
	// 		{
	// 			id: '2',
	// 			title: 'Whale Tracker',
	// 			href: '/whale-tracker',
	// 			content: 'tools',
	// 		},
	// 		{
	// 			id: '3',
	// 			title: 'Trading bots',
	// 			href: '/trading-bots',
	// 			content: 'tools',
	// 		},
	// 	],
	// 	bestSale: false,
	// 	content: 'tools',
	// },
	{
		id: 4,
		title: 'Game',
		icon: faGamepad,
		child: [],
		content: 'ari-bird',
		href: '/ari-bird',
		onClick: () => {},
		bestSale: false,
		// id: 4,
		// title: 'GAME',
		// icon: faGamepad,
		// onClick: () => {},
		// bestSale: false,
		// href: '/ari-bird',
		// child: [
		// 	// {
		// 	// 	id: '1',
		// 	// 	title: 'Air drop',
		// 	// 	href: '/air-drop',
		// 	// 	content: 'game',
		// 	// },
		// 	// {
		// 	// 	id: '2',
		// 	// 	title: 'Raffles',
		// 	// 	href: '/raffles',
		// 	// 	content: 'game',
		// 	// },
		// 	// {
		// 	// 	id: '3',
		// 	// 	title: 'Lottery',
		// 	// 	href: '/lottery',
		// 	// 	content: 'game',
		// 	// },
		// ],
		// content: 'game',
	},
	{
		id: 5,
		title: 'IFO',
		icon: faRocket,
		child: [],
		content: 'ifo',
		href: '/ifo',
		onClick: () => {},
		bestSale: false,
	},
	{
		id: 7,
		title: 'Referral',
		icon: faSyncAlt,
		child: [],
		content: 'referral',
		href: '/referral',
		onClick: () => {},
		bestSale: false,
	},
	{
		id: 8,
		title: 'News',
		icon: faNewspaper,
		child: [],
		content: 'news',
		href: '/news',
		onClick: () => {},
		bestSale: false,
	},
	{
		id: 9,
		title: 'Bug Bounty Programs',
		icon: faBug,
		child: [],
		content: 'bug-bounty',
		extra: '',
		href: '',
		bestSale: false,
		onClick: () => {
			window.open(
				'https://arise-finance.medium.com/smart-contract-bug-bounty-program-b8150fa12af',
				'_blank'
			)
		},
	},
	{
		id: 10,
		title: 'Audit Reports',
		icon: faShieldAlt,
		child: [],
		content: 'audit-reports',
		href: '/audit-reports',
		onClick: () => {},
		bestSale: false,
	},
	{
		id: 12,
		title: 'More',
		icon: faEllipsisH,
		bestSale: false,
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
				href: 'https://arisefinance.gitbook.io/arise-finance/',
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
		onClick: () => {},
	},
]
export const listRoadmap = [
	{
		status: true,
		date: '15/4',
		title: 'Dex Aggregator',
		content: '',
	},
	{
		status: true,
		date: 'May',
		title: 'Listing on PancakeSwap & JulSwap',
		content: '',
	},
	{
		status: 'not-yet',
		date: 'May',
		title: 'Launch the first crypto game using ARI token & daily ARI airdrop event',
		content: '',
	},
	{
		status: 'not-yet',
		date: 'May',
		title: 'Launch Farm & Retirement Vault',
		content: '',
	},
	{
		status: 'not-yet',
		date: 'June',
		title: 'Launch BSC Chart Tools & NFTs farming',
		content: '',
	},
	{
		status: 'not-yet',
		date: 'July',
		title: 'Launch BSC DEX Tools & Defi Aggregation',
		content: '',
	},
	{
		status: 'not-yet',
		date: 'Q3',
		title: 'Build Whale tracking bots & ARI DEX',
		content: '',
	},
	{
		status: 'not-yet',
		date: 'Q4',
		title: 'More DEX listing, Build Multiswap functions & IDO Launchpad',
		content: '',
	},
	{
		status: 'not-yet',
		date: '2022',
		title:
			'Multichain support: ERC20, Matic, Polkadot, Availanche, Solana ... Enhance Expert trading tools & launch new farming model',
		content: '',
	},
]
export const listTokenDetail = [
	{
		color: '#E05C53',
		title: 'Presale',
	},
	{
		color: '#0070C0',
		title: 'Team',
	},
	{
		color: '#513C84',
		title: 'Marketing, Partnership & Development',
	},

	{
		color: '#00B050',
		title: 'Lottery & Airdrop',
	},
	{
		color: '#CB9801',
		title: 'Liquidity/ Listing',
	},

	{
		color: '#5BCBCC',
		title: 'Vault & Liquidity fund',
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
