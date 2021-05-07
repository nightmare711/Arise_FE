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
import { useCheckAccount } from 'queries/useGamer'
import { Aggregator } from 'pages'
import {
	HomePage,
	ErrorPage,
	NewsPage,
	IFOPage,
	Audit,
	Collection,
	FlappyBird,
	FlappyBirdComing,
} from 'pages'

import { Switch, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const returnSticky = (location, isAccountConfirm) => {
	if (location !== '/ari-bird/game') {
		return (
			<>
				<Navbar />
				<Sidebar />
			</>
		)
	}
	return null
}

function App() {
	const isAccountConfirm = useCheckAccount()
	const data = React.useContext(DataContext)

	useScrollTop()
	useUpdateOverlayColor()
	useUpdateOverlayTrans()
	const location = useLocation()
	return (
		<div>
			{data.isOpenOverlay ? <Overlay /> : null}
			{data.isOpenOverlayTrans ? <Overlay transparent /> : null}
			{data.isOpenConnectWallet ? <ConnectWallet /> : null}
			{data.isOpenDetailWallet ? <AccountDetail /> : null}
			{returnSticky(location.pathname, isAccountConfirm)}

			<Route exact path='/ari-bird/game' component={GameFlappyBird} />
			{!data.isAuth ? <Route exact path='/ari-bird' component={FlappyBirdComing} /> : null}

			<PaddingContent>
				<Switch>
					<Route exact path='/swap-aggregator' component={Aggregator} />
					<Route exact path='/' component={HomePage} />
					<Route exact path='/home' component={HomePage} />
					<Route exact path='/news' component={NewsPage} />
					<Route exact path='/ifo' component={IFOPage} />
					<Route exact path='/audit-reports' component={Audit} />
					<Route exact path='/my-collection' component={Collection} />
					{data.isAuth ? <Route exact path='/ari-bird' component={FlappyBird} /> : null}
					<Route component={ErrorPage} />
				</Switch>
			</PaddingContent>
		</div>
	)
}

export default App
