import React, { useState, useEffect } from 'react'

const FAST_INTERVAL = 10000
const SLOW_INTERVAL = 60000

const RefreshContext = React.createContext({ slow: 0, fast: 0 })

// This context maintain 2 counters that can be used as a dependencies on other hooks to force a periodic refresh
const RefreshContextProvider = ({ children }) => {
	const [slow, setSlow] = useState(0)
	const [fast, setFast] = useState(0)

	useEffect(() => {
		const interval = setInterval(async () => {
			setFast((prev) => prev + 1)
			console.log('prev', fast)
		}, FAST_INTERVAL)
		return () => clearInterval(interval)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const interval = setInterval(async () => {
			setSlow((prev) => prev + 1)
			console.log('prev', slow)
		}, SLOW_INTERVAL)
		return () => clearInterval(interval)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return <RefreshContext.Provider value={{ slow, fast }}>{children}</RefreshContext.Provider>
}

export { RefreshContext, RefreshContextProvider }
