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
} from '@fortawesome/free-solid-svg-icons'
export const ListSidebarItem = [
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
		title: 'More',
		icon: faEllipsisH,
		child: [],
		content: 'more',
	},
]
export const listRoadmap = [
	{
		status: true,
		date: '18/3',
		title: 'Arise Pre-sale',
		content: 'Soft-cap 1500 BNB, Hard-cap 2500 BNB',
	},
	{
		status: true,
		date: '19/3',
		title: ' Arise beta launch and Listing on PancakeSwap',
		content: 'Raise funds for the liquidity',
	},
	{
		status: true,
		date: 'Mar',
		title: ' Launch the first advertising campaign - End of March',
		content: 'Growth & scale community',
	},
	{
		status: false,
		date: 'Mar',
		title: 'Finish first audit with our Security Partners - End of March',
		content: '',
	},
	{
		status: false,
		date: 'Mar',
		title: 'Launch the first utilities of our eco system - End of March',
		content: '',
	},
	{
		status: false,
		date: 'Apr',
		title: 'Listing on Coingecko and Coinmarketcap - April',
		content: '',
	},
	{
		status: false,
		date: 'Apr',
		title: 'Launch Airdrop program for holders April',
		content: 'Reward for diamond holders to trial the very first beta functions',
	},
	{
		status: false,
		date: 'Apr',
		title: 'Launch BSC Token analysis tools (BETA version) April',
		content: '',
	},
]
export const listTokenDetail = [
	{
		color: '#C1501F',
		title: 'Presale',
	},
	{
		color: '#D21C7D',
		title: 'Liquidity/ Listing',
	},
	{
		color: '#833A13',
		title: 'Development',
	},
	{
		color: '#BB7BDA',
		title: 'Team',
	},
	{
		color: '#DAAA8F',
		title: 'Airdrop',
	},
	{
		color: '#FEC113',
		title: 'Vault & Liquidity fund',
	},
	{
		color: '#842F74',
		title: 'Marketing/Advisor/Partnership',
	},
]
