import React from 'react'
import { Header, CardNew } from './Cards'
import { CardCopyRight } from 'pages/Home/Card'
import { onFilterNews } from 'queries/useNews'
import './NewsPage.css'

export const NewsPage = () => {
	const [newsFilter, setNewsFilter] = React.useState({
		active: 'all',
		preActive: '',
	})
	return (
		<div className='news-page'>
			<div className='container-w-min-w'>
				<Header newsFilter={newsFilter} setNewsFilter={setNewsFilter} />
				<div className='container-news'>
					{onFilterNews(newsFilter.active).map((item, index) => (
						<CardNew
							key={index}
							id={index}
							title={item.title}
							link={item.link}
							image={item.image}
							type={item.type}
							day={item.day}
						/>
					))}
				</div>
			</div>
			<CardCopyRight />
		</div>
	)
}
