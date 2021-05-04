import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { DataContext } from 'contexts/DataContext'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { onCopyTextToClipboard } from 'services/UI/useCopyText'
import './AccountDetail.css'

export const AccountDetail = () => {
	const data = React.useContext(DataContext)
	const wallet = useWallet()

	return (
		<div className='connect-wallet account'>
			<div onClick={() => data.setIsOpenDetailWallet(false)} className='overlay'></div>
			<div className='account-detail'>
				<div className='header-primary'>
					Your wallet
					<FontAwesomeIcon
						onClick={() => data.setIsOpenDetailWallet(false)}
						icon={faTimes}
						className='icon'
					/>
				</div>
				<div className='txt-content'>
					<div className='account-address'>{wallet.account}</div>
					<div className='btn-container'>
						<div
							onClick={() => window.open('https://bscscan.com/address/' + wallet.account, '_blank')}
							className='btn btn-view'
						>
							View on BscScan <FontAwesomeIcon icon={faExternalLinkAlt} className='icon' />
						</div>
						<div onClick={() => onCopyTextToClipboard(wallet.account)} className='btn btn-copy'>
							Copy Address <FontAwesomeIcon icon={faCopy} className='icon' />
						</div>
					</div>
				</div>
				<div
					onClick={async () => {
						data.setIsOpenDetailWallet(false)
						await wallet.reset()
					}}
					className='btn-logout'
				>
					Logout
				</div>
			</div>
		</div>
	)
}
