import React from 'react'
import { DataContext } from 'contexts/DataContext'
import {
	Navbar,
	Sidebar,
	PaddingContent,
	Overlay,
	ConnectWallet,
	AccountDetail,
	GameFlappyBird,
} from 'components'
import {
	useUpdateOverlayTrans,
	useUpdateOverlayColor,
	useScrollTop,
} from 'services/UI/useDevelopUI'
import { Aggregator } from 'pages'
import { HomePage, ErrorPage, NewsPage, IFOPage, Audit, Collection, FlappyBird } from 'pages'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Switch, Route } from 'react-router-dom'

function App() {
	const data = React.useContext(DataContext)
	useScrollTop()
	useUpdateOverlayColor()
	useUpdateOverlayTrans()
	const wallet = useWallet()
	return (
		<div>
			{data.isOpenOverlay ? <Overlay /> : null}
			{data.isOpenOverlayTrans ? <Overlay transparent /> : null}
			{data.isOpenConnectWallet ? <ConnectWallet /> : null}
			{data.isOpenDetailWallet ? <AccountDetail /> : null}
			{data.isOpenFlappyBird && wallet.status === 'connected' ? <GameFlappyBird /> : null}
			<Navbar />
			<Sidebar />
			<PaddingContent>
				<Switch>
					<Route exact path='/swap-aggregator' component={Aggregator} />
					<Route exact path='/' component={HomePage} />
					<Route exact path='/home' component={HomePage} />
					<Route exact path='/news' component={NewsPage} />
					<Route exact path='/ifo' component={IFOPage} />
					<Route exact path='/audit-reports' component={Audit} />
					<Route exact path='/my-collection' component={Collection} />
					<Route exact path='/air-drop' component={FlappyBird} />
					<Route component={ErrorPage} />
				</Switch>
			</PaddingContent>
		</div>
	)
}

export default App
