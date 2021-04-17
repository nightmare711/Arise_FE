import { News } from 'constants/news'

export const onFilterNews = (active) => {
	if (active === '' || active === 'all') {
		return News
	}
	const newsFilter = News.filter((item) => item.type === active)
	return newsFilter
}
