import AriseBeat from 'assets/NFTs/Arise-Beat.png'
import BeatLegend from 'assets/NFTs/AriseBeat/Legend.mp4'
import BeatEpic from 'assets/NFTs/AriseBeat/Epic.mp4'
import BeatRare from 'assets/NFTs/AriseBeat/Rare.mp4'
import UnicornLegend from 'assets/NFTs/AriseUnicorn/Legend.mp4'
import UnicornEpic from 'assets/NFTs/AriseUnicorn/Epic.mp4'
import UnicornRare from 'assets/NFTs/AriseBeat/Rare.mp4'

export const listCollection = [
	{
		title: 'Arise Beat',
		image: AriseBeat,
		scarcity: {
			level: 'rare',
			color: '#5725E5',
		},
		video: BeatRare,
	},
	{
		title: 'Arise Beat',
		image: AriseBeat,
		scarcity: {
			level: 'epic',
			color: '#9900D6',
		},
		video: BeatEpic,
	},
	{
		title: 'Arise Beat',
		image: AriseBeat,
		scarcity: {
			level: 'legend',
			color: '#E2AD1F',
		},
		video: BeatLegend,
	},
	{
		title: 'Arise Unicorn',
		image: AriseBeat,
		scarcity: {
			level: 'rare',
			color: '#5725E5',
		},
		video: UnicornRare,
	},
	{
		title: 'Arise Unicorn',
		image: AriseBeat,
		scarcity: {
			level: 'legend',
			color: '#E2AD1F',
		},
		video: UnicornLegend,
	},
	{
		title: 'Arise Unicorn',
		image: AriseBeat,
		scarcity: {
			level: 'epic',
			color: '#9900D6',
		},
		video: UnicornEpic,
	},
]
