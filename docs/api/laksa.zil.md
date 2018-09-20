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

- Laksa.zil.config
- Laksa.zil.clientVersion
- Laksa.zil.hashrate
- Laksa.zil.networkId
- Laksa.zil.nodeMining
- Laksa.zli.protocolVersion

---

## Methods

### checkCode

Check SmartContract code, use it before transaction
It will connect to provider's scilla-runner

#### Typed

```flow
 checkCode({ code: string }, callback?: void)=> Promises<Error|boolean>;
```

#### parameters

- 1.  `object`- required, see below

      | key  | type     | required? | example        | description |
      | :--- | :------- | :-------- | :------------- | ----------: |
      | code | `string` | yes       | "awesome code" | code string |

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

- `Promises<Error|boolean>` code check result，either Error, true or false

#### usage

```javascript
//suppose Laksa is initialized

const code = "scilla code";

// use callback to get the result
Laksa.zil.checkCode({ code: code }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.checkCode({ code: code }).then(console.log);
```

---

### checkCodeTest

Check SmartContract code, use it before transaction
It will connect to provider's scilla-runner

#### Typed

```flow
 checkCodeTest({ code: string }, callback?: void)=> Promises<Error|boolean>;
```

#### parameters

- 1.  `object`- required, see below

      | key  | type     | required? | example        | description |
      | :--- | :------- | :-------- | :------------- | ----------: |
      | code | `string` | yes       | "awesome code" | code string |

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

- `Promises<Error|boolean>` code check result，either Error, true or false，

#### usage

```javascript
//suppose Laksa is initialized

const code = "scilla code";

// use callback to get the result
Laksa.zil.checkCodeTest({ code: code }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to return Promises
Laksa.zil.checkCodeTest({ code: code }).then(console.log);
```

---

### createMessage

Send message to some address

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

#### Typed

```flow
 createMessage({ to: string,from?:string,gas?:number,gasPrice:number }, callback?: void)=> Promises<Error|boolean|string|number|any>;
```

#### parameters

- 1.  `object`- required, see below

      | key      | type     | required? | example   |                       description |
      | :------- | :------- | :-------- | :-------- | --------------------------------: |
      | to       | `string` | yes       | `Address` |      address that message sent to |
      | from     | `string` | no        | `Address` |    address that message sent from |
      | gas      | `number` | no        | 10        | gas that message will be consumed |
      | gasPrice | `number` | no        | 10        | gas that message will be consumed |

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

- `Promises<Error|boolean|string|number|any>` {template}，either Error, true or false，

#### usage

```javascript
//suppose Laksa is initialized

// const code = "scilla code";
//
// // use callback to get the result
// Laksa.zil.checkCodeTest({ code: code }, (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });
//
// // use then to return Promises
// Laksa.zil.checkCodeTest({ code: code }).then(console.log);
```
