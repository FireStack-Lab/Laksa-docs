# Laska.util

Class of Laksa common tools, providing useful functions and utilities.

#### Usage

```Javascript
const Laksa=require('laksa')
// or
import Laksa from 'laksa'

// initialize, but provider setting is non-essential
const laksa=new Laksa()

laksa.util.<{Method|Object|Class}>
```

#### Methods

- [Laksa.util.add0x](/api/laksa.util.html#add0x)
- [Laksa.util.compressPublicKey](/api/laksa.util.html#compresspublickey)
- [Laksa.util.createTransactionJson](/api/laksa.util.html#createtransactionjson)
- [Laksa.util.encodeTransaction](/api/laksa.util.html#encodetransaction)
- [Laksa.util.extractValidator](/api/laksa.util.html#extractvalidator)
- [Laksa.util.fromAscii](/api/laksa.util.html#fromascii)
- [Laksa.util.fromUtf8](/api/laksa.util.html#fromutf8)
- [Laksa.util.generatePrivateKey](/api/laksa.util.html#generateprivateKey)
- [Laksa.util.getAddressFromPrivatekey](/api/laksa.util.html#getaddressfromprivatekey)
- [Laksa.util.getAddressFromPublicKey](/api/laksa.util.html#getaddressfrompublickey)
- [Laksa.util.getPubKeyFromPrivateKey](/api/laksa.util.html#getpubKeyfromprivateKey)
- [Laksa.util.hexToNumber](/api/laksa.util.html#hextonumber)
- [Laksa.util.intToByteArray](/api/laksa.util.html#inttobytearray)
- [Laksa.util.isAddress](/api/laksa.util.html#isaddress)
- [Laksa.util.isArray](/api/laksa.util.html#isarray)
- [Laksa.util.isBN](/api/laksa.util.html#isbn)
- [Laksa.util.isBoolean](/api/laksa.util.html#isboolean)
- [Laksa.util.isFunction](/api/laksa.util.html#isfunction)
- [Laksa.util.isHash](/api/laksa.util.html#ishash)
- [Laksa.util.isHex](/api/laksa.util.html#ishex)
- [Laksa.util.isJson](/api/laksa.util.html#isjson)
- [Laksa.util.isNull](/api/laksa.util.html#isnull)
- [Laksa.util.isNumber](/api/laksa.util.html#isnumber)
- [Laksa.util.isObject](/api/laksa.util.html#isobject)
- [Laksa.util.isPrivateKey](/api/laksa.util.html#isprivatekey)
- [Laksa.util.isPubkey](/api/laksa.util.html#ispubkey)
- [Laksa.util.isString](/api/laksa.util.html#isstring)
- [Laksa.util.isUndefined](/api/laksa.util.html#isundefined)
- [Laksa.util.isUrl](/api/laksa.util.html#isurl)
- [Laksa.util.numberToHex](/api/laksa.util.html#numbertohex)
- [Laksa.util.padLeft](/api/laksa.util.html#padleft)
- [Laksa.util.padRight](/api/laksa.util.html#padright)
- [Laksa.util.randomBytes](/api/laksa.util.html#randombytes)
- [Laksa.util.strip0x](/api/laksa.util.html#strip0x)
- [Laksa.util.toAscii](/api/laksa.util.html#toascii)
- [Laksa.util.toBN](/api/laksa.util.html#tobn)
- [Laksa.util.toHex](/api/laksa.util.html#tohex)
- [Laksa.util.toUtf8](/api/laksa.util.html#toutf8)
- [Laksa.util.utf8ToHex](/api/laksa.util.html#utf8tohex)
- [Laksa.util.validateArgs](/api/laksa.util.html#validateargs)
- [Laksa.util.validateFunctionArgs](/api/laksa.util.html#validatefunctionargs)
- [Laksa.util.validator](/api/laksa.util.html#validator)
- [Laksa.util.verifyPrivateKey](/api/laksa.util.html#verifyprivatekey)

---

## Methods

---

### add0x

Add an '0x' prefix to value

#### Typed

```flow
 add0x(value:string|BN|number|object)=> string;
```

#### parameters

#### returns

#### usage

```javascript
// //suppose Laksa is initialized
//
// const address = "9bfec715a6bd658fcb62b0f8cc9bfa2ade71434a";
//
// // use callback to get the result
// Laksa.zil.getBalance({ address: address }, (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });
//
// // use then to return Promises
// Laksa.zil.getBalance({ address: address }).then(console.log);
```

---

### compressPublicKey

---

### createTransactionJson

---

### encodeTransaction

---

### extractValidator

---

### fromAscii

---

### fromUtf8

---

### generatePrivateKey

---

### getAddressFromPrivatekey

---

### getAddressFromPublicKey

---

### getPubKeyFromPrivateKey

---

### hexToNumber

---

### intToByteArray

---

### isAddress

---

### isArray

---

### isBN

---

### isBoolean

---

### isFunction

---

### isHash

---

### isHex

---

### isJson

---

### isNull

---

### isNumber

---

### isObject

---

### isPrivateKey

---

### isPubkey

---

### isString

---

### isUndefined

---

### isUrl

---

### numberToHex

---

### padLeft

---

### padRight

---

### randomBytes

---

### strip0x

---

### toAscii

---

### toBN

---

### toHex

---

### toUtf8

---

### utf8ToHex

---

### validateArgs

---

### validateFunctionArgs

---

### validator

---

### verifyPrivateKey

---
