# Quick Tutorial

Here we comes to the quick tutorial.

We hope you have installed `Laksa` correctly in your `NodeJS` or `Html`.

If you haven't done that yet. Please refer to [Install Section](/guide/#install)

In this tutorial,

- We use standard `es6` code style in this tutorial.
- We assume you are using `nodejs` or `html` in modern browsers as your dev envirorment

## Connect `Laksa` to BlockChain Provider

1.  Simply require `Laksa` library.

```javascript
// you can use `import Laksa from 'laksa'`
// if you use more advanced javascript envirorment
const Laksa = require("laksa");
```

2.  Initialize the `Laksa`

```javascript
// Laska is a constructor/class.
// It means you have to use `new` syntax to initialize it.
// Do it as folows:
const laksa = new Laksa();

// If you set "http/https url" as argument, you will set HttpProvider to Laksa,
// which is the same we use setProvider in next step.
const laksa = new Laksa("https://api-scilla.zilliqa.com");
```

3.  Set Provider to the `TestNet`

```javascript
// After you done last step, you can use most of Laksa's abilities.
// But if you want to connect to the TestNet and use network functions of Laksa
// Set Provider is a must. You can simply do as follows:
laksa.setProvider("https://api-scilla.zilliqa.com");
```

4.  Check provider connection

```javascript
// Zilliqa TestNet is a remote provider,
// If we had set the provider correctly,
// We can use isConnected() function to see if we connected
// In Laksa, all result using network functions will be returned as Promises
laksa.isConnected().then(console.log);

// if you can see `true` in you console,
// Then Congratulations! You are 'On-Chain' now
```

5.  Complete code is here:

```javascript
// 1.  Simply require `Laksa` library.
const Laksa = require("laksa");

// 2.  Initialize the `Laksa`
const laksa = new Laksa();

// 3.  Set Provider to the `TestNet`
laksa.setProvider("https://api-scilla.zilliqa.com");

// 4.  Check provider connection
laksa.isConnected().then(console.log);
```

Now we summerize a little bit.

- Make sure `Laksa` is required/imported
- Initialize it with `new` syntax, with or without provider url is optional.
- You can set provider using `setProvider()` function, whenever you want to change the provider url
- `Laksa` use Promises as network function returned, so we use async call then resolve results

## Create an account for Zilliqa

Just like real wallet in the real world, you can store a set of credit cards to it. A BlockChain Wallet can store many BlockChain Accounts.

BlockChain Account is a basic and important part to the BlockChain Eco-Systems.A BlockChain Account, will contains a pair of keys and an address. We simplify the explanations, like these:

- **Private Key**: A 40 chars long hex/string, is used to sign transaction/message, and it is the one-and-only description key to account users.
  It means who hold the Private Key, who owns the account. Hence, in any circumstance, **DO NOT LOSE IT OR TELL ANYONE**

- **Public Key**: A key use algo methods calculated from your Private Key, it is like your public ID that express yourself, to tell third party application or transaction that who they might be dealing with. Public Key usually appears in most transaction initialization.

- **Address**: It is easy to understand, that it is like your bank account number or email address, people can send money to your address without worrying that they send to wrong person.

We introduce `laksa-wallet`, which is a sub-package of `Laksa`.
By using `laksa-wallet`, you can create wallet and manage your account very easily.

```javascript
// require laksa ,initialize
const { Wallet } = require("laksa-wallet");
const wallet = new Wallet();

// now do the createAccount()
const newAccount = wallet.createAccount();

// check the account that created
console.log(newAccount);
```

You should be able to see the result on console like this:

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

Now, you can see `privateKey` , `publicKey` and `address`, are created along side with `createTime` and `index`.

Congratulations! You have created a BlockChain account.

Next, we should show you more about the wallet can do.

## Manage your wallet and accounts

So, you had created an account, using `Laksa.wallet.createAccount()`. As you may think, where does it save and how can I query and manage them.

`Laksa.wallet` has provided a series features that helps you to manage your wallet and accounts. Which are:

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
- getWalletAccounts
- getWalletAddresses
- getWalletPrivateKeys
- getWalletPublicKeys
- importAccountFromPrivateKey
- importAccountsFromPrivateKeyList
- removeOneAccountByAddress
- removeOneAccountByIndex
- updateAccountByAddress
- updateLength

Wow... it seems a lot of them. We know, and we try to simplify them in the future. But we still suggest you should get to know some of them. All these features you can find them in the API Reference

