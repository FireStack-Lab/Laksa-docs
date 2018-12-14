# Transaction

## What is Transaction?

Transaction is the core logic to every blockchain.

Transaction happens when:

1.  Transfer token from address to address.
2.  Sending messages from address to address.
3.  Deploy or Call a smart contract.

Transaction **DOES NOT** happen when:

1. Accounts creating or importing
2. Make RPC queries to get blockchain infomation

## Transaction logic to remember

The Transasctin logic on-chain is complex, and somehow different between blockchains.

However it comes to Client-Side development, it's almost the same.

So we had better to keep that in mind.

To make it easier to understand, we take `Transfer Token` process to decode the logic.

### 1. Construct a transaction object

Say Alice wants to send some Token to Bob, Alice has to know the information as follows:

1. `toAddr`, that is Bob's Address.
2. `amount`, that is the amount Bob want to receive,we assume she wants to send 1000 token
3. `gasLimit`, that is the maximum gas fee the blockchain will consume, according to Zilliqa, gasLimit has to be Long
4. `gasPrice`, that is the gas per transaction willing to pay for the blockchain miners,according to Zilliqa, minimum gasPrice has to be 100, and only accept type with BN
5. `version`, that is the version number of protocal, we set it to zero by default

then you can use the `laksa.transactions` to construct a new transaction object initially.

```javascript
/*
    we set toAddr to address of Bob
    we set amount to expected ammount with 1000
    we set gasPrice to 100 by default
    we set gasLimit to 1000 for example
    we set version to 0 by default
*/

const transaction = laksa.transactions.new({
  toAddr: '9bfec715a6bd658fcb62b0f8cc9bfa2ade71434a',
  amount: laksa.util.toBN(1000),
  gasPrice: laksa.util.toBN(100),
  gasLimit: laska.util.Long.fromNumber(1000),
  version: 0
})
```

### 2. Sign the transaction with account

When the Transaction Object is created, you can't send to blockchain immediately.

Like you pay someone with checks, you have to sign your name.

Every Transaction needs signature, you have to use account to sign it.

First you make sure you have account, imported to Wallet or Account.

Then you can use `signTransaction` method to sign the transaction.

And remember, the signTransaction method returns a `Promise`, because we update the account balance and nonce interally,

And if your account is encrypted, you have to provide a password string.

```javascript
// we use wallet to import a privateKey,
// that the account object will contain all the featrues to access the blockchain

const myAccount = laksa.wallet.importAccountFromPrivateKey(YOUR_KEY)

// you can use `new laksa.Modules.Account()` to construct a account,
// but you have to make Messenger and Provider constructed

myAccount.signTransaction(transaction).then(signed => console.log(signed))

// if your account is encrypted, you pass the password to the second argument.
// myAccount.signTransaction(transaction,password)
// after signed process, you can see the result with a signature
```

### 3. Send the signed transaction to Blockchain

After you have signed the transaction, you send it to blockchain.

There are at least 2 ways to send a Transaction.

Use `Transaction.sendTransaction()` if you continue with the Transaction Object.
Use `laksa.zil.createTransaction(SignedTransaction)` if you use the SignedTransaction as the param to send.

But these two different method has different outcome.
For the first one, it will returns `Transaction` object itself, and it may continue with `then` to make further executions.
For the second one, it will only returns RPC Response, you have to use other functions to make further executions.

We continue with Transaction Object as our tutorial.

```javascript
myAccount
  .signTransaction(transaction)
  .then(signed => signed.sendTransaction())
  .then(sent => console.log(sent))

/**
 * you should be able to see return object with
  {transaction:<Object:Transaction>,response:Response}
 */
```

### 4. To confirm a transaction

After the transaction is sent, `laksa` will make the RPC call to Zilliqa's blockchain.

The RPC call will returns some response, if not error, it will return `TranID` as your transaction reference ID.

However, not every transaction will be accepted by the Blockchain, If:

1. Your transaction paramater is not correct, like the gasLimit/gasPrice did not reach the blockchain rules.
2. Your account balance is not enough to transfer, `laksa` won't check for you, for App developer, you'd better check it manually.
3. `Traffic Jam` of the blockchain, or some unknown errors happens.(Real life is complex)

So we have to confirm it after we sent a transaction

In the previous section, we received an object like this:

```javascript
{
   transaction:<Object:Transaction>,
   response:<Response>
}
```

You can see `transaction` is the Transaction Object it self, we can proceed it with the `response`

```javascript
/**
 * the transaction.confirm received TranID as its params
 * then it will call the RPC methods to track the transaction from time to time
 */

myAccount
  .signTransaction(transaction)
  .then(signed => signed.sendTransaction())
  .then(res => res.transaction.confirm(res.response.TranID))
  .then(console.log)

/**
 * you will get Transaction Object back with receipt
 */
```

If the Transaction is accepted by the blockchain finally, you will get the `Transaction.receipt` with `{cumulative_gas:string,success:boolean}`

The `cumulative_gas` indicates the gas fee that consumed by blockchain.
The `success` with boolean indicates the state of transaction is successful or not

And if the Transaction is confirmed by `confirm` method, it will also changed the `status` of Transaction Object.

With `REJECTED` or `SUCCESS`, here `REJECTED` means `success:false`, and `SUCCESS` means `success:true` apparently.

But the Transaction is not accepted, the status will be remain `SENT`

### 5. Sum it up

The Transaction process is not hard to understand. It is always follows:

1. **Construct**

   use `laksa.transactions.new` to initialize

   Transaction Status:Initialized

2. **Sign**

   use `account.signTransaction` to sign, signing signer account and password if necessary

   Transaction Status:Signed

3. **Send**

   use `Transaction.send` to send, it will return {transaction:Transaction,response:Response}

   Transaction Status:Sent

4. **Confirm**

   use `Transaction.confirm` to confirm, send the `TranID` as paremater, if it is appeared on the Blockchain, the receipt will return

   Transaction Status:Success / Rejected
