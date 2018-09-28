# Laska.zil

class asscess to zilliqa network

#### Usage

```Javascript
const Laksa=require('laksa')
// or
import Laksa from 'laksa'

// initialize
const laksa=new Laksa('https://api-scilla.zilliqa.com')

laksa.zil.<{Method|Object|Class}>
```

#### Sub Classes

- Laksa.zil.messenger

#### Methods

- [Laksa.zil.checkCode](/api/laksa.zil.html#checkcode)
- [Laksa.zil.checkCodeTest](/api/laksa.zil.html#checkcodetest)
- [Laksa.zil.createMessage](/api/laksa.zil.html#createmessage)
- [Laksa.zil.createTransaction](/api/laksa.zil.html#createtransaction)
- [Laksa.zil.getBalance](/api/laksa.zil.html#getbalance)
- [Laksa.zil.getBlockTransactionCount](/api/laksa.zil.html#getblocktransactioncount)
- [Laksa.zil.getBlockchainInfo](/api/laksa.zil.html#getblockchaininfo)
- [Laksa.zil.getClientVersion](/api/laksa.zil.html#getclientversion)
- [Laksa.zil.getCode](/api/laksa.zil.html#getcode)
- [Laksa.zil.getDSBlockListing](/api/laksa.zil.html#getdsblocklisting)
- [Laksa.zil.getDsBlock](/api/laksa.zil.html#getdsblock)
- [Laksa.zil.getGasEstimate](/api/laksa.zil.html#getgasestimate)
- [Laksa.zil.getGasPrice](/api/laksa.zil.html#getgasprice)
- [Laksa.zil.getHashrate](/api/laksa.zil.html#gethashrate)
- [Laksa.zil.getLatestDsBlock](/api/laksa.zil.html#getlatestdsblock)
- [Laksa.zil.getLatestTxBlock](/api/laksa.zil.html#getlatesttxblock)
- [Laksa.zil.getNetworkId](/api/laksa.zil.html#getnetworkid)
- [Laksa.zil.getNodeMining](/api/laksa.zil.html#getnodemining)
- [Laksa.zil.getNumTxnsDSEpoch](/api/laksa.zil.html#getnumtxnsdsepoch)
- [Laksa.zil.getNumTxnsTxEpoch](/api/laksa.zil.html#getnumtxnstxepoch)
- [Laksa.zil.getProtocolVersion](/api/laksa.zil.html#getprotocolversion)
- [Laksa.zil.getSmartContractCode](/api/laksa.zil.html#getsmartcontractcode)
- [Laksa.zil.getSmartContractInit](/api/laksa.zil.html#getsmartcontractinit)
- [Laksa.zil.getSmartContractState](/api/laksa.zil.html#getsmartcontractstate)
- [Laksa.zil.getSmartContracts](/api/laksa.zil.html#getsmartcontracts)
- [Laksa.zil.getTransaction](/api/laksa.zil.html#gettransaction)
- [Laksa.zil.getTransactionHistory](/api/laksa.zil.html#gettransactionhistory)
- [Laksa.zil.getTransactionListing](/api/laksa.zil.html#gettransactionlisting)
- [Laksa.zil.getTransactionReceipt](/api/laksa.zil.html#gettransactionreceipt)
- [Laksa.zil.getTxBlock](/api/laksa.zil.html#gettxblock)
- [Laksa.zil.getTxBlockListing](/api/laksa.zil.html#gettxblocklisting)
- [Laksa.zil.isConnected](/api/laksa.zil.html#isconnected)

#### Sub Objects

- [Laksa.zil.config](/api/laksa.zil.html#config)
- [Laksa.zil.clientVersion](/api/laksa.zil.html#clientversion)
- [Laksa.zil.hashrate](/api/laksa.zil.html#hashrate)
- [Laksa.zil.networkId](/api/laksa.zil.html#networkid)
- [Laksa.zil.nodeMining](/api/laksa.zil.html#nodemining)
- [Laksa.zli.protocolVersion](/api/laksa.zil.html#protocolversion)

---

## Methods

---

### checkCode

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### checkCodeTest

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### createMessage

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### createTransaction

Create Transaction from `Address` to `Address`

::: tip
There some important concepts needed to explain.

Before you start using this method,

we recommend you to read [this guide](/guide/QuickTutorial.html) first.
:::

#### Typed

```flow
 createTransaction(signedTransaction:object<T>, callback?: void)=> Promises<Error|string>;
```

#### parameters

- 1.  `object`- required, a **SIGNED** transaction object,should use `zil.util.createTransactionJson` to generate it first.

      | key       | type     | required? | reference/example | description                                 |
      | :-------- | :------- | :-------- | :---------------- | :------------------------------------------ |
      | amount    | `BNum`   | yes       | `BNum`            | Transaction amount to be send               |
      | code      | `string` | no        | `scilla code`     | Smart Contract Code                         |
      | data      | `string` | no        | `scilla data`     | Data that evoked to the contract            |
      | gasLimit  | `number` | yes       | `GasLimit`        | Maximum gas to be proccessd                 |
      | gasPrice  | `number` | yes       | `GasPrice`        | Sender defined gas fee per unit             |
      | nonce     | `number` | yes       | `Nonce`           | Sender's total Transaction count +1         |
      | pubKey    | `string` | yes       | `PublicKey`       | Sender public key                           |
      | signature | `string` | yes       | `Signature`       | An EC-Schnorr signature to this transaction |
      | to        | `string` | yes       | `Address`         | Address that transaction to be send         |
      | version   | `string` | yes       | 0                 | The current version                         |

- 2.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|string>` return an transaction id if transaction is made, otherwise return Error.

#### usage

```javascript
// suppose Laksa is initialized

const signedTransactionObject = {
  amout: {
    negative: 0,
    words: Array(2),
    length: 1,
    red: null
  },
  code: "scilla code",
  data: "[{'vname':'dummy','type':'String','value':'ASDF'}]",
  gasLimit: 50,
  gasPrice: 1,
  nonce: 2,
  pubKey: "0246e7178dc8253201101e18fd6f6eb9972451d121fc57aa2a06dd5c111e58dc6a",
  signature:
    "1ff6d491782466992fd90947663b7dc67e62dc989f71b7d5e081e6bba09eca379c76a8d040d60397c715ea4b7417329ce0a99dc5753eb29917cf428f0d1b366a",
  to: "0000000000000000000000000000000000000000",
  version: 0
};

// use callback to get the result
Laksa.zil.createTransaction(signedTransactionObject, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.createTransaction(signedTransactionObject).then(console.log);
```

---

### getBalance

Get Balance for address

#### Typed

```flow
 getBalance({ address: string }, callback?: void)=> Promises<Error|object<T>>;
```

#### parameters

- 1.  `object`- required, see below

      | key     | type     | required? | example   | description      |
      | :------ | :------- | :-------- | :-------- | :--------------- |
      | address | `string` | yes       | `Address` | address to query |

- 2.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|object<T>>` balance object, otherwise Error
  - `nonce`: `number`- current address's nonce
  - `balance`: `number` - current address's balance

#### usage

```javascript
//suppose Laksa is initialized

const address = "9bfec715a6bd658fcb62b0f8cc9bfa2ade71434a";

// use callback to get the result
Laksa.zil.getBalance({ address: address }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.getBalance({ address: address }).then(console.log);
```

---

### getBlockTransactionCount

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

### getBlockchainInfo

Get detail info of current blockchain

#### Typed

```flow
 getBlockchainInfo(callback?: void)=> Promises<Error|object<T>>;
```

#### parameters

- 1.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|object<T>>` Return blockchain detail info object, otherwise Error，
  - `CurrentDSEpoch`: `string`- **to be implemented**
  - `CurrentMiniEpoch`: `string`- **to be implemented**
  - `DSBlockRate`: `number`- **to be implemented**
  - `NumDSBlocks`: `string`- **to be implemented**
  - `NumPeers`: `number`- **to be implemented**
  - `NumTransactions`: `string`- **to be implemented**
  - `NumTxBlocks`: `string`- **to be implemented**
  - `NumTxnsDSEpoch`: `string`- **to be implemented**
  - `NumTxnsTxEpoch`: `number`- **to be implemented**
  - `ShardingStructure`: `object<T>`- **to be implemented**
    - `NumPeers`: `Array<number>`- **to be implemented**
  - `TransactionRate`: `number`- **to be implemented**
  - `TxBlockRate`: `number`- **to be implemented**

#### usage

```javascript
// suppose Laksa is initialized

// use callback to get the result
Laksa.zil.getBlockchainInfo((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.getBlockchainInfo().then(console.log);
```

---

### getClientVersion

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### getCode

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### getDSBlockListing

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### getDsBlock

Get DSBlock info from BlockNumber

#### Typed

```flow
 DSBlock({ blockNumber: string }, callback?: void)=> Promises<Error|object<T>>;
```

#### parameters

- 1.  `object`- required, see below

      | key         | type     | required? | example       | description           |
      | :---------- | :------- | :-------- | :------------ | :-------------------- |
      | blockNumber | `string` | yes       | `BlockNumber` | block number to query |

- 2.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|object<T>>` Block info,otherwise Error
  - `header`:`object<T>`
    - `blockNum`:`string`- **to be implemented**
    - `difficulty`:`number`- **to be implemented**
    - `leaderPubkey`:`string`- **to be implemented**
    - `minerPubkey`:`string`- **to be implemented**
    - `nonce`:`string`- **to be implemented**
    - `prevhash`:`string`- **to be implemented**
    - `timestamp`:`string`- **to be implemented**
  - `signature`:`string`- **to be implemented**

#### usage

```javascript
// // suppose Laksa is initialized

const blockNumber = "10799";

// use callback to get the result
Laksa.zil.getDsBlock({ blockNumber: blockNumber }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.getDsBlock({ blockNumber: blockNumber }).then(console.log);
```

---

### getGasEstimate

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### getGasPrice

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### getHashrate

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### getLatestDsBlock

Returns the most recent DS block

#### Typed

```flow
 getLatestDsBlock( callback?: void)=> Promises<Error|object<T>>;
```

#### parameters

- 1.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|object<T>>` DS Block Object,see[getDsBlock](/api/laksa.zil.html#getDsBlock) ,otherwise Error

#### usage

```javascript
// suppose Laksa is initialized

// use callback to get the result
Laksa.zil.getLatestDsBlock((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.getLatestDsBlock().then(console.log);
```

---

### getLatestTxBlock

Returns the most recent Tx block

#### Typed

```flow
 getLatestTxBlock( callback?: void)=> Promises<Error|object<T>>;
```

#### parameters

- 1.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|object<T>>` Tx Block Object,see[getTxBlock](/api/laksa.zil.html#getTxBlock) ,otherwise Error

#### usage

```javascript
// suppose Laksa is initialized

// use callback to get the result
Laksa.zil.getLatestTxBlock((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.getLatestTxBlock().then(console.log);
```

---

### getNetworkId

Get Nework Id of current Provider

#### Typed

```flow
 getNetworkId(callback?: void)=> Promises<Error|string>;
```

#### parameters

- 1.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|string>` Network Id string, otherwise Error

#### usage

```javascript
// suppose Laksa is initialized

// use callback to get the result
Laksa.zil.getNetworkId((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.getNetworkId().then(console.log);
```

---

### getNodeMining

Get current node mining status

#### Typed

```flow
 getNodeMining(callback?: void)=> Promises<Error|boolean>;
```

#### parameters

- 1.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|boolean>` Network mining status boolean, otherwise Error

#### usage

```javascript
// suppose Laksa is initialized

// use callback to get the result
Laksa.zil.getNodeMining((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.getNodeMining().then(console.log);
```

---

### getNumTxnsDSEpoch

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### getNumTxnsTxEpoch

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### getProtocolVersion

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### getSmartContractCode

Get Smart Contract code from smart contract address

#### Typed

```flow
 getSmartContractCode({ address: string }, callback?: void)=> Promises<Error|object<T>>;
```

#### parameters

- 1.  `object`- required, see below

      | key     | type     | required? | example/reference | description            |
      | :------ | :------- | :-------- | :---------------- | :--------------------- |
      | address | `string` | yes       | `Address`         | Smart Contract Address |

- 2.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|object<T>>` Return smart contract code object,otherwise Error
  - `code`:`string` - scilla code string

#### usage

```javascript
// suppose Laksa is initialized

const address = "38149f1bf4160c73c8cac49d8eeed44c3fb86ab4";

// use callback to get the result
Laksa.zil.getSmartContractCode({ address: address }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.getSmartContractCode({ address: address }).then(console.log);
```

---

### getSmartContractInit

Returns the initialization parameters (immutable) of a given smart contract address

#### Typed

```flow
 getSmartContractInit({ address: string }, callback?: void)=> Promises<Error|Array<T>>;
```

#### parameters

- 1.  `object`- required, see below

      | key     | type     | required? | example   | description            |
      | :------ | :------- | :-------- | :-------- | :--------------------- |
      | address | `string` | yes       | `Address` | Smart Contract Address |

- 2.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|Array<T>>` Return smart contract init params array,otherwise Error
  - `T`
    - `type`: `string` - **to be implemented**-
    - `value`: `string` - **to be implemented**-
    - `vname`: `string` - **to be implemented**-

#### usage

```javascript
// suppose Laksa is initialized

const address = "38149f1bf4160c73c8cac49d8eeed44c3fb86ab4";

// use callback to get the result
Laksa.zil.getSmartContractInit({ address: address }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.getSmartContractInit({ address: address }).then(console.log);
```

---

### getSmartContractState

Returns the state variables (mutable) of a given smart contract address

#### Typed

```flow
 getSmartContractState({ address: string }, callback?: void)=> Promises<Error|Array<T>>;
```

#### parameters

- 1.  `object`- required, see below

      | key     | type     | required? | example   | description            |
      | :------ | :------- | :-------- | :-------- | :--------------------- |
      | address | `string` | yes       | `Address` | Smart Contract Address |

- 2.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|Array<T>>` Return smart contract mutable params array,otherwise Error
  - `T`
    - `type`: `string` - **to be implemented**-
    - `value`: `string` - **to be implemented**-
    - `vname`: `string` - **to be implemented**-

#### usage

```javascript
// suppose Laksa is initialized

const address = "38149f1bf4160c73c8cac49d8eeed44c3fb86ab4";

// use callback to get the result
Laksa.zil.getSmartContractState({ address: address }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.getSmartContractState({ address: address }).then(console.log);
```

---

### getSmartContracts

Return list of smart contracts from account address

#### Typed

```flow
 getSmartContracts({ address: string }, callback?: void)=> Promises<Error|Array<T>>;
```

#### parameters

- 1.  `object`- required, see below

      | key     | type     | required? | example    | description |
      | :------ | :------- | :-------- | :--------- | :---------- |
      | address | `string` | yes       | {template} | {template}  |

- 2.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|Array<T>>` {template},otherwise Error
  - `T`
    - `address`:`string` - Smart Contract Address
    - `state`:`Array<T>` - Smart Contract State, see [getSmartContractState](/api/laksa.zil.html#getSmartContractState)

#### usage

```javascript
// suppose Laksa is initialized

const address = "4317141bd3f73b6807f874c3265603e8b69d53d5";

// use callback to get the result
Laksa.zil.getSmartContracts({ address: address }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.getSmartContracts({ address: address }).then(console.log);
```

---

### getTransaction

Return transaction detail object from transaction hash id

#### Typed

```flow
 getTransaction({txHash:string}, callback?: void)=> Promises<Error|object<T>>;
```

#### parameters

- 1.  `object`- required, see below

      | key    | type     | required? | example  | description            |
      | :----- | :------- | :-------- | :------- | :--------------------- |
      | txHash | `string` | yes       | `TxHash` | Hash of transaction id |

- 2.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|object<T>>` Transaction object,otherwise Error
  - `T`
    - `version`:`string` - the current version
    - `nonce`:`string` - Sender's nonce of this transaction
    - `to`:`string` - Destination account address
    - `from`:`string` - Sender account address
    - `amount`:`string` - Transaction amount
    - `pubKey`:`string` - PublicKey of the Sender
    - `signature`:`string`- An EC-Schnorr signature for this transaction

#### usage

```javascript
// suppose Laksa is initialized

const txHash =
  "ef80dab81656c14cde1f93864d38b16b059ffc7cf0457543561d4afe3ca20063";

// use callback to get the result
Laksa.zil.getTransaction({ txHash: txHash }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.getTransaction({ txHash: txHash }).then(console.log);
```

---

### getTransactionHistory

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### getTransactionListing

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### getTransactionReceipt

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### getTxBlock

Returns information about a Transaction block by block number.

#### Typed

```flow
 getTxBlock({ blockNumber: string }, callback?: void)=> Promises<Error|object<T>>;
```

#### parameters

- 1.  `object`- required, see below

      | key         | type     | required? | example | description              |
      | :---------- | :------- | :-------- | :------ | :----------------------- |
      | blockNumber | `string` | yes       | 73062   | transaction block number |

- 2.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|object<T>>` Transaction block detail object,otherwise Error
  - `T`
    - `body` - body object
      - `HeaderSign`:`string` - EC-Schnorr signature
      - `MicroBlockEmpty`:`Array<number>` - **to be implemented**
      - `MicroBlockHashes`:`Array<string>`- **to be implemented**
    - `header` - header object
      - `BlockNum`:`string` - Block number or this transaction block
      - `DSBlockNum`:`string` - DS Block number of this transaction block
      - `GasLimit`:`string` - Gas Limit of this transaction block
      - `MinerPubKey`:`string` - Miner's public key
      - `NumMicroBlocks`:`number` - **to be implemented**
      - `NumTxns`:`number` - **to be implemented**
      - `StateHash`:`string` - **to be implemented**
      - `TimeStamp`:`string` - **to be implemented**
      - `TxnHash`:`string` - **to be implemented**
      - `prevBlockHash`:`string` - **to be implemented**
      - `type`:`number` - **to be implemented**
      - `version`:`number` - **to be implemented**

#### usage

```javascript
// suppose Laksa is initialized

const blockNumber = "73062";

// use callback to get the result
Laksa.zil.getTxBlock({ blockNumber: blockNumber }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.getTxBlock({ blockNumber: blockNumber }).then(console.log);
```

---

### getTxBlockListing

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### isConnected

Check Provider is connected

#### Typed

```flow
 isConnected(callback?: void)=> Promises<Error|boolean>;
```

#### parameters

- 1.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|boolean>` Boolean of connection status,otherwise Error

#### usage

```javascript
// suppose Laksa is initialized

// use callback to get the result
Laksa.zil.isConnected((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.isConnected().then(console.log);
```

---

## Sub Objects

---

### config

return config params

#### Typed

```flow
config :object<T>
```

#### params

no

#### return

- `object`
  - **version**: `string`,
  - **defaultProviderUrl**: `string`,
  - **defaultBlock**: `string`,
  - **defaultAccount**: `string`

#### Usage

```javascript
//suppose Laksa is initialized
Laksa.zil.config;

/**
{ version: '0.0.1',
  defaultProviderUrl: 'http://localhost:4200',
  defaultBlock: 'latest',
  defaultAccount: undefined }
 */
```

---

### clientVersion

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### hashrate

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---

### networkId

Get Nework Id of current Provider

#### Typed

```flow
 networkId: Promises<Error|string>;
```

#### parameters

none

#### returns

- `Promises<Error|string>` Network Id string, otherwise Error

#### usage

```javascript
// suppose Laksa is initialized

// use then to return Promises
Laksa.zil.networkId.then(console.log);
```

---

### nodeMining

Get current node mining status

#### Typed

```flow
 nodeMining: Promises<Error|boolean>;
```

#### parameters

none

#### returns

- `Promises<Error|boolean>` Network mining status boolean, otherwise Error

#### usage

```javascript
// suppose Laksa is initialized

// use then to return Promises
Laksa.zil.nodeMining.then(console.log);
```

---

### protocolVersion

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

---
