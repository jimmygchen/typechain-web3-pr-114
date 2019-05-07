import {SimpleStorage} from '../lib/SimpleStorage'
import { abi } from '../build/contracts/SimpleStorage.json'

const address = ''
const contract = new SimpleStorage(abi)
// This line does not compile. Error:
// Argument of type '{ from: string; }' is not assignable to parameter of type 'Transaction'.
//  Type '{ from: string; }' is missing the following properties from type 'Transaction': hash, nonce, blockHash, blockNumber, and 6 more.ts(2345)
contract.methods.set('test').send({ from: address })