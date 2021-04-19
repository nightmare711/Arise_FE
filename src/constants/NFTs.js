import UnicornRarePoster from 'assets/NFTs/AriseUnicorn/RarePoster.jpg'
import UnicornEpicPoster from 'assets/NFTs/AriseUnicorn/EpicPoster.jpg'
import UnicornLegendPoster from 'assets/NFTs/AriseUnicorn/LegendPoster.jpg'
import BeatRarePoster from 'assets/NFTs/AriseBeat/RarePoster.jpg'
import BeatEpicPoster from 'assets/NFTs/AriseBeat/EpicPoster.jpg'
import BeatLegendPoster from 'assets/NFTs/AriseBeat/LegendPoster.jpg'
import BeatLegend from 'assets/NFTs/AriseBeat/Legend.mp4'
import BeatEpic from 'assets/NFTs/AriseBeat/Epic.mp4'
import BeatRare from 'assets/NFTs/AriseBeat/Rare.mp4'
import UnicornLegend from 'assets/NFTs/AriseUnicorn/Legend.mp4'
import UnicornEpic from 'assets/NFTs/AriseUnicorn/Epic.mp4'
import UnicornRare from 'assets/NFTs/AriseUnicorn/Rare.mp4'

export const listUnicorn = [
	{
		title: 'Arise Unicorn',
		image: UnicornRarePoster,
		scarcity: {
			level: 'rare',
			color: '#5725E5',
		},
		video: UnicornRare,
	},
	{
		title: 'Arise Unicorn',
		image: UnicornEpicPoster,
		scarcity: {
			level: 'epic',
			color: '#9900D6',
		},
		video: UnicornEpic,
	},
	{
		title: 'Arise Unicorn',
		image: UnicornLegendPoster,
		scarcity: {
			level: 'legend',
			color: '#E2AD1F',
		},
		video: UnicornLegend,
	},
]
export const listBeat = [
	{
		title: 'Arise Beat',
		image: BeatRarePoster,
		scarcity: {
			level: 'rare',
			color: '#5725E5',
		},
		video: BeatRare,
	},
	{
		title: 'Arise Beat',
		image: BeatEpicPoster,
		scarcity: {
			level: 'epic',
			color: '#9900D6',
		},
		video: BeatEpic,
	},
	{
		title: 'Arise Beat',
		image: BeatLegendPoster,
		scarcity: {
			level: 'legend',
			color: '#E2AD1F',
		},
		video: BeatLegend,
	},
]
