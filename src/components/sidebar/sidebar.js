import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { ListSidebarItem } from 'constants/list-sidebar'
import { useDetectRoute } from 'services/UI/useDevelopUI'
import './sidebar.css'

export const Sidebar = () => {
	const [itemActive, setItemActive] = useState('aaaa')
	const route = useDetectRoute(itemActive, setItemActive)
	console.log(route)
	const onHandleClickItem = (className) => {
		if (itemActive !== '') {
			document.querySelector(`.${itemActive}`)?.classList.remove('active')
		}
		document.querySelector(`.${className}`)?.classList.add('active')
		setItemActive(className)
	}
	return (
		<div id='sidebar' className='sidebar'>
			<ul className='list-item'>
				{ListSidebarItem.map((item) => {
					return (
						<li key={item.id} className='item'>
							<Link to={item.href || 0}>
								<div
									onClick={() => onHandleClickItem(item.content)}
									className={`${item.content}  main-item`}
								>
									<span className='left-text'>
										<FontAwesomeIcon className={'icon'} icon={item.icon} />
										<span>
											{item.title}
											<span className='title-extra'>{item.extra || ''}</span>
										</span>
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
										{item.child.map((item, index) => (
											<Link key={index} to={item.href || 0}>
												<li className='child-item' key={item.id}>
													{item.icon ? <FontAwesomeIcon className='icon' icon={item.icon} /> : null}
													{item.title}
												</li>
											</Link>
										))}
									</ul>
								) : null}
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
