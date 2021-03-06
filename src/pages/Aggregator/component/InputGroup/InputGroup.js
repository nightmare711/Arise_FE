import React from 'react'
import { DataContext } from 'contexts/DataContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Tokens } from 'constants/tokens'
import { useGetAggregator } from 'queries/useAggregator'
import { useListToken } from 'services/UI/useDevelopUI'

export const InputGroup = ({ setIsLoading }) => {
	const data = React.useContext(DataContext)
	const triggerListTokens = useListToken()
	const [info, setInfo] = React.useState({
		from: 'BNB',
		to: 'BUSD',
		amount: 1,
	})
	const { mutate: postAggregator } = useGetAggregator(setIsLoading)
	return (
		<div className='card card-aggregator'>
			<div className='card-input'>
				<span className='title-primary'>
					Swap at the best rate across Binance Smart Chain Top DEXes.
				</span>
				<div className='alert-content'>
					This is a beta version, more improvements are coming soon, including more tokens, DEXes,
					arbitrage, one-click swap, etc.
				</div>
				<div className='input-container'>
					<div className='input-token input-from'>
						<div onClick={() => triggerListTokens('input-from')} className='select-token'>
							<div>
								{info.from} <FontAwesomeIcon className='icon' icon={faChevronDown} />
							</div>
							{data.isOpenSelectTokenFrom ? (
								<ul id='aggregator-tokens' className='list-token'>
									{Tokens.map((token, index) => (
										<li
											style={
												token.name === info.to || token.name === info.from
													? {
															cursor: 'not-allowed',
															opacity: 0.4,
													  }
													: {}
											}
											key={index}
											onClick={() => {
												setInfo({
													...info,
													from: token.name,
												})
												triggerListTokens('input-from')
											}}
										>
											{token.name}
										</li>
									))}
								</ul>
							) : null}
						</div>
						<input
							value={info.amount}
							id='amount'
							className='amount'
							type='number'
							onChange={(e) =>
								setInfo({
									...info,
									amount: e.target.value,
								})
							}
						/>
					</div>
					<div className='input-token input-to'>
						<div onClick={() => triggerListTokens('input-to')} className='select-token'>
							<div>
								{info.to} <FontAwesomeIcon className='icon' icon={faChevronDown} />
							</div>
							{data.isOpenSelectTokenTo ? (
								<ul id='aggregator-tokens' className='list-token'>
									{Tokens.map((token, index) => (
										<li
											style={
												token.name === info.to || token.name === info.from
													? {
															cursor: 'not-allowed',
															opacity: 0.4,
													  }
													: {}
											}
											key={index}
											onClick={() => {
												setInfo({
													...info,
													to: token.name,
												})
												triggerListTokens('input-to')
											}}
										>
											{token.name}
										</li>
									))}
								</ul>
							) : null}
						</div>
						<input type='text' disabled value={data.aggregator[0]?.deal?.amount_out_est || ''} />
					</div>
					<div
						onClick={() => {
							postAggregator(info)
						}}
						className='btn-primary'
					>
						Search
					</div>
				</div>
			</div>
		</div>
	)
}
