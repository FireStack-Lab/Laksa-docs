# Laska

Laksa main class

#### Usage

```Javascript
const laksa=require('Laksa')
// or
import laksa from 'Laksa'
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

getProvider ():void =\> provider: Object

#### params

**no**

#### Return

- `Class` Provider class, see `Provider`

#### Usage

```javascript
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
        headers: [Object] },
     interceptors:
      { request: [InterceptorManager],
        response: [InterceptorManager] } } }
 */
```

---

### getDefaultAccount

get default account set by default provider

#### Typed

getDefaultAccount ():void =\> defaultAccount: String

#### params

**no**

#### Return

- `String` default Account of default provider

#### Usage

```javascript
Laksa.getDefaultAccount();

//undefined
```

---

### getDefaultBlock

get default block of default provider

#### Typed

getDefaultBlock ():void =\> defaultBlock: String

#### params

**no**

#### Return

- `String` default block of default Provider

#### Usage

```javascript
Laksa.getDefaultBlock();

//"latest"
```

---

### getDefaultProviderUrl

get url of default Provider

#### Typed

getDefaultProviderUrl ():void =\> url: String

#### params

**no**

#### Return

- `String` url of default Provider

#### Usage

```javascript
Laksa.getDefaultProviderUrl();

//localhost:4200
```

---

### getLibraryVersion

get version number of this library

#### Typed

getLibraryVersion ():void =\> version: String

#### params

no

#### Return

- `String` version number

#### Usage

```javascript
Laksa.getLibraryVersion();

//0.0.1
```

---

### isConnected

get connection status of current Provider

#### Typed

isConnected ():void =\> Promises\<Boolean\>

#### params

**no**

#### Return

- `Promises<Boolean>` connection status

#### Usage

```javascript
Laksa.isConnected().then(console.log);

// true
```

---

### setProvider

set new Provider to current Provider

#### Typed

setProvider (url:String):void =\> undefined

#### params

| name |  type  |                    description |
| :--- | :----: | -----------------------------: |
| url  | String | url of Provider，http or https |

#### Return

- `undefined` no Return

#### Usage

```javascript
Laksa.setProvider("https://api-scilla.zilliqa.com");

//undefined
```

---

## Sub Objects

### currentProvider

return current Provider class

#### Typed

currentProvider :Class

#### params

no

#### return

- `Class` Provider ,see `Provider`

#### Usage

```javascript
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
        headers: [Object] },
     interceptors:
      { request: [InterceptorManager],
        response: [InterceptorManager] } } }
 */
```

---

### config

return config params

#### Typed

config :Object

#### params

no

#### return

- `Object`
  - **version**: `String`,
  - **defaultProviderUrl**: `String`,
  - **defaultBlock**: `String`,
  - **defaultAccount**: `String`

#### Usage

```javascript
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

providers :Object

#### params

no

#### Return

- `Object`
  - **HttpProvider**: `Class`

#### Usage

```javascript
Laksa.providers;

/**
{ HttpProvider: [Function: HttpProvider] }
 */
```
