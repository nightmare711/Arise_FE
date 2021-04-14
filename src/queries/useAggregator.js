import { useMutation } from 'react-query'
import React from 'react'
import { AUTH_API } from 'constants/api'
import { DataContext } from 'contexts/DataContext'

export const useGetAggregator = (setIsLoading) => {
	const data = React.useContext(DataContext)
	return useMutation((info) => {
		if (info.from && info.to && info.amount) {
			setIsLoading(true)
			return fetch(`${AUTH_API}dex`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(info),
			})
				.then((res) => res.json())
				.then((result) => {
					data.setAggregator(result.result.filter((res) => res))
					setIsLoading(false)
					document.querySelector('.aggregator #amount').style.border = '1px solid #acb4b5'
					document.querySelector('.aggregator #amount').style.borderLeft = 'none'
				})
				.catch((err) => {
					console.debug(err)
					setIsLoading(false)
				})
		} else {
			document.querySelector('.aggregator #amount').style.border = '1px solid red'
			document.querySelector('.aggregator #amount').style.borderLeft = 'none'
		}
	})
}
