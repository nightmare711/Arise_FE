import React from 'react'
import Shield from 'assets/Shield.png'
import './CardSecureInfo.css'

export const CardSecureInfo = () => {
	return (
		<div className='card card-secure-info'>
			<img src={Shield} className='img-main' alt='Shield' />
			<div className='txt-frame'>
				<span className='title-primary'>Contract is audited by Solidity now.</span>
				<div
					onClick={() =>
						window.open('https://arisefinance.gitbook.io/arise-finance/audit-result', '_blank')
					}
					className='btn-secondary'
				>
					Read more
				</div>
			</div>
		</div>
	)
}
