# 快速教程

欢迎来到快速教程

经过上一章，您应该知道如何在 `NodeJS` 或者 `Html`，安装`Laksa`

如果还没有的话，请回到[安装](/zh/guide/#install)章节查看说明

在这个教程当中,

- 我们使用 `es6` 标准代码进行编写和演示.
- 我们假设你在 `nodejs` 或者在现代浏览器的 `html` 中进行开发

## 用 `Laksa` 连接 区块链提供方

1.  引入 `Laksa` 库文件.

```javascript
// 如果在更高级一些的Javascript的运行环境
// 你可以使用 `import Laksa from 'laksa'`
const Laksa = require('laksa')
```

2.  对 `Laksa` 初始化

```javascript
// Laska 是一个类，同时也是构造函数.
// 所以你要用 `new` 这个语法来把它初始化.
// 像这样:
const laksa = new Laksa()

// 如果你将 "http/https url" 作为参数, 将会同时给Laska设置HttpProvider,
// 当然在后文，你会发现使用setProvider也会很方便.
const laksa = new Laksa('https://api-scilla.zilliqa.com')
```

3.  设置 NodeProvider 为`TestNet`,并且设置 ScillaProvider 为`ScillaRunner`

```javascript
// 当你做完了上一步，你就可以使用大部分Laksa的能力了
// 不过如果你像连接到Zilliqa的TestNet，使用网络功能
// 就必须为Laksa设置NodeProvider，像这样

laksa.setNodeProvider("https://api-scilla.zilliqa.com");

// 我们使用远端的scillarunner作为智能合约代码的检查工具
// 最好使用这里的方法进行设置

laksa.setScillaProvider('https://scilla-runner.zilliqa.com)
```

4.  检查 Provider 连接性

```javascript
// Zilliqa TestNet 是一个远端的提供方,
// 如果我们正确的设置了provider
// 就可以使用isConnected()函数来查看是否已经正确连接
// 在Laksa, 所有的网络函数返回的结果将是Promises，因此你需要异步解析结果
laksa.isConnected().then(console.log)

// 打印的结果如果为true，说明你正确连接了,
// 那么恭喜你! 你已经上链了！
```

5.  完整的代码在这里:

```javascript
// 1.  引入 `Laksa` 库文件.
const Laksa = require('laksa')

// 2.  对 `Laksa` 初始化
const laksa = new Laksa()

// 3.  设置 Provider 为`TestNet`
laksa.setNodeProvider('https://api-scilla.zilliqa.com')

// 4.  检查Provider连接性
laksa.isConnected().then(console.log)
```

让我们来稍微小结一下。

- 请确保`Laksa`正确的引入
- 使用`new`语法进行初始化，填入 Provider 的 url 作为参数都是可选的
- 你可以使用 `setProvider()` 函数设置 Provider, 随时都可以进行使用
- `Laksa` 中的网络函数都会返回 Promises, 我们需要异步调用并解析结果

## 创建一个 Zilliqa 区块链帐号

就像现实世界，你可以在钱包中插入很多的信用卡或银行卡。一个区块链钱包也可以保存多个区块链帐号

在区块链生态系统中，区块链帐号是一个最基本也是最重要的部分。一个区块链帐号，将包括一对秘钥以及一个地址。

我们简化了一些解释，像这样：

- **Private Key（私钥）**: 长度 40 个字节，用来对交易或者消息进行签名，对于帐号拥有者来说，这是唯一的解密钥匙。意味着，谁拥有了秘钥，谁就拥有了帐号。因此，在任何情况下，**不要丢了，而且别告诉任何人**

* **Public Key（公钥）**: 这是由秘钥计算出来的结果，就像你的公开的身份证号码一样。第三方应用或者交易，将公钥来获得你的公开信息。通常，公钥用于绝大部分的交易的初始化过程。

- **Address（地址）**: 这个比较容易理解，就像银行帐号或者 Email 一样，别人可以转账或者发送交易到这个地址上，而不用担心发错给其他人。

通过 `Laksa`, 你很容易就能创建一个钱包
上文中，你已经引入了`Laksa`库
现在就使用`Laksa.wallet` 完成后面的工作吧

```javascript
// 引入 laksa ,初始化
const Laksa = require('laksa')
const laksa = new Laksa()

// 手动设置Provider
laksa.setNodeProvider('https://scilla-api.zilliqa.com')

// 提取wallet子类
const { wallet } = laksa

// 使用createAccount()创建帐号
const newAccount = wallet.createAccount()

// 检查帐号是否被创建
console.log(newAccount)
```

打印出来的结果应该像这样:

```bash
{
privateKey:
   'a47ff786beb69236f134a259ba5727bdf605a306a20c25230956648ce3b1b399',
  address: '9de46b2fe88f1328bd973557568b24ce271cbc97',
  publicKey:
   '02c6bd03631cb668886b329a53889f231fbcb6e235cd1eba4e8a9e17d17292a725',
  createTime: 2018-09-19T04:36:11.945Z,
  index: 0
}
```

现在，你可以看到 `privateKey` , `publicKey` 和 `address`, 同时还包含了 `createTime` 和 `index`.

恭喜你! 你拥有了一个区块链帐号！.

接下来，我们来看看 wallet 还能干些什么.

## 管理你的钱包和帐号

刚才，你创建了一个帐号，使用`Laksa.wallet.createAccount()`。那么你可能会想，帐号存放在那里，我怎么去管理它呢？

`Laksa.wallet` 提供了一系列的功能帮助你去管理钱包和帐号，包括但不限于：

- accounts
- addAccount
- cleanAllAccounts
- createAccount
- createBatchAccounts
- decryptAccountByAddress
- decryptAllAccounts
- encryptAccountByAddress
- encryptAllAccounts
- getAccountByAddress
- getAccountByIndex
- getCurrentMaxIndex
- getIndexKeys
- getWalletAddresses
- getWalletPrivateKeys
- getWalletPublicKeys
- importAccountFromPrivateKey
- importAccountsFromPrivateKeyList
- removeOneAccountByAddress
- removeOneAccountByIndex
- updateAccountByAddress
- updateLength

我的天……看上去很多啊。是的，我们会在未来的版本中简化这些函数。不过现在我们还是建议你了解它们中的一部分。所有的功能你都可以在 API 索引中找到。

### `accounts` 数组

- 它是一个在`Laksa.wallet`中内置的数组
- 它用来存放创建或者导入到钱包的帐号
- 所有的`增删查改`操作，都会经过它
- 它只是一个简单的状态管理工具，**不是** 一个持久化保存的寄存器
- 在未来版本中，我们会考虑将它升级为不可变列表（`Immutable List`）

::: warning 警告
`accounts` 数组将会在未来版本中，升级为不可变（ `Immutable`）列表.

届时，你将使用内置的函数对它进行操作。

否则，直接对 accounts 进行操作将会报错，并中止处理过程。
:::

我们假设你通过上面的代码创建了一个帐号，新的帐号将加入到`accounts`数组中，你可以通过下面的代码进行检查

```javascript
...
// 帐号已经通过上面的代码创建
// 访问wallet.accounts
const walletAcconts=wallet.accounts

// 打印出来
console.log(walletAcconts)
```

那么打印输出将像这样:

```bash
[
  '9de46b2fe88f1328bd973557568b24ce271cbc97',
  '9de46b2fe88f1328bd973557568b24ce271cbc97':
  {
    privateKey:
     'a47ff786beb69236f134a259ba5727bdf605a306a20c25230956648ce3b1b399',
    address: '9de46b2fe88f1328bd973557568b24ce271cbc97',
    publicKey:
     '02c6bd03631cb668886b329a53889f231fbcb6e235cd1eba4e8a9e17d17292a725',
    createTime: 2018-09-19T04:36:11.945Z,
    index: 0
  }
]
```

我们获得了一个数组，来表达你当前存放的帐号。其结构像这样：

```
  accounts:Array<[address1,...,{address1:account1},...]>
  -------------------
  [
   ${address: String},...,
   {
     ${address: String}:
       {
        privateKey: String,
        address: String,
        publicKey: String,
        createTime: DateTime,
        index: Number
        }
    },...
   ]
```

由于地址(address)对于帐号来说也是唯一性的，我们就可以让地址作为数组的索引。

正如你所见，每个帐号对象还有一个`index`，
这是一个指针，将指向`accounts`的帐号所在的位置

同时, 地址（`address`）这个字符串也将作为帐号的对象的 key 存在.

这样设计，是为了让地址（`address`）也能指向`accounts`数组

也许看看代码，你会更容易理解：

```javascript
// 你可以像使用一般的数组一样，采用指针获得帐号地址
const address_for_the_account = wallet.accounts[0]

console.log(address_for_the_account)
// 打印的结果将是:
// '9de46b2fe88f1328bd973557568b24ce271cbc97'

// 当然了，你知道了地址，也就可以通过地址来获得具体的帐号
const my_account_created = wallet.accounts[address_for_the_account]

console.log(my_account_created)
// 打印的结果将是:
/*
{
  privateKey:
   'a47ff786beb69236f134a259ba5727bdf605a306a20c25230956648ce3b1b399',
  address: '9de46b2fe88f1328bd973557568b24ce271cbc97',
  publicKey:
   '02c6bd03631cb668886b329a53889f231fbcb6e235cd1eba4e8a9e17d17292a725',
  createTime: 2018-09-19T04:36:11.945Z,
  index: 0
}
 */
```

那么小结一下`accounts`：

- 他是一个简单的数组
- 你可以使用 `index` 作为指针获得帐号地址, 就像 `accounts[0]`
- 你可以使用 `address` 获得帐号对象, 就像 `accounts[address]`

然而，每次都对数组进行操作，会导致你想做的功能很复杂，并且容易出错。
我们提供了一些有用的函数来简化操作

### 通过 `address` 或者 `index`来获得帐号对象

`wallet.getAccountByIndex` 和 `wallet.getAccountByAddress`

这两个函数将提供你访问`accounts`数组，并使用`address` 或者 `index`来获得帐号对象

```javascript
// 我们假设你知道了account存储的指针index
const accountQueryByIndex = wallet.getAccountByIndex(0)

console.log(accountQueryByIndex)
// 打印的结果将是:
/*
{
  privateKey:
   'a47ff786beb69236f134a259ba5727bdf605a306a20c25230956648ce3b1b399',
  address: '9de46b2fe88f1328bd973557568b24ce271cbc97',
  publicKey:
   '02c6bd03631cb668886b329a53889f231fbcb6e235cd1eba4e8a9e17d17292a725',
  createTime: 2018-09-19T04:36:11.945Z,
  index: 0
}
 */

// 我们假设你知道了存储的帐号地址
const accountQueryByAddress = wallet.getAccountByAddress(
  address_for_the_account
)

console.log(accountQueryByAddress)
// 打印的结果将是:
/*
 {
   privateKey:
    'a47ff786beb69236f134a259ba5727bdf605a306a20c25230956648ce3b1b399',
   address: '9de46b2fe88f1328bd973557568b24ce271cbc97',
   publicKey:
    '02c6bd03631cb668886b329a53889f231fbcb6e235cd1eba4e8a9e17d17292a725',
   createTime: 2018-09-19T04:36:11.945Z,
   index: 0
 }
  */
```

以上是两个不同的函数，得到了统一个帐号对象
你可以对比一下两个函数获得的结果，结果将返回`true`

```javascript
console.log(Object.is(accountQueryByIndex, accountQueryByAddress))
// 打印结果将是:
// true
```

### 用自定义密码对帐号加密

如前文所说，私钥是区块链生态中最重要的组成部分

我们最好不要让其他人获得私钥

你可以将私钥存储在“离线”的硬件设备当中，或者用干净的白纸把它写下来

然而，`Laksa`还是提供了一套简单的加密手段，使用密码作为参数传入加密参数。
保护你的私钥

还是直接看代码吧：

```javascript
// 我们假设你已经知道对了帐号地址
// 现在使用`encryptAccountByAddress`，传入两个参数：address，password
// address应该是存储在`accounts`数组中的地址
// password 应该是你自己写入的字符串，不要太简单，不过要好记，像这样

wallet.encryptAccountByAddress(
  address_for_the_account,
  'I(dont+want@Any#Body%see^this:233333'
)

// 检查一下帐号是否正确加密了

const account_is_encrypted = wallet.getAccountByAddress(address_for_the_account)

// 打印一下结果
console.log(account_is_encrypted)
```

打印的结果就像这样

```bash
{
  privateKey: Symbol(ENCRYPTED),
  address: 'fa5476d90778cdf19b45236f2abcee25d907ecaa',
  publicKey:
   '03f374de17554c8e84cab6872f39cf855194d26ff9cacda3b46ea1e6974878186c',
  createTime: 2018-09-19T05:40:14.858Z,
  index: 0,
  version: 3,
  id: '0447ca70-1236-40f1-a82b-b8423513625b',
  crypto:
   {
     ciphertext:
      'U2FsdGVkX1+5noHAqeMRweCIfsThIM5QBN+lQx40nk8dEwTOIpsEGq71UpepgRPpYmWDN+s/K7wZJ+eIXs/byWLWGq/R7JN7rnMD7gCUCJ0VpIXM8h/rwDnBf+hXSVjz',
     cipherparams: {
        iv: 'a70b642ae82cb884ed16799e3de84c41'
      },
     cipher: 'aes-128-ctr',
     kdf: 'pbkdf2',
     kdfparams:
      {
      dklen: 32,
        salt:
         '90604f71b25392fd8feeac6ceaeadf61829fde3f59725f5fd02ef400ba917195',
        c: 1000,
        prf: 'hmac-sha256'
      },
     mac:
      '0577143ca4627a215061db4699a1621de5ebc4ad704fa285635900bacbbbce5e4f6fd78c23dcbbcd280a9f84919d0435a90916742ee2ea017610344a762328f8'
    },
  LastEncryptedBy: Symbol(account),
  updatedTime: 2018-09-19T05:40:14.921Z
}
```

现在，你的帐号已经被刚才写入的密码加密了
同时，这个函数将创建一个叫做 crypto 的对象去保护你的私钥，而原本的 privateKey 将显示为'ENCRYPTED'

那么更进一步的，解密函数以及解锁的密码，将会对这个 crypto 对象进行操作
关于 crypto 对象，我们会在后面的文档中详细说明

### 用自定义密码对帐号进行解密

一旦帐号使用加密函数和密码进行加密

只有正确的密码和正确的解密函数才能解锁帐号

与上面的加密函数一样，`Laksa`提供了一个简单的解密函数，传入密码作为阐述可对帐号进行解密

代码时间:

```javascript
// 前面的帐号已经被加密

wallet.decryptAccountByAddress(
  address_for_the_account,
  'I(dont+want@Any#Body%see^this:233333'
)

// 现在看看帐号是不是被正确解密了

const account_is_decrypted = wallet.getAccountByAddress(address_for_the_account)

// 看看打印的结果
console.log(account_is_decrypted)
```

打印的结果将像这样

```bash
{
  privateKey:
   'b493d1a4068b2793b992e22dd9e03ad6040921dafbd31940cb616c087dd9d5e1',
  address: '7f5a3538215d7b5688e473dc46af8929765397a4',
  publicKey:
   '024590700812001eb65629a70b8d705b901fd0ea091a3fdb548303d8794a2757b4',
  createTime: 2018-09-19T05:59:55.360Z,
  index: 0,
  version: 3,
  id: 'ba5d2285-50f7-4f71-849e-1ef17b344859',
  LastEncryptedBy: Symbol(account),
  updatedTime: 2018-09-19T05:59:55.476Z
}
```

如你缩减，crypto 这个对象已经解开并且移除了，而 privateKey 也被解密，恢复成原来的样子

不过我们还有其他的一些东西被创建了进来，如`id`,`LastEncryptedBy`,`version`,`updatedTime`.
我们将会在后面的文档解释这些东西

### 创建多个帐号

像现实世界一样，你可以到不同的银行，创建不同的银行帐号来存取金钱

通过`Laksa`，我们就可以很快的创建多个不同的区块链帐号，存储到`wallet.accounts`数组中，
而只需要一个命令

我们引入了`wallet.createBatchAccounts`

只需要告诉这个函数，你需要多少个帐号

```javascript
// 传入一个数字到createBatchAccounts函数中
// 数字将是大于等于1的整数

const I_Have_A_Lot_Of_Account = wallet.createBatchAccounts(5)
console.log(I_Have_A_Lot_Of_Account)
```

打印的结果就像这样:

```bash
[
  {
    privateKey:
     'cfd464f775df0ec332f312e4c54388f861b0ae652c364e08e99bf55593dd859d',
    address: '08424ed4bb26b8e8643f6b37a7d88471acdf4f0b',
    publicKey:
     '0385f63c2b0bca2e90461a50540579f6b29dedd5a35517e909e8816be37eb55434',
    createTime: 2018-09-19T06:36:22.939Z,
    index: 1
  },
  {
    privateKey:
     '72296510d8c32c1bcf77c3f44c32b245008e29fcccd0fc0fcf98da0b8b1a9944',
    address: 'a39c2d939a31b661c45b45a8b8058a83d769b4c5',
    publicKey:
     '02d2d16d5cc75cacb27e464457a16c25f453b2a427cd51ca74033011402fbce263',
    createTime: 2018-09-19T06:36:22.943Z,
    index: 2
  },
  {
    privateKey:
     '68ba61b89630b9df7560595a09a7e7ec788c12de0d350a31f272568ad27b051c',
    address: '76d8cb722b138b392ff826ee78770ed01bf47bd8',
    publicKey:
     '036b28faee49d2aa81b7759e38eecd181fc1067467905bd052c2a69dbb308df2e2',
    createTime: 2018-09-19T06:36:22.951Z,
    index: 3
  },
  {
    privateKey:
     '415bb4df83457f82bee42ae48d104cd311be0328ee19c453aaeaaf3a5591a94f',
    address: '34a0427cb4bd6125cac8358dc7e5ad3ecea43da3',
    publicKey:
     '02cd22b2d156118f96a16a870f0f1f8cb0030794754ab337588729a01b600337b0',
    createTime: 2018-09-19T06:36:22.954Z,
    index: 4
  },
  {
  privateKey:
     'f066c93f73293f8da24c227a5660fc50a986f4cae1ebac0ee36875ab689c1317',
    address: '81ec803a25488cdf1731c42d674187ac453f6ec8',
    publicKey:
     '023447a6ec7f00e57e86a891d008a411a1ad8fd346262e89a1243598908ad22447',
    createTime: 2018-09-19T06:36:22.958Z,
    index: 5
  }
]
```

请记得, 如果`wallet.accounts`数组中已有现存的帐号，那么新创建的每个帐号的`index`将会自动计算。

### 对所有帐号进行加解密

`Laksa` 提供了函数，可以对所有帐号进行加解密

你可以将密码传递到这些函数上

不过我们需要警告的是，通过对单个帐号加解密和对所有帐号加解密是有一些限制和区别的

原因如下：

- 如果一个帐号需要被加密，你应该使用`wallet.encryptAccountByAddress`，而每个帐号都有一个独立的密码
- 而所有的帐号都需要被加解密，请确保你们都要用统一个密码，这时使用`wallet.encryptAllAccounts`，
  然而，那些已经被加密的帐号就不能被新密码重新加密，因为有可能那些帐号是通过各个不同的密码进行单独加密的。
- 已经被加密的帐号会被`wallet.encryptAllAccounts`所忽略
- 同样，`wallet.decryptAllAccounts`函数的行为也是一样。
  同时，批量的加密过程较为复杂，只要当中有一个帐号使用单独的密码加密，解密过程将被中止

::: warning 警告
我们会在未来版本中优化这些函数
不过我们还是希望尽可能不要在实际的生产环境中使用批量操作
最好是对帐号进行**单独的**加解密
:::

不管如何，我们还是向你演示这些功能：

```javascript
// 假设你要创建一批帐号
const create_My_BatchAccounts = wallet.createBatchAccounts(5)

// 批量加密，密码使用同样的一个字符串
wallet.encryptAllAccounts('I(dont+want@Any#Body%see^this:233333')

// 打印出来
console.log(wallet.accounts)
```

现在所有帐号都加密了，到了解密部分，你可以这样做:

```javascript
// 批量解密，传入密码字符串
wallet.decryptAllAccounts('I(dont+want@Any#Body%see^this:233333')

// 打印他们
console.log(wallet.accounts)
```

### 从钱包中移除帐号

如果你有一个钱包中的帐号想要移除

使用 `wallet.removeOneAccountByAddress` 或者 `wallet.removeOneAccountByIndex`

请记住, `*ByAddress` 将会比 `*ByIndex` 更安全一些

`wallet.removeOneAccountByAddress`:

```javascript
// 创建一个帐号，等会移除它
const an_account_to_be_added_and_remove = wallet.createAccount()

// 获得帐号的地址
const { address } = an_account_to_be_added_and_remove

// 检查帐号是否加入了accounts数组
const is_the_account_added = wallet.getAccountByAddress(address)

console.log(is_the_account_added)

// 使用removeOneAccountByAddress，传入地址
wallet.removeOneAccountByAddress(address)

// 再看看帐号还在不在
const is_the_account_there = wallet.getAccountByAddress(address)

console.log(is_the_account_there)
```

`wallet.removeOneAccountByIndex`:

```javascript
// 创建一个帐号，等会移除它
const an_account_to_be_added_and_remove_byIndex = wallet.createAccount()

// 获得帐号的指针
const { index } = an_account_to_be_added_and_remove_byIndex

// 检查帐号是否添加到accounts数组
const is_the_account_added_byIndex = wallet.getAccountByIndex(index)

console.log(is_the_account_added_byIndex)

// 使用removeOneAccountByIndex，传入指针
wallet.removeOneAccountByIndex(index)

// 检查帐号是否还在不在？
const is_the_account_there_byIndex = wallet.getAccountByIndex(index)

console.log(is_the_account_there_byIndex)
```

### 清空你的钱包

如果你想清空你的钱包，移除所有已创建/导入和保存的帐号

请注意，不要对`wallet.account`直接置为`[]`

::: warning 警告
`accounts` 数组将会在未来版本中，升级为不可变（ `Immutable`）列表。

届时，你将只能使用内置的函数对它进行操作。

否则，直接对 accounts 进行操作将会报错，并中止处理过程。
:::

我们提供了一个清空方法来完成这个工作

```javascript
wallet.cleanAllAccounts()

// 所有帐号将被清空
console.log(wallet.accounts)

// 打印结果将是
// [< ${number} empty items>]
```

### 更多的功能和细节

这仅是一个简单的教程，旨在向你演示一些`Laksa.wallet`的功能和函数

跟过的功能和细节将在 API 索引文档中呈现

如果你想查看代码示例，请查看代码示例（很快就会添加）
