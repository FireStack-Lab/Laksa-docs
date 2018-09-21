# Laska

Laksa main class

#### Usage

```Javascript
const Laksa=require('laksa')
// or
import Laksa from 'laksa'

// initialize
const laksa=new Laksa('https://api-scilla.zilliqa.com')

laska.*<{Method|Class|Object}>
```

#### Sub Classes

- Laksa.messenger
- Laksa.utils
- Laksa.wallet
- Laksa.zil

#### Methods

- [Laksa.getProvider](/api/laksa.html#getprovider)
- [Laksa.getDefaultAccount](/api/laksa.html#getdefaultaccount)
- [Laksa.getDefaultBlock](/api/laksa.html#getdefaultblock)
- [Laksa.getDefaultProviderUrl](/api/laksa.html#getdefaultproviderUrl)
- [Laksa.getLibraryVersion](/api/laksa.html#getlibraryversion)
- [Laksa.isConnected](/api/laksa.html#isconnected)
- [Laksa.setProvider](/api/laksa.html#setprovider)

#### Sub Objects

- Laksa.currentProvider
- Laksa.config
- Laksa.providers

---

## Methods

### getProvider

get current Provider class

#### Typed

```flow
getProvider () => provider: Class
```

#### params

**no**

#### Return

- `Class` Provider class, see `Provider`

#### Usage

```javascript
//suppose Laksa is initialized
Laksa.getProvider();

/**
HttpProvider {
  instance: [Function],
  send: [AsyncFunction],
  sendServer: [AsyncFunction],
  sendAsync: [Function],
  sendAsyncServer: [Function],
  url: 'https://scilla-api.zilliqa.com',
  timeout: 0,
  user: null,
  password: null,
  headers: undefined,
  request:
   { [Function: wrap]
     request: [Function: wrap],
     delete: [Function: wrap],
     get: [Function: wrap],
     head: [Function: wrap],
     options: [Function: wrap],
     post: [Function: wrap],
     put: [Function: wrap],
     patch: [Function: wrap],
     defaults:
      { adapter: [Function: httpAdapter],
        transformRequest: [Array],
        transformResponse: [Array],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        validateStatus: [Function: validateStatus],
        headers: [object] },
     interceptors:
      { request: [InterceptorManager],
        response: [InterceptorManager] } } }
 */
```

---

### getDefaultAccount

get default account set by default provider

#### Typed

```flow
getDefaultAccount () => defaultAccount: string
```

#### params

**no**

#### Return

- `string` default Account of default provider

#### Usage

```javascript
//suppose Laksa is initialized
Laksa.getDefaultAccount();

//undefined
```

---

### getDefaultBlock

get default block of default provider

#### Typed

```flow
getDefaultBlock () => defaultBlock: string
```

#### params

**no**

#### Return

- `string` default block of default Provider

#### Usage

```javascript
//suppose Laksa is initialized
Laksa.getDefaultBlock();

//"latest"
```

---

### getDefaultProviderUrl

get url of default Provider

#### Typed

```flow
getDefaultProviderUrl ()=> url: string
```

#### params

**no**

#### Return

- `string` url of default Provider

#### Usage

```javascript
//suppose Laksa is initialized
Laksa.getDefaultProviderUrl();

//localhost:4200
```

---

### getLibraryVersion

get version number of this library

#### Typed

```flow
getLibraryVersion () => version: string
```

#### params

no

#### Return

- `string` version number

#### Usage

```javascript
//suppose Laksa is initialized
Laksa.getLibraryVersion();

//0.0.1
```

---

### isConnected

get connection status of current Provider

#### Typed

```flow
isConnected (callback?: void)=> Promises<Error|Boolean>
```

#### params

- 1.`function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### Return

- `Promises<Error|Boolean>` connection status, otherwise Error

#### Usage

```javascript
//suppose Laksa is initialized

// use callback to get the result
Laksa.isConnected((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// use then to get the result
Laksa.isConnected().then(console.log);

// true
```

---

### setProvider

set new Provider to current Provider

#### Typed

```flow
setProvider (url:string) => void
```

#### params

- 1.  `string`- required, url of Provider，http or https

#### Return

- `undefined` no Return

#### Usage

```javascript
//suppose Laksa is initialized
Laksa.setProvider("https://api-scilla.zilliqa.com");

//undefined
```

---

## Sub Objects

### currentProvider

return current Provider class

#### Typed

```flow
currentProvider :Class
```

#### params

no

#### return

- `Class` Provider ,see `Provider`

#### Usage

```javascript
//suppose Laksa is initialized
Laksa.currentProvider;

/**
HttpProvider {
  instance: [Function],
  send: [AsyncFunction],
  sendServer: [AsyncFunction],
  sendAsync: [Function],
  sendAsyncServer: [Function],
  url: 'https://scilla-api.zilliqa.com',
  timeout: 0,
  user: null,
  password: null,
  headers: undefined,
  request:
   { [Function: wrap]
     request: [Function: wrap],
     delete: [Function: wrap],
     get: [Function: wrap],
     head: [Function: wrap],
     options: [Function: wrap],
     post: [Function: wrap],
     put: [Function: wrap],
     patch: [Function: wrap],
     defaults:
      { adapter: [Function: httpAdapter],
        transformRequest: [Array],
        transformResponse: [Array],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        validateStatus: [Function: validateStatus],
        headers: [object] },
     interceptors:
      { request: [InterceptorManager],
        response: [InterceptorManager] } } }
 */
```

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
Laksa.config;

/**
{ version: '0.0.1',
  defaultProviderUrl: 'http://localhost:4200',
  defaultBlock: 'latest',
  defaultAccount: undefined }
 */
```

---

### providers

return providers sub class

#### Typed

```flow
providers :object<T>
```

#### params

no

#### Return

- `object`
  - **HttpProvider**: `Class`

#### Usage

```javascript
//suppose Laksa is initialized
Laksa.providers;

/**
{ HttpProvider: [Function: HttpProvider] }
 */
```