### The `accounts` array

- It is a builtin array inside `Laksa.wallet`.
- It is used to store the `Address` you have created or imported to the wallet.
- We have upgraded it to `Immutable List`, so use the builtin functions to manage
- `Immutable List` protect the data within, we don't want any un-controllable mutation to our data.

Supposed you have created an Account from above code. That new account is added to `accounts` , you can easily check it with:

```javascript
...
// now use getWalletAccounts to get the accounts

const walletAccounts=wallet.getWalletAccounts()

// log it
console.log(walletAccounts)
```

Now you have result like this:

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

We have an Array that express the accounts you have saved. The structure is like this:

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

Because address to account is the-one-and-only, we can simply use it as a reference key to the array.

As you can see, each account object contains an `index`.
It is exactly pointing the position to the `accounts` array.

You can use `accounts[0]` to get the address that match the account address you had created

Just show you some code, you can understand easily:

```javascript
// you can reference the address use normal account index
const address_for_the_account = wallet.accounts[0];

console.log(address_for_the_account);
// output will be:
// '9de46b2fe88f1328bd973557568b24ce271cbc97'

// Since you have known the address,you can use address to point to the account object
const my_account_created = wallet.getAccountByAddress(address_for_the_account);

console.log(my_account_created);
// output will be:
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

Now you've known how to create an account, and how to locate it

### Get account object by `address` or `index`

`wallet.getAccountByIndex` and `wallet.getAccountByAddress`

These two functions provide you to access the `accounts` array to get the account using `address` or `index`

```javascript
// we assume you have the index that account stored
const accountQueryByIndex = wallet.getAccountByIndex(0);

console.log(accountQueryByIndex);
// output will be:
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

// we assume you have the index that account stored
const accountQueryByAddress = wallet.getAccountByAddress(
  address_for_the_account
);

console.log(accountQueryByAddress);
// output will be:
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

You see two different functions get the same account you want.

If you compared two result will return `true`.

```javascript
console.log(Object.is(accountQueryByIndex, accountQueryByAddress));
// output will be:
// true
```

### Encrypt your account with password

As we mention before, the Private Key is most important for the BlockChain Eco Systems.

We'd better not let anyone to know the key.

You might just save the Private Key to off-line hardware devices,
or write it down with a pen on a clean paper

However,`Laksa` provide a simple encryption for your account protection,
with a password you passed to the encryption function.

Let us show you the code directly:

```javascript
// we assume you have store your account as address
// now use `encryptAccountByAddress`,pass it with 2 params: address,password
// address should be the address stored in wallet.accounts
// password should be your customize string, dont do it simple but rememberable

wallet.encryptAccountByAddress(
  address_for_the_account,
  "I(dont+want@Any#Body%see^this:233333"
);

// now check if the account is encrypted?

const account_is_encrypted = wallet.getAccountByAddress(
  address_for_the_account
);

// see the output
console.log(account_is_encrypted);
```

The output will be looking like this

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

Now your account has been encrypted by your password.
It will generate a crypto object to protect the private key, and the private key will become 'ENCRYPTED'

Further more, the crypto object can be decrypted by your password and decryption function.
The crypto object will be explained in further document

### Decrypt your account with password

Once the account is encrypted by your password and encryption function.

Only the password and decryption function will unlock the account.

Simutanneously,`Laksa` provide a simple decryption for your account protection,
with a password you passed to the decryption function.

Code Time:

```javascript
// the account is encrypted

wallet.decryptAccountByAddress(
  address_for_the_account,
  "I(dont+want@Any#Body%see^this:233333"
);

// now check if the account is encrypted?

const account_is_decrypted = wallet.getAccountByAddress(
  address_for_the_account
);

// see the output
console.log(account_is_decrypted);
```

The output will be looking like this

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

You see, the crypto object unlock and removed from account object,
and the Private Key is decrypted and become the original one

But there are more things added to it ,like `id`,`LastEncryptedBy`,`version`,`updatedTime`.
We will explain these things in further document.

### Create multiple accounts

Like in the real world, you can apply to different banks to multiple bank account to deposit or receive money.
Thus you have multiple accounts.

With `laksa-wallet`, we can create multiple BlockChain Accounts by one single command and save them to the `wallet.accounts` array.

We introduce `wallet.createBatchAccounts`.

Just tell the function how many accounts you need

