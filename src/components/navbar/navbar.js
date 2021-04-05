import React from 'react'
import Logo from 'assets/main-logo.png'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { DataContext } from 'contexts/DataContext'

export const Navbar = () => {
	const data = React.useContext(DataContext)
	const onHandleClickMenu = () => {
		if (data.isOpenSidebar) {
			document.querySelector('#sidebar').style.transform = 'translateX(-300px)'
			data.setIsOpenSidebar(false)
		} else {
			document.querySelector('#sidebar').style.transform = 'translateX(0px)'
			data.setIsOpenSidebar(true)
		}
	}

	return (
		<div className='navbar'>
			<div onClick={onHandleClickMenu} className='menu-btn'>
				<FontAwesomeIcon icon={faBars} className='menu-icon-bar' />
			</div>
			<img className='navbar-logo' src={Logo} alt='logo' />
			{/* <div className='btn-primary'>
				<a href={() => false}>Connect</a>
			</div> */}
		</div>
	)
}
