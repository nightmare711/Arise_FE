import random from 'lodash/random'
import { REACT_APP_NODE_1, REACT_APP_NODE_2, REACT_APP_NODE_3 } from 'constants/constants'

const nodes = [REACT_APP_NODE_1, REACT_APP_NODE_2, REACT_APP_NODE_3]

const getNodeUrl = () => {
	const randomIndex = random(0, nodes.length - 1)
	return nodes[randomIndex]
}
export default getNodeUrl
