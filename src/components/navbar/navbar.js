import React from 'react'
import Logo from 'assets/main-logo.png'
import './navbar.css'

export const Navbar = () => {
	return (
		<div className='navbar'>
			<img className='navbar-logo' src={Logo} alt='logo' />
			<div className='btn-primary'>
				<a href={() => false}>Connect</a>
			</div>
		</div>
	)
}
