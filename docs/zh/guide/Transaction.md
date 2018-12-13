# 交易(Transaction)

## 什么是交易?

交易(Transaction)是每个区块链中的核心逻辑

交易在以下场景中会发生:

1.  地址与地址间发送 Token.
2.  地址于地址间发送消息.
3.  部署或者调用智能合约.

交易 **不会** 在以下场景发生:

1. 帐号的创建和导入
2. 使用 RPC 对区块链信息进行查询

## 应当熟记的交易逻辑

链上的交易逻辑是复杂的，而每个链的处理方式也不太一样

然而在客户端开发的过程中, 交易逻辑的处理基本上大同小异

我们最好牢记在心

为了更好的更容易的理解, 我们采用发送 Token(`Transfer Token`) 作为例子进行讲解.

### 1. 构造一个 Transaction 对象

假设 Alice 想给 Bob 转一些 Token, Alice 应当获知的信息如下:

1. `toAddr`, Bob 的地址
2. `amount`, Bob 想收到的 Token 数量,这里我们假设是 1000 个 Zil
3. `gasLimit`, 交易所消耗的最大 Gas 值, 根据 Zilliqa 的设定, gasLimit 这里需要采用 Long 的数据类型
4. `gasPrice`, 交易所支付给矿工的 Gas 的单笔价值,根据 Zilliqa 的设定, gasPrice 最小值应为 100, 而我们只发送 BN 的数据类型
5. `version`, 协议的版本号, 这里我们设置为默认的 0

然后你就可以使用 `laksa.transactions` 来构造一个 Transaction 对象了

```javascript
/*
    设置toAddr为Bob的地址
    设置amount为1000
    设置gasPrice为默认的100
    设置gasLimit为例子中的1000
    设置version为默认的0
*/

const transaction = laksa.transactions.new({
  toAddr: '9bfec715a6bd658fcb62b0f8cc9bfa2ade71434a',
  amount: laksa.util.toBN(1000),
  gasPrice: laksa.util.toBN(100),
  gasLimit: laska.util.Long.fromNumber(1000),
  version: 0
})
```

### 2. 使用帐号进行签名

做完了上一步，Transaction 对象构造完毕了，但是我们还不能直接向区块链进行发送

就像你使用支票进行支付，必须要签上自己的名字一样。

每一个 Transaction 都要进行签名，而你应该使用帐号进行处理。

首先确保你已经有了一个帐号，导入到 Wallet 或者 Account 对象

然后就使用`signTransaction`方法进行签名

而请记住，`signTransaction`方法会返回一个`Promise`， 因为这个方法的内在逻辑会向区块链请求更新帐号的余额和 nonce 数

而如果你的帐号是加密状态的，请提供密码作为第二个参数传入方法

```javascript
// 假设你使用wallet导入一个账号
// 这个myAccount将包含访问区块链的内置方法

const myAccount = laksa.wallet.importAccountFromPrivateKey(YOUR_KEY)

// 你也可以使用 `new laksa.Modules.Account()` 去构造一个帐号,
// 不过你必须手动构造 Messenger 和 Provider ，才能确保Account包含当前的区块链信息

myAccount.signTransaction(transaction).then(signed => console.log(signed))

// 如果你的帐号加密了，请把密码作为字符串传入第二个参数
// myAccount.signTransaction(transaction,password)
// 完成了加密过程，打印的结果中你可以看到signature这个属性下面有个长长的字符串
```

### 3. 发送已签名的 Transaction 到区块链

完成了签名之后，你就可以发送到区块链了

这里至少有两种途径发送到区块链

使用 `Transaction.sendTransaction()` ，在这之后，将返回 Transaction 对象，你可以继续对它进行操作.
使用 `laksa.zil.createTransaction(SignedTransaction)` ，你可以把签名后的 Transaction 作为参数传入.

然而两种方法有着不一样的输出
第一种, `Transaction` 会作为结果的一部分进行返回, 而你可以使用`then` 对它进行进一步的操作.
第二种, 将只会返回 RPC Response,你必须使用其他方法再对 Transaction 进行操作了.

我们将使用第一种方法来继续我们的教程

```javascript
myAccount
  .signTransaction(transaction)
  .then(signed => signed.sendTransaction())
  .then(sent => console.log(sent))

/**
 * 你会看到一个返回的对象
  {transaction:<Object:Transaction>,response:Response}
 */
```

### 4. 确认一笔交易

在 Transaction 发送的时候，`laksa` 会使用 RPC call.

而 RPC call 会返回一个 Response，如果没有发生错误的情况下，一个包含`TranID`的 Response 对象将会返回，而`TranID`将作为交易的查询单号

然而，并不是每一步交易都最终被区块链所接受，如果

1. 你的交易参数不对，比如 gasLimit/gasPrice 并不符合当前的交易规则.
2. 你的帐号余额不足, `laksa` 不会自动帮你检查, 对于应用开发者,请记得检查并告知用户.
3. 区块链发生了`拥堵` , 又或者有一些不可知的错误发生(真实情况是很复杂的)

因此，我们需要在交易发送之后，进行确认

在上一步中, 我们收到了像这样的对象:

```javascript
{
   transaction:<Object:Transaction>,
   response:<Response>
}
```

你可以看到`transaction` 就是 Transaction 对象本身，而这里已经更新了发送的状态, 我们可以结合`response`中的内容进行进一步处理

```javascript
/**
 * 使用transaction.confirm，并将TranID作为参数传入
 * 这个方法将进行RPC Call，并定时请求查询交易单
 */

myAccount
  .signTransaction(transaction)
  .then(signed => signed.sendTransaction())
  .then(res => res.transaction.confirm(res.response.TranID))
  .then(console.log)

/**
 * 当交易单被确认或者拒绝，你会收到一个回执
 */
```

如果 Transaction 被区块链所接受, 你会获得`Transaction.receipt`，包含一个这样的对象：`{cumulative_gas:string,success:boolean}`

当中， `cumulative_gas` 表示了实际消耗的 Gas 费用.

而`success` 中的 true 或者 false 将表示该交易是否成功完成，即刚才的 1000 Zil 有没有成功到达

如果 Transaction 被`confirm`所确认，返回的 `status` Transaction 对象随之改变.

包含 `REJECTED` 或者 `SUCCESS`，这里`REJECTED`对应着`success:false`，而`SUCCESS`显然对应着`success:true`

如果 Transaction 发送了，而没有被最终区块链所接受，则`SENT`的状态将维持不变。
