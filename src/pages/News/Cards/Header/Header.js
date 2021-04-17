import React from 'react'
import { useUpdateActiveFilter } from 'services/UI/useDevelopUI'
import './Header.css'

export const Header = ({ newsFilter, setNewsFilter }) => {
	const onClickNewsFilter = (item) => {
		if (item !== newsFilter.active) {
			setNewsFilter({
				preActive: newsFilter.active,
				active: item,
			})
		}
	}
	useUpdateActiveFilter(newsFilter)

	return (
		<div className='card-header-new card'>
			<h1 className='heading-primary'>LATEST NEWS</h1>
			<span className='heading-tertiary'>Keep tuned with the most recent updates </span>
			<div className='selector-container'>
				<ul className='selector-tabs'>
					<li onClick={() => onClickNewsFilter('all')} className='all'>
						All
					</li>
					<li onClick={() => onClickNewsFilter('news')} className='news'>
						ARI News
					</li>
					<li onClick={() => onClickNewsFilter('guide')} className='guide'>
						Guide
					</li>
					<li onClick={() => onClickNewsFilter('roadmap')} className='roadmap'>
						Roadmap
					</li>
					<li onClick={() => onClickNewsFilter('others')} className='others'>
						Others
					</li>
				</ul>
			</div>
		</div>
	)
}
