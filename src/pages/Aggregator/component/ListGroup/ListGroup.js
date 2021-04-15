import React from 'react'
import { DataContext } from 'contexts/DataContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import { OverlaySpinner } from 'components'
import './ListGroup.css'

export const ListGroup = ({ isLoading }) => {
	const data = React.useContext(DataContext)
	return (
		<div className='card list-group'>
			{isLoading ? <OverlaySpinner /> : null}
			<table className='table-list' style={{ width: '100%' }}>
				<thead>
					<tr>
						<th>From</th>
						<th></th>
						<th>To</th>
						<th>Fee</th>
						<th>Impact</th>
						<th>Exchange</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{data.aggregator.map((item) => (
						<tr>
							<td>{item?.from.symbol}</td>
							<td className='icon'>
								<FontAwesomeIcon icon={faHandPointRight} />
							</td>
							<td className='to-deal'>
								{item?.deal.amount_out_est} {item?.to.symbol}
							</td>
							<td>{item?.deal?.fee}</td>
							<td>{item?.deal?.impact}</td>
							<td>{item?.exchange?.name}</td>
							<td>
								<div
									onClick={() => window.open(item?.exchange?.uri, '_blank')}
									className='btn-nobg'
								>
									Swap
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{data.aggregator?.length === 0 ? <div className='no-result'>No Result</div> : null}
		</div>
	)
}
