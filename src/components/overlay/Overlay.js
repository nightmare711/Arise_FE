import React from 'react'
import { DataContext } from 'contexts/DataContext'
import './Overlay.css'

export const Overlay = () => {
	const data = React.useContext(DataContext)
	const onHandleClickOverlay = () => {
		if (data.isOpenSidebar) {
			document.querySelector('.sidebar').style.transform = 'translateX(-300px)'
			data.setIsOpenSidebar(false)
		}
	}
	return <div onClick={onHandleClickOverlay} className='overlay'></div>
}