```javascript
// pass the number of accounts to the createBatchAccounts function
// the number has to be a integer >= 1
const I_Have_A_Lot_Of_Account = wallet.createBatchAccounts(5);
console.log(I_Have_A_Lot_Of_Account);
```

the output will look like this:

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

And remember, `index` to each account will be calculated automaticly,
if `wallet.accounts` array already stored some addresses

### Encrypt and decrypt all accounts

`Laksa` provides encrypt and decrypt all accounts functions.

You'd be able to pass the password as param to them.

But be warned, there are some difference between encrypt/decrypt one account and all accounts

Here are the reasons:

- If an account is to be encrypted, you should use `wallet.encryptAccountByAddress`,
  and each account has a uniq password to it.
- If all accounts are to be encrypted, and use the same password string.
  You can use `wallet.encryptAllAccounts` to make it work.
  However, those accounts previously encrypted won't be able to be re-encrypted by new password.
  Since those accounts maybe were encrypted by different passwords separately.
- The accounts had been encrypted will be ignored by `wallet.encryptAllAccounts` function.
- So should the `wallet.decryptAllAccounts` function behave.
  In the meantime, batch decryption process are more complex because once you have one account using other password, the process will be terminated.

::: warning
We will try and optimized these functions in the future.

But we hope you don't use batch functions in real production envirorment.

You'd best to encrypt and decrypt accounts **seperately**.
:::

Anyway, we just demostrate them to you:

```javascript
// Say if you have accounts created
const create_My_BatchAccounts = wallet.createBatchAccounts(5);

// batch encryption,pass the password string as paramater
wallet.encryptAllAccounts("I(dont+want@Any#Body%see^this:233333");

// log them
console.log(wallet.getWalletAccounts());
```

Now all accounts are encrypted. For the decryption part, you can do this:

```javascript
// batch encryption,pass the password string as paramater
wallet.decryptAllAccounts("I(dont+want@Any#Body%see^this:233333");

// log them
console.log(wallet.getWalletAccounts());
```

### Remove account from wallet

If you have a account wanted to be removed from wallet.

Use `wallet.removeOneAccountByAddress` or `wallet.removeOneAccountByIndex`

Remember, `*ByAddress` is more safely than `*ByIndex`

`wallet.removeOneAccountByAddress`:

```javascript
// create an account and remove it later
const an_account_to_be_added_and_remove = wallet.createAccount();

// get address of the account
const { address } = an_account_to_be_added_and_remove;

// check the account is added?
const is_the_account_added = wallet.getAccountByAddress(address);

console.log(is_the_account_added);

// remove the account using the removeOneAccountByAddress
wallet.removeOneAccountByAddress(address);

// check the account is still there?
const is_the_account_there = wallet.getAccountByAddress(address);

console.log(is_the_account_there);
```

`wallet.removeOneAccountByIndex`:

```javascript
// create an account and remove it later
const an_account_to_be_added_and_remove_byIndex = wallet.createAccount();

// get index of the account
const { index } = an_account_to_be_added_and_remove_byIndex;

// check the account is added?
const is_the_account_added_byIndex = wallet.getAccountByIndex(index);

console.log(is_the_account_added_byIndex);

// remove the account using the removeOneAccountByIndex
wallet.removeOneAccountByIndex(index);

// check the account is still there?
const is_the_account_there_byIndex = wallet.getAccountByIndex(index);

console.log(is_the_account_there_byIndex);
```

### Clean up your wallet

If you want your wallet to be cleaned, and remove all accounts that created/imported/stored.

We mentioned that `accounts` array is `Immutable List`. You won't be able to set the `accounts` directly using like:

```javascript
wallet.accounts = [];
// or
wallet.accounts[0] = {};
```

So that accounts that created/imported/encrypted using `laksa-wallet`, can only be accessible with internal builtin functions

Especially when deleting accounts or clean-up your wallet, you will find builtin functions are more safer.

Now, try clean it all up.

We provide a clean-up method to do the job

```javascript
wallet.cleanAllAccounts();

// all accounts has been cleaned up
console.log(wallet.getWalletAccounts());

// output
// []

// If you try access the `accounts` array
// You will find a bunch of `undefined`s within
// We design it to keep the index pointer to formaly created accounts and deleted accounts
console.log(wallet.accounts);
//[ undefined,...,undefined ]
```

### More features and details

This is a simple tutorial to demostrate you some functions to the `Laksa.wallet`.

More features and details will be documented in API Reference.

And to see examples, please refer to examples( will be added soon!)
