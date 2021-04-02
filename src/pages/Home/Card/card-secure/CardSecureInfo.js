import React from 'react'
import Shield from 'assets/Shield.png'
import './CardSecureInfo.css'

export const CardSecureInfo = () => {
	return (
		<div className='card card-secure-info'>
			<img src={Shield} className='img-main' alt='Shield' />
			<div className='txt-frame'>
				<span className='title-primary'>SECURITY AUDIT PASSED</span>
				<span className='content'>
					We are still working with Certik and One big company to release more audit ASAP, audit
					request already submitted and coming soon in next weeks.
				</span>
			</div>
			<div className='btn-secondary'>
				<a href={() => false}>Join us</a>
			</div>
		</div>
	)
}
