import React from 'react'
import Logo from 'assets/main-logo.png'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { DataContext } from 'contexts/DataContext'
import { useWallet } from '@binance-chain/bsc-use-wallet'

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
	const wallet = useWallet()
	return (
		<div className='navbar'>
			<div onClick={onHandleClickMenu} className='menu-btn'>
				<FontAwesomeIcon icon={faBars} className='menu-icon-bar' />
			</div>
			<div className='container-img'>
				<img className='navbar-logo' src={Logo} alt='logo' />
				<span>
					<b>ARI address </b> - 0xcb77d84066f6192ab79bbc6d6450ddbe72661d7c
				</span>
			</div>
			{wallet.status === 'connected' ? (
				<div className='account btn-mobile' onClick={() => wallet.reset()}>
					{wallet.account || 'default'}
					{/* <div>Balance: {wallet.balance}</div>
					<button onClick={() => wallet.reset()}>disconnect</button> */}
				</div>
			) : (
				<div
					onClick={async () => {
						await wallet.connect()
					}}
					className='btn-primary'
				>
					<a href={() => false}>Connect</a>
				</div>
			)}
		</div>
	)
}
