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
	faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
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
				title: 'DEX Aggregator',
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
			},
			{
				id: '2',
				title: 'Farm Aggregator',
			},
			{
				id: '3',
				title: 'Liquidity',
			},
			{
				id: '4',
				title: 'Retirement Vault',
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
				title: 'Air drop',
			},
			{
				id: '2',
				title: 'Raffles',
			},
			{
				id: '3',
				title: 'Lottery',
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
		title: 'Bug Bounty Programs',
		icon: faBug,
		child: [],
		content: 'bug',
		extra: '(On Going)',
	},
	{
		id: 8,
		title: 'Audit Reports',
		icon: faShieldAlt,
		child: [],
		content: 'audit-report',
	},
	{
		id: 9,
		title: 'More',
		icon: faEllipsisH,
		child: [
			{
				id: '1',
				title: 'Github',
				icon: faGithub,
			},
			{
				id: '2',
				title: 'Docs',
				icon: faFile,
			},
			{
				id: '3',
				title: 'FAQ',
				icon: faQuestionCircle,
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
		date: '7/4',
		title: ' Estimated Arise Pre-sale',
		content: 'Join our telegram group to see more information ',
	},
	{
		status: false,
		date: '8/4',
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
