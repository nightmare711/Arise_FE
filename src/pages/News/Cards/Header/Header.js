import React from 'react'
import './Header.css'

export const Header = () => {
	return (
		<div className='card-header-new card'>
			<h1 className='heading-primary'>LATEST NEWS</h1>
			<span className='heading-tertiary'>Keep tuned with the most recent updates </span>
			<div className='selector-container'>
				<ul className='selector-tabs'>
					<li>All</li>
					<li>ARI News</li>
					<li>Guide</li>
					<li>Roadmap</li>
					<li>Others</li>
				</ul>
			</div>
		</div>
	)
}
