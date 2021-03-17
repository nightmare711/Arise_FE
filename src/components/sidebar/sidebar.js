import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTelegramPlane, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'
import { ListSidebarItem } from 'constants/list-sidebar'
import './sidebar.css'

export const Sidebar = () => {
	const [itemActive, setItemActive] = useState('')
	const onHandleClickItem = (className) => {
		if (itemActive !== '') {
			document.querySelector(`.${itemActive}`)?.classList.remove('active')
		}
		document.querySelector(`.${className}`)?.classList.add('active')
		setItemActive(className)
	}
	return (
		<div className='sidebar'>
			<ul className='list-item'>
				{ListSidebarItem.map((item) => {
					return (
						<li key={item.id} className='item'>
							<div
								onClick={() => onHandleClickItem(item.content)}
								className={`${item.content} main-item`}
							>
								<span className='left-text'>
									<FontAwesomeIcon className={'icon'} icon={item.icon} />
									<span>{item.title}</span>
								</span>
								{item.child.length !== 0 ? (
									<FontAwesomeIcon
										className={itemActive === item.content ? 'rotate-90' : ''}
										icon={faCaretRight}
									/>
								) : null}
							</div>
							{item.child.length !== 0 && itemActive === item.content ? (
								<ul className='list-child'>
									{item.child.map((item) => (
										<li className='child-item' key={item.id}>
											{item.title}
										</li>
									))}
								</ul>
							) : null}
						</li>
					)
				})}
			</ul>
			<div className='sidebar-bottom'>
				<div className='bottom-front'>
					<div className='coin-market'>
						<span>CoinMarketCap</span>
						<span className='content-coin'>$3.917</span>
					</div>
					<div className='coin-gecko'>
						<span>CoinGecko</span>
						<div className='coin-icon-container content-coin'>
							<div className='icon'>
								<FontAwesomeIcon className='coin-icon' icon={faTwitter} />
							</div>
							<div className='icon'>
								<FontAwesomeIcon className='coin-icon' icon={faTelegramPlane} />
							</div>
							<div className='icon'>
								<FontAwesomeIcon className='coin-icon' icon={faFacebookF} />
							</div>
						</div>
					</div>
				</div>
				<div className='bottom-bot'>
					<div className='bot-left'>
						<FontAwesomeIcon className='bot-left-sun icon' icon={faSun} /> /{' '}
						<FontAwesomeIcon className='bot-left-moon icon' icon={faMoon} />
					</div>
					<div className='bot-right'>
						<FontAwesomeIcon icon={faGlobe} />
						<span>Eng</span>
					</div>
				</div>
			</div>
		</div>
	)
}
