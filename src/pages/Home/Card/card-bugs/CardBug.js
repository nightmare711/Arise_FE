import React from 'react'
import BugImg from 'assets/bug.png'
import './CardBug.css'

export const CardBug = () => {
	return (
		<div className='card card-secure-info card-bug'>
			<img src={BugImg} className='img-main' alt='Shield' />
			<div className='txt-frame'>
				<span className='title-primary'>BUG BOUNTY REWARDS TO BE EARNED.</span>
				<span className='content'>
					To make sure your funds are safe, we want all of developers all around the world to join
					us in the search for critical issues in our smart contract. Any one who successfully find
					critical issues which can significantly damage the security of the smart contract will be
					rewarded up to 10,000$.
				</span>
			</div>
			<div className='btn-secondary'>
				<a href={() => false}>Coming Soon</a>
			</div>
		</div>
	)
}
