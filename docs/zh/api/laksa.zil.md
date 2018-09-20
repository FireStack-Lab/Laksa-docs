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

#### Sub objects

- Laksa.zil.config
- Laksa.zil.clientVersion
- Laksa.zil.hashrate
- Laksa.zil.networkId
- Laksa.zil.nodeMining
- Laksa.zli.protocolVersion

---

## 方法

### checkCode

检查智能合约代码，建议在发送之前执行
该方法连接节点的 scilla-runner

#### Typed

```flow
 checkCode({ code: string }, callback?: void)=> Promises<Error|boolean>;
```

#### 参数

- 1.  `object`- 必须, 见下表

      | 键名 | 类型     | 必须 | 实例           |                         描述 |
      | :--- | :------- | :--- | :------------- | ---------------------------: |
      | code | `string` | 是   | "awesome code" | 智能合约代码，请转换成字符串 |

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

- `Promises<Error|boolean>` 智能合约代码检查结果，报错返回 Error，正常返回 true 或 false

#### 用法

```javascript
//假设 Laksa 已经初始化

const code = "scilla code";

// 使用callback获取结果
Laksa.zil.checkCode({ code: code }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.checkCode({ code: code }).then(console.log);
```

---

### checkCodeTest

检查智能合约代码，建议在发送之前执行
该方法连接节点的 scilla-runner

#### Typed

```flow
 checkCodeTest({ code: string }, callback?: void)=> Promises<Error|boolean>;
```

#### 参数

- 1.  `object`- 必须, 见下表

      | 键名 | 类型     | 必须 | 实例           |                         描述 |
      | :--- | :------- | :--- | :------------- | ---------------------------: |
      | code | `string` | 是   | "awesome code" | 智能合约代码，请转换成字符串 |

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

- `Promises<Error|boolean>` 智能合约代码检查结果，报错返回 Error，正常返回 true 或 false，

#### 用法

```javascript
//假设 Laksa 已经初始化

const code = "scilla code";

// 使用callback获取结果
Laksa.zil.checkCodeTest({ code: code }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.zil.checkCodeTest({ code: code }).then(console.log);
```

---

### 方法模板

{文字模板}

::: warning 警告
这个方法还有开放测试

`不要` 使用！
:::

#### Typed

```flow
 method({ params: type,... }, callback?: void)=> Promises<Error|boolean|string|number|any>;
```

#### 参数

- 1.  `object`- 必须, 见下表

      | 键名   | 类型   | 必须 | 实例       |       描述 |
      | :----- | :----- | :--- | :--------- | ---------: |
      | params | `type` | 是   | {文字模板} | {文字模板} |

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

- `Promises<Error|boolean|string|number|any>` {文字模板}，报错返回 Error，正常返回 true 或 false，

#### 用法

```javascript
//假设 Laksa 已经初始化

const code = "scilla code";

// 使用callback获取结果
// Laksa.zil.checkCodeTest({ code: code }, (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });
//
// // 使用then返回Promises
// Laksa.zil.checkCodeTest({ code: code }).then(console.log);
```
