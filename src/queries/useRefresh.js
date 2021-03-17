import { useContext } from 'react'
import { RefreshContext } from 'contexts/RefreshContext'

const useRefresh = () => {
	const { fast, slow } = useContext(RefreshContext)
	console.log(fast, slow)
	return { fastRefresh: fast, slowRefresh: slow }
}

export default useRefresh
