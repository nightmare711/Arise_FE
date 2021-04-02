import React from 'react'
import LogoImg from 'assets/main-logo.png'
import './CardCopyRight.css'

export const CardCopyRight = () => {
	return (
		<div className='card-copy-right'>
			<img src={LogoImg} alt='logo' />
			<span>Copyright 2021 by Arise.finance </span>
		</div>
	)
}
