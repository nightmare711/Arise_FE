import React from 'react'
import { listRoadmap } from 'constants/list-sidebar'
import './CardRoadmap.css'

export const CardRoadmap = () => {
	return (
		<div className='card card-roadmap'>
			<span className='title-primary'>Roadmap</span>
			<ul className='list-roadmap'>
				{listRoadmap.map((item, index) => {
					return (
						<li className='item' key={index}>
							<div className='left-txt'>
								{item.status === true ? (
									<span className='status status-done'>Done</span>
								) : item.status === 'not-yet' ? null : (
									<span className='status status-false'>Ongoing</span>
								)}
								<span className='date'>{item.date}</span>
							</div>
							<span className='title'>{item.title}</span>
							{item.content ? <span className='content'>{item.content}</span> : null}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
