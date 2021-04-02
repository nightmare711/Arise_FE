import React from 'react'
import { DataContext } from 'contexts/DataContext'
import { Navbar, Sidebar, PaddingContent, Overlay } from 'components'
import { HomePage } from 'pages'
import { Switch, Route } from 'react-router-dom'

function App() {
	// const wallet = useWallet()
	// const burnedBalance = useBurnedBalance(getCakeAddress())
	// const supply = useTotalSupply()
	// var totalSupply = supply ? getBalanceNumber(supply) - getBalanceNumber(burnedBalance) : 0
	const data = React.useContext(DataContext)
	React.useEffect(() => {
		if (data.isOpenSidebar) {
			data.setIsOpenOverlay(true)
		} else {
			data.setIsOpenOverlay(false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data.isOpenSidebar])
	return (
		<div>
			{data.isOpenOverlay ? <Overlay /> : null}
			<Navbar />
			<Sidebar />
			<PaddingContent>
				<Switch>
					<Route path='/'>
						<HomePage />
					</Route>
				</Switch>
			</PaddingContent>
			{/* <h1>Wallet</h1>
			{wallet.status === 'connected' ? (
				<div>
					<div>Account: {wallet.account}</div>
					<div>Balance: {wallet.balance}</div>
					<button onClick={() => wallet.reset()}>disconnect</button>
				</div>
			) : (
				<div>
					Connect:
					<button
						onClick={async () => {
							let x = await wallet.connect()
							console.log('connect', x)
						}}
					>
						MetaMask
					</button>
					<button onClick={() => wallet.connect('frame')}>Frame</button>
					<button onClick={() => wallet.connect('portis')}>Portis</button>
				</div>
			)} */}
		</div>
	)
}

export default App
