import {
	faCartArrowDown,
	faRandom,
	faTools,
	faGamepad,
	faSyncAlt,
	faNewspaper,
	faShieldAlt,
	faCertificate,
	faEllipsisH,
	faHome,
	faBug,
} from '@fortawesome/free-solid-svg-icons'
export const ListSidebarItem = [
	{
		id: 0,
		title: 'Home',
		icon: faHome,
		content: 'home-item',
		child: [],
	},
	{
		id: 1,
		title: 'Buy ARI',
		icon: faCartArrowDown,
		child: [
			{
				id: '1',
				title: 'Buy on Pancake',
			},
			{
				id: '2',
				title: 'ARI Live chart',
			},
			{
				id: '3',
				title: 'DEFI yeild aggregator',
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
				title: 'ARI Swap',
			},
			{
				id: '2',
				title: 'Yield Farming',
			},
			{
				id: '3',
				title: 'Cross-dex Swap',
			},
			{
				id: '4',
				title: 'Liquidity',
			},
			{
				id: '5',
				title: 'Vault',
			},
			{
				id: '6',
				title: 'Lottery',
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
			},
			{
				id: '2',
				title: 'Whale Tracker',
			},
			{
				id: '3',
				title: 'Trading bots',
			},
		],
		content: 'tool',
	},
	{
		id: 4,
		title: 'Game',
		icon: faGamepad,
		child: [
			{
				id: '1',
				title: 'Raffles',
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
	},
	{
		id: 6,
		title: 'News',
		icon: faNewspaper,
		child: [],
		content: 'news',
	},
	{
		id: 7,
		title: 'Certik Audit',
		icon: faCertificate,
		child: [],
		content: 'certik-audit',
	},
	{
		id: 8,
		title: 'Tech rate audit',
		icon: faShieldAlt,
		child: [],
		content: 'tech-rate-audit',
	},
	{
		id: 9,
		title: 'Bug Bounty Programs',
		icon: faBug,
		child: [],
		content: 'bug',
		extra: '(On Going)',
	},
	{
		id: 10,
		title: 'More',
		icon: faEllipsisH,
		child: [],
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
		status: true,
		date: '7/4',
		title: ' Estimated Arise Pre-sale',
		content: 'Join our telegram group to see more information ',
	},
	{
		status: true,
		date: '8/4',
		title: 'Pancake Listing & Marketing Campaign ',
		content: 'Partners with Influencers, Youtubers, AMAs, and more',
	},
	{
		status: false,
		date: '15/4',
		title: 'Coingecko & Coinmarketcap Listing ',
		content: '',
	},
	{
		status: false,
		date: '20/4',
		title: 'Launch the first crypto game using ARI token & daily ARI airdrop event',
		content: '',
	},
	{
		status: false,
		date: '30/4',
		title: 'Launch Farm & Retirement Vault',
		content: '',
	},
	{
		status: false,
		date: 'May',
		title: 'Launch BSC Chart Tools & NFTs farming',
		content: '',
	},
	{
		status: false,
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
