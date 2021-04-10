import React from 'react'
import { DataContext } from 'contexts/DataContext'
import { Navbar, Sidebar, PaddingContent, Overlay } from 'components'
import { HomePage, ErrorPage } from 'pages'
import { Switch, Route } from 'react-router-dom'

function App() {
	// const wallet = useWallet()
	// const burnedBalance = useBurnedBalance(getCakeAddress())
	// const supply = useTotalSupply()
	const Test = async () => {
		// const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed1.ninicoin.io'))
		// find all tokens received by this address ...
		// const balance = await web3.eth.getBalance(account[0])
		// web3.eth
		// 	.getPastLogs({
		// 		address: ['0xa861f33d8ac80b64c1b8c7b4c99599474b79888a'],
		// 		topics: [transfer, '0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b'],
		// 		fromBlock: '0x1',
		// 		toBlock: 'latest',
		// 	})
		// 	.then((res) => console.log(res))
		// 	.catch((err) => console.log(err))
		// console.log(balance)
		// var transferEventsFilter = token.Transfer({}, { fromBlock: fromBlock, toBlock: toBlock })
		// var transferEvents = transferEventsFilter.get()
		// console.log(transferEvents)
	}
	Test()

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
					<Route exact path='/' component={HomePage} />
					<Route exact path='/home' component={HomePage} />
					<Route component={ErrorPage} />
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
