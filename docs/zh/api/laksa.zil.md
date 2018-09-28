# Laska.zil

访问 zilliqa network 的 Class

#### 用法

```Javascript
const Laksa=require('laksa')
// 或者
import Laksa from 'laksa'

// 初始化
const laksa=new Laksa('https://api-scilla.zilliqa.com')

laksa.zil.*<{Method|Object|Class}>
```

#### Sub Classes

- Laksa.zil.messenger

#### Methods

- [Laksa.zil.checkCode](/zh/api/laksa.zil.html#checkcode)
- [Laksa.zil.checkCodeTest](/zh/api/laksa.zil.html#checkcodetest)
- [Laksa.zil.createMessage](/zh/api/laksa.zil.html#createmessage)
- [Laksa.zil.createTransaction](/zh/api/laksa.zil.html#createtransaction)
- [Laksa.zil.getBalance](/zh/api/laksa.zil.html#getbalance)
- [Laksa.zil.getBlockTransactionCount](/zh/api/laksa.zil.html#getblocktransactioncount)
- [Laksa.zil.getBlockchainInfo](/zh/api/laksa.zil.html#getblockchaininfo)
- [Laksa.zil.getClientVersion](/zh/api/laksa.zil.html#getclientversion)
- [Laksa.zil.getCode](/zh/api/laksa.zil.html#getcode)
- [Laksa.zil.getDSBlockListing](/zh/api/laksa.zil.html#getdsblocklisting)
- [Laksa.zil.getDsBlock](/zh/api/laksa.zil.html#getdsblock)
- [Laksa.zil.getGasEstimate](/zh/api/laksa.zil.html#getgasestimate)
- [Laksa.zil.getGasPrice](/zh/api/laksa.zil.html#getgasprice)
- [Laksa.zil.getHashrate](/zh/api/laksa.zil.html#gethashrate)
- [Laksa.zil.getLatestDsBlock](/zh/api/laksa.zil.html#getlatestdsblock)
- [Laksa.zil.getLatestTxBlock](/zh/api/laksa.zil.html#getlatesttxblock)
- [Laksa.zil.getNetworkId](/zh/api/laksa.zil.html#getnetworkid)
- [Laksa.zil.getNodeMining](/zh/api/laksa.zil.html#getnodemining)
- [Laksa.zil.getNumTxnsDSEpoch](/zh/api/laksa.zil.html#getnumtxnsdsepoch)
- [Laksa.zil.getNumTxnsTxEpoch](/zh/api/laksa.zil.html#getnumtxnstxepoch)
- [Laksa.zil.getProtocolVersion](/zh/api/laksa.zil.html#getprotocolversion)
- [Laksa.zil.getSmartContractCode](/zh/api/laksa.zil.html#getsmartcontractcode)
- [Laksa.zil.getSmartContractInit](/zh/api/laksa.zil.html#getsmartcontractinit)
- [Laksa.zil.getSmartContractState](/zh/api/laksa.zil.html#getsmartcontractstate)
- [Laksa.zil.getSmartContracts](/zh/api/laksa.zil.html#getsmartcontracts)
- [Laksa.zil.getTransaction](/zh/api/laksa.zil.html#gettransaction)
- [Laksa.zil.getTransactionHistory](/zh/api/laksa.zil.html#gettransactionhistory)
- [Laksa.zil.getTransactionListing](/zh/api/laksa.zil.html#gettransactionlisting)
- [Laksa.zil.getTransactionReceipt](/zh/api/laksa.zil.html#gettransactionreceipt)
- [Laksa.zil.getTxBlock](/zh/api/laksa.zil.html#gettxblock)
- [Laksa.zil.getTxBlockListing](/zh/api/laksa.zil.html#gettxblocklisting)
- [Laksa.zil.isConnected](/zh/api/laksa.zil.html#isconnected)

#### 子对象

- [Laksa.zil.config](/zh/api/laksa.zil.html#config)
- [Laksa.zil.clientVersion](/zh/api/laksa.zil.html#clientversion)
- [Laksa.zil.hashrate](/zh/api/laksa.zil.html#hashrate)
- [Laksa.zil.networkId](/zh/api/laksa.zil.html#networkid)
- [Laksa.zil.nodeMining](/zh/api/laksa.zil.html#nodemining)
- [Laksa.zli.protocolVersion](/zh/api/laksa.zil.html#protocolversion)

---

## 方法

---

### checkCode

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### checkCodeTest

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### createMessage

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### createTransaction

从一个地址`Address`创建一个交易到`Address`，包括生成新的合约

::: tip
这里有一些重要的概念需要做出解释.

在使用这个方法之前,

我们推荐你阅读 [这篇指南](/zh/guide/QuickTutorial.html)。
:::

#### Typed

```flow
 createTransaction(signedTransaction:object<T>, callback?: void)=> Promises<Error|string>;
```

#### 参数

- 1.  `object`- required, a **SIGNED** transaction object,
      should use `zil.util.createTransactionJson` to generate it first.

      | 键名      | 类型     | 必须? | 索引/举例     | 说明                    |
      | :-------- | :------- | :---- | :------------ | :---------------------- |
      | amount    | `BNum`   | 是    | `BNum`        | 发送交易使用的 token 数 |
      | code      | `string` | 否    | `scilla code` | 智能合约代码            |
      | data      | `string` | 否    | `scilla data` | 与智能合约交互的数据    |
      | gasLimit  | `number` | 是    | `GasLimit`    | 交易可承受的最大 gas    |
      | gasPrice  | `number` | 是    | `GasPrice`    | 发送方支付的单元 gas    |
      | nonce     | `number` | 是    | `Nonce`       | 发送方的交易单计数器+1  |
      | pubKey    | `string` | 是    | `PublicKey`   | 发送方的公钥            |
      | signature | `string` | 是    | `Signature`   | EC-Schnorr 签名         |
      | to        | `string` | 是    | `Address`     | 交易接收方地址          |
      | version   | `string` | 是    | 0             | 当前版本                |

* 2.  `function`- 可选, 回调函数, 第一个参数为 Error 对象，第二个参数为正常返回结果，建议格式如下:

      ```flow
      function callback(err: Error, data: any): void {
        if (err) {
          // do with error
        }
        // do with data
      }
      ```

#### 返回

- `Promises<Error|string>` 如果交易成功发送，返回一个交易 id, 否则返回报错信息 Error.

#### 使用

```javascript
// 假设 Laksa 已经初始化

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

// 使用callback获取结果
Laksa.zil.createTransaction(signedTransactionObject, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.createTransaction(signedTransactionObject).then(console.log);
```

---

### getBalance

通过地址获得帐号余额对象

#### Typed

```flow
 getBalance({ address: string }, callback?: void)=> Promises<Error|object<T>>;
```

#### 参数

- 1.  `object`- 必须, 见下表

      | 键名    | 类型     | 必须 | 实例      | 描述           |
      | :------ | :------- | :--- | :-------- | :------------- |
      | address | `string` | 是   | `Address` | 需要查询的地址 |

- 2.  `function`- 可选, 回调函数, 第一个参数为 Error 对象，第二个参数为正常返回结果，建议格式如下:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### 返回

- `Promises<Error|object<T>>` 余额对象, 报错返回 Error
  - `nonce`: `number`- 当前地址的 nonce
  - `balance`: `number` - 当前地址的余额

#### 用法

```javascript
//假设 Laksa 已经初始化

const address = "9bfec715a6bd658fcb62b0f8cc9bfa2ade71434a";

// 使用callback获取结果
Laksa.zil.getBalance({ address: address }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.getBalance({ address: address }).then(console.log);
```

---

### getBlockTransactionCount

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### getBlockchainInfo

获取 Blockchain 的详细信息

#### Typed

```flow
 getBlockchainInfo(callback?: void)=> Promises<Error|object<T>>;
```

#### 参数

- 1.  `function`- 可选, 回调函数, 第一个参数为 Error 对象，第二个参数为正常返回结果，建议格式如下:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### 返回

- `Promises<Error|object<T>>` 返回 Blockchain 信息对象，报错返回 Error，正常返回 true 或 false，
  - `CurrentDSEpoch`: `string`- **需要补充**
  - `CurrentMiniEpoch`: `string`- **需要补充**
  - `DSBlockRate`: `number`- **需要补充**
  - `NumDSBlocks`: `string`- **需要补充**
  - `NumPeers`: `number`- **需要补充**
  - `NumTransactions`: `string`- **需要补充**
  - `NumTxBlocks`: `string`- **需要补充**
  - `NumTxnsDSEpoch`: `string`- **需要补充**
  - `NumTxnsTxEpoch`: `number`- **需要补充**
  - `ShardingStructure`: `object<T>`- **需要补充**
    - `NumPeers`: `Array<number>`- **需要补充**
  - `TransactionRate`: `number`- **需要补充**
  - `TxBlockRate`: `number`- **需要补充**

#### 用法

```javascript
// 假设 Laksa 已经初始化

// 使用callback获取结果
Laksa.zil.getBlockchainInfo((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.getBlockchainInfo().then(console.log);
```

---

### getClientVersion

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### getCode

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### getDSBlockListing

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### getDsBlock

通过 BlockNumber 获取 DS Block 详细信息

#### Typed

```flow
 DSBlock({ blockNumber: string }, callback?: void)=> Promises<Error|object<T>>;
```

#### 参数

- 1.  `object`- 必须, 见下表

      | 键名        | 类型     | 必须 | 实例          | 描述            |
      | :---------- | :------- | :--- | :------------ | :-------------- |
      | blockNumber | `string` | 是   | `BlockNumber` | DS Block 的编号 |

- 2.  `function`- 可选, 回调函数, 第一个参数为 Error 对象，第二个参数为正常返回结果，建议格式如下:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### 返回

- `Promises<Error|object<T>>` DS Block 信息的对象，报错返回 Error
  - `header`:`object<T>`
    - `blockNum`:`string`- **待补充**
    - `difficulty`:`number`- **待补充**
    - `leaderPubkey`:`string`- **待补充**
    - `minerPubkey`:`string`- **待补充**
    - `nonce`:`string`- **待补充**
    - `prevhash`:`string`- **待补充**
    - `timestamp`:`string`- **待补充**
  - `signature`:`string`- **待补充**

#### 用法

```javascript
// 假设 Laksa 已经初始化

const blockNumber = "10799";

// 使用callback获取结果
Laksa.zil.getDsBlock({ blockNumber: blockNumber }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.getDsBlock({ blockNumber: blockNumber }).then(console.log);
```

---

### getGasEstimate

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### getGasPrice

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### getHashrate

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### getLatestDsBlock

获取最新的 DS Block 信息

#### Typed

```flow
 getLatestDsBlock(callback?: void)=> Promises<Error|object<T>>;
```

#### 参数

- 1.  `function`- 可选, 回调函数, 第一个参数为 Error 对象，第二个参数为正常返回结果，建议格式如下:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### 返回

- `Promises<Error|object<T>>` DS block 对象，见[getDsBlock](/zh/api/laksa.zil.html#getDsBlock)，报错返回 Error

#### 用法

```javascript
// 假设 Laksa 已经初始化

// 使用callback获取结果
Laksa.zil.getLatestDsBlock((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.getLatestDsBlock().then(console.log);
```

---

### getLatestTxBlock

获取最新的 Tx Block 信息

#### Typed

```flow
 getLatestTxBlock(callback?: void)=> Promises<Error|object<T>>;
```

#### 参数

- 1.  `function`- 可选, 回调函数, 第一个参数为 Error 对象，第二个参数为正常返回结果，建议格式如下:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### 返回

- `Promises<Error|object<T>>` Tx block 对象，见[getTxBlock](/zh/api/laksa.zil.html#getTxBlock)，报错返回 Error

#### 用法

```javascript
// 假设 Laksa 已经初始化

// 使用callback获取结果
Laksa.zil.getLatestTxBlock((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.getLatestTxBlock().then(console.log);
```

---

### getNetworkId

获取当前 Provider 的网络 ID

#### Typed

```flow
 getNetworkId(callback?: void)=> Promises<Error|string>;
```

#### 参数

- 1.  `function`- 可选, 回调函数, 第一个参数为 Error 对象，第二个参数为正常返回结果，建议格式如下:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### 返回

- `Promises<Error|string>` 当前 Provider 的网络 ID 字符串，报错返回 Error

#### 用法

```javascript
// 假设 Laksa 已经初始化

// 使用callback获取结果
Laksa.zil.getNetworkId((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.getNetworkId().then(console.log);
```

---

### getNodeMining

获取当前节点挖矿状态，返回 boolean

#### Typed

```flow
 getNodeMining(callback?: void)=> Promises<Error|boolean>;
```

#### 参数

- 1.  `function`- 可选, 回调函数, 第一个参数为 Error 对象，第二个参数为正常返回结果，建议格式如下:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### 返回

- `Promises<Error|boolean>` 当前节点挖矿状态，返回 boolean，报错返回 Error

#### 用法

```javascript
// 假设 Laksa 已经初始化

// 使用callback获取结果
Laksa.zil.getNodeMining((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.getNodeMining().then(console.log);
```

---

### getNumTxnsDSEpoch

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### getNumTxnsTxEpoch

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### getProtocolVersion

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### getSmartContractCode

通过合约地址获取智能合约代码

#### Typed

```flow
 getSmartContractCode({ address: address}, callback?: void)=> Promises<Error|object<T>>;
```

#### 参数

- 1.  `object`- 必须, 见下表

      | 键名    | 类型   | 必须 | 实例      | 描述                 |
      | :------ | :----- | :--- | :-------- | :------------------- |
      | address | `type` | 是   | `Address` | 已部署的智能合约地址 |

- 2.  `function`- 可选, 回调函数, 第一个参数为 Error 对象，第二个参数为正常返回结果，建议格式如下:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### 返回

- `Promises<Error|object<T>>` 智能合约代码，字符串，报错返回 Error
  - `code`:`string` - 智能合约 scilla 代码

#### 用法

```javascript
// 假设 Laksa 已经初始化

const address = "38149f1bf4160c73c8cac49d8eeed44c3fb86ab4";

// 使用callback获取结果
Laksa.zil.getSmartContractCode({ address: address }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.getSmartContractCode({ address: address }).then(console.log);
```

---

### getSmartContractInit

获取 Smartcontra 的初始化参数

#### Typed

```flow
 getSmartContractInit({ address: string }, callback?: void)=> Promises<Error|Array<T>>;
```

#### 参数

- 1.  `object`- 必须, 见下表

      | 键名    | 类型     | 必须 | 实例      | 描述                 |
      | :------ | :------- | :--- | :-------- | :------------------- |
      | address | `string` | 是   | `Address` | 已部署的智能合约地址 |

- 2.  `function`- 可选, 回调函数, 第一个参数为 Error 对象，第二个参数为正常返回结果，建议格式如下:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### 返回

- `Promises<Error|Array<T>>` 返回智能合约的初始化参数列表，报错返回 Error
  - `T`
    - `type`: `string` - **待补充**-
    - `value`: `string` - **待补充**-
    - `vname`: `string` - **待补充**-

#### 用法

```javascript
// 假设 Laksa 已经初始化

const address = "38149f1bf4160c73c8cac49d8eeed44c3fb86ab4";

// 使用callback获取结果
Laksa.zil.getSmartContractInit({ address: address }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.getSmartContractInit({ address: address }).then(console.log);
```

---

### getSmartContractState

获取 Smartcontra 的状态参数（可变变量）

#### Typed

```flow
 getSmartContractState({ address: string }, callback?: void)=> Promises<Error|Array<T>>;
```

#### 参数

- 1.  `object`- 必须, 见下表

      | 键名    | 类型     | 必须 | 实例      | 描述                 |
      | :------ | :------- | :--- | :-------- | :------------------- |
      | address | `string` | 是   | `Address` | 已部署的智能合约地址 |

- 2.  `function`- 可选, 回调函数, 第一个参数为 Error 对象，第二个参数为正常返回结果，建议格式如下:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### 返回

- `Promises<Error|Array<T>>` 返回智能合约的状态变量参数列表，报错返回 Error
  - `T`
    - `type`: `string` - **待补充**-
    - `value`: `string` - **待补充**-
    - `vname`: `string` - **待补充**-

#### 用法

```javascript
// 假设 Laksa 已经初始化

const address = "38149f1bf4160c73c8cac49d8eeed44c3fb86ab4";

// 使用callback获取结果
Laksa.zil.getSmartContractState({ address: address }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.getSmartContractState({ address: address }).then(console.log);
```

---

### getSmartContracts

通过帐号地址获取其部署的智能合约列表

#### Typed

```flow
 getSmartContracts({ address: address}, callback?: void)=> Promises<Error|Array<T>>;
```

#### 参数

- 1.  `object`- 必须, 见下表

      | 键名    | 类型     | 必须 | 实例      | 描述     |
      | :------ | :------- | :--- | :-------- | :------- |
      | address | `string` | 是   | `Address` | 帐号地址 |

- 2.  `function`- 可选, 回调函数, 第一个参数为 Error 对象，第二个参数为正常返回结果，建议格式如下:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### 返回

- `Promises<Error|Array<T>>` 返回智能合约列表，报错返回 Error
  - `T`
    - `address`:`string` - 智能合约地址
    - `state`:`Array<T>` - 智能合约状态, 查看 [getSmartContractState](/zh/api/laksa.zil.html#getSmartContractState)

#### 用法

```javascript
// 假设 Laksa 已经初始化

const address = "4317141bd3f73b6807f874c3265603e8b69d53d5";

// 使用callback获取结果
Laksa.zil.getSmartContracts({ address: address }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.getSmartContracts({ address: address }).then(console.log);
```

---

### getTransaction

通过交易 HashID 获取交易详细信息

#### Typed

```flow
 getTransaction({txHash: string}, callback?: void)=> Promises<Error|boolean|string|number|any|object<T>>;
```

#### 参数

- 1.  `object`- 必须, 见下表

      | 键名   | 类型     | 必须 | 实例     | 描述          |
      | :----- | :------- | :--- | :------- | :------------ |
      | txHash | `string` | yes  | `TxHash` | 交易的 HashId |

- 2.  `function`- 可选, 回调函数, 第一个参数为 Error 对象，第二个参数为正常返回结果，建议格式如下:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### 返回

- `Promises<Error|object<T>>` {文字模板}，报错返回 Error
- `T`
  - `version`:`string` - 当前版本
  - `nonce`:`string` - 发送方在当前交易的 nonce
  - `to`:`string` - 接受方地址
  - `from`:`string` - 发送方帐号地址
  - `amount`:`string` - 交易数量
  - `pubKey`:`string` - 发送方的公钥
  - `signature`:`string`- 交易的 EC-Schnorr 签名

#### 用法

```javascript
// 假设 Laksa 已经初始化

const txHash =
  "ef80dab81656c14cde1f93864d38b16b059ffc7cf0457543561d4afe3ca20063";

// 使用callback获取结果
Laksa.zil.getTransaction({ txHash: txHash }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.getTransaction({ txHash: txHash }).then(console.log);
```

---

### getTransactionHistory

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### getTransactionListing

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### getTransactionReceipt

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### getTxBlock

通过 BlockNumber 获取 Tx Block 的信息

#### Typed

```flow
 getTxBlock({ blockNumber: string }, callback?: void)=> Promises<Error|object<T>>;
```

#### 参数

- 1.  `object`- 必须, 见下表

      | 键名        | 类型     | 必须 | 实例  | 描述                     |
      | :---------- | :------- | :--- | :---- | :----------------------- |
      | blockNumber | `string` | yes  | 73062 | transaction block number |

- 2.  `function`- 可选, 回调函数, 第一个参数为 Error 对象，第二个参数为正常返回结果，建议格式如下:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### 返回

- `Promises<Error|object<T>>` TxBlock 对象,报错返回 Error
  - `T`
    - `body` - body 对象
      - `HeaderSign`:`string` - EC-Schnorr 签名
      - `MicroBlockEmpty`:`Array<number>` - **to be implemented**
      - `MicroBlockHashes`:`Array<string>`- **to be implemented**
    - `header` - header 对象
      - `BlockNum`:`string` - TxBlock 的编号
      - `DSBlockNum`:`string` - DS Block 的编号
      - `GasLimit`:`string` - TxBlock 含有的 Gas Limit
      - `MinerPubKey`:`string` - 矿工的公钥
      - `NumMicroBlocks`:`number` - **待补充**
      - `NumTxns`:`number` - **待补充**
      - `StateHash`:`string` - **待补充**
      - `TimeStamp`:`string` - **待补充**
      - `TxnHash`:`string` - **待补充**
      - `prevBlockHash`:`string` - **待补充**
      - `type`:`number` - **待补充**
      - `version`:`number` - **待补充**

#### 用法

```javascript
// 假设 Laksa 已经初始化

const blockNumber = "73062";

// 使用callback获取结果
Laksa.zil.getTxBlock({ blockNumber: blockNumber }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.getTxBlock({ blockNumber: blockNumber }).then(console.log);
```

---

### getTxBlockListing

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### isConnected

检查当前 Provider 连接状态

#### Typed

```flow
 isConnected(callback?: void)=> Promises<Error|boolean>;
```

#### 参数

- 1.  `function`- 可选, 回调函数, 第一个参数为 Error 对象，第二个参数为正常返回结果，建议格式如下:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### 返回

- `Promises<Error|boolean>` 当前 Provider 连接状态，报错返回 Error

#### 用法

```javascript
// 假设 Laksa 已经初始化

// 使用callback获取结果
Laksa.zil.isConnected((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.isConnected().then(console.log);
```

---

## 子对象

---

### config

返回当前的 config 参数

#### Typed

```flow
config :object<T>
```

#### 参数

无

#### 返回

- `object`
  - **version**: `string`,
  - **defaultProviderUrl**: `string`,
  - **defaultBlock**: `string`,
  - **defaultAccount**: `string`

#### 用法

```javascript
//假设 Laksa 已经初始化
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

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### hashrate

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---

### networkId

获取当前 Provider 的网络 ID

#### Typed

```flow
 networkId: Promises<Error|string>;
```

#### 参数

无

#### 返回

- `Promises<Error|string>` 当前 Provider 的网络 ID 字符串，报错返回 Error

#### 用法

```javascript
// 假设 Laksa 已经初始化

// 使用then返回Promises
Laksa.zil.networkId.then(console.log);
```

---

### nodeMining

获取当前节点挖矿状态，返回 boolean

#### Typed

```flow
 nodeMining: Promises<Error|boolean>;
```

#### 参数

无

#### 返回

- `Promises<Error|boolean>` 当前节点挖矿状态，返回 boolean，报错返回 Error

#### 用法

```javascript
// 假设 Laksa 已经初始化

// 使用then返回Promises
Laksa.zil.nodeMining.then(console.log);
```

---

### protocolVersion

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

---
