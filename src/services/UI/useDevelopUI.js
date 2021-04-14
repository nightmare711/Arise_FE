import React from 'react'
import { ListSidebarItem } from 'constants/list-sidebar'
import { useLocation } from 'react-router-dom'
import { DataContext } from 'contexts/DataContext'

export const useDetectRoute = (itemActive, setItemActive) => {
	const location = useLocation()
	React.useEffect(() => {
		const pathName = location.pathname.substr(1, location.pathname.length)
		if (pathName !== itemActive) {
			onHandleActiveItemSidebar(
				location.pathname.substr(1, location.pathname.length),
				itemActive,
				setItemActive
			)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname])
	return location
}
const onHandleActiveItemSidebar = (itemActive, preItemActive, setItemActive) => {
	try {
		let found = ''
		for (let i = 0; i < ListSidebarItem.length; i++) {
			for (let j = 0; j < ListSidebarItem[i].child.length; j++) {
				if (`/${itemActive}` === ListSidebarItem[i].child[j].href) {
					found = ListSidebarItem[i].child[j].content
					break
				}
			}
		}
		if (preItemActive !== '') {
			document.querySelector(`.${preItemActive}`)?.classList.remove('active')
		} else {
			document.querySelector(`.home`)?.classList.remove('active')
		}
		if (!found) {
			if (itemActive === '') {
				document.querySelector(`.home`)?.classList.add('active')
				setItemActive('home')
			} else {
				document.querySelector(`.${itemActive}`)?.classList.add('active')
				setItemActive(itemActive)
			}
		} else {
			document.querySelector(`.${found}`)?.classList.add('active')
			setItemActive(found)
		}
	} catch (err) {
		console.log(err)
	}
}
export const useListToken = () => {
	const data = React.useContext(DataContext)
	return (className) => {
		if (className === 'input-from') {
			console.log(data.isOpenSelectTokenFrom)
			if (data.isOpenSelectTokenFrom) {
				data.setIsOpenSelectTokenFrom(false)
			} else {
				data.setIsOpenSelectTokenTo(false)
				data.setIsOpenSelectTokenFrom(true)
			}
		} else if (className === 'input-to') {
			if (data.isOpenSelectTokenTo) {
				data.setIsOpenSelectTokenTo(false)
			} else {
				data.setIsOpenSelectTokenFrom(false)
				data.setIsOpenSelectTokenTo(true)
			}
		}
	}
}
