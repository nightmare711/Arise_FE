import React from 'react'
import { DataContext } from 'contexts/DataContext'
import { Navbar, Sidebar, PaddingContent, Overlay, ConnectWallet, AccountDetail } from 'components'
import {
	useUpdateOverlayTrans,
	useUpdateOverlayColor,
	useScrollTop,
} from 'services/UI/useDevelopUI'
import { Aggregator } from 'pages'
import { HomePage, ErrorPage, NewsPage, IFOPage, Audit, Collection, FlappyBird } from 'pages'
import { Switch, Route } from 'react-router-dom'

function App() {
	const data = React.useContext(DataContext)
	useScrollTop()
	useUpdateOverlayColor()
	useUpdateOverlayTrans()
	return (
		<div>
			{data.isOpenOverlay ? <Overlay /> : null}
			{data.isOpenOverlayTrans ? <Overlay transparent /> : null}
			{data.isOpenConnectWallet ? <ConnectWallet /> : null}
			{data.isOpenDetailWallet ? <AccountDetail /> : null}
			<Navbar />
			<Sidebar />

			<Route exact path='/ari-bird' component={FlappyBird} />
			<PaddingContent>
				<Switch>
					<Route exact path='/swap-aggregator' component={Aggregator} />
					<Route exact path='/' component={HomePage} />
					<Route exact path='/home' component={HomePage} />
					<Route exact path='/news' component={NewsPage} />
					<Route exact path='/ifo' component={IFOPage} />
					<Route exact path='/audit-reports' component={Audit} />
					<Route exact path='/my-collection' component={Collection} />
					<Route component={ErrorPage} />
				</Switch>
			</PaddingContent>
		</div>
	)
}

export default App
