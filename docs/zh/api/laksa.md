# Laska

Laksa 的主要类

#### 用法

```Javascript
const laksa=require('Laksa')
// 或者
import laksa from 'Laksa'
```

#### 子类

- Laksa.messenger
- Laksa.utils
- Laksa.wallet
- Laksa.zil

#### 方法

- [Laksa.getProvider](/zh/api/laksa.html#getprovider)
- [Laksa.getDefaultAccount](/zh/api/laksa.html#getdefaultaccount)
- [Laksa.getDefaultBlock](/zh/api/laksa.html#getdefaultblock)
- [Laksa.getDefaultProviderUrl](/zh/api/laksa.html#getdefaultproviderUrl)
- [Laksa.getLibraryVersion](/zh/api/laksa.html#getlibraryversion)
- [Laksa.isConnected](/zh/api/laksa.html#isconnected)
- [Laksa.setProvider](/zh/api/laksa.html#setprovider)

#### 子对象

- Laksa.currentProvider
- Laksa.config
- Laksa.providers

---

## 方法

### getProvider

获取当前的 Provider 类

#### Typed

getProvider ():void =\> provider: Object

#### 参数

**无**

#### 返回

- `Class` Provider 类，详见`Provider`

#### 用法

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

获取默认的帐号

#### Typed

getDefaultAccount ():void =\> defaultAccount: String

#### 参数

**无**

#### 返回

- `String` 默认 Provider 的 defaultAccount

#### 用法

```javascript
Laksa.getDefaultAccount();

//undefined
```

---

### getDefaultBlock

获取默认的 Block

#### Typed

getDefaultBlock ():void =\> defaultBlock: String

#### 参数

**无**

#### 返回

- `String` 默认 Provider 的 defaultBlock

#### 用法

```javascript
Laksa.getDefaultBlock();

//"latest"
```

---

### getDefaultProviderUrl

获取默认的 Provider 的 URL

#### Typed

getDefaultProviderUrl ():void =\> url: String

#### 参数

**无**

#### 返回

- `String` 默认 Provider 的 Url

#### 用法

```javascript
Laksa.getDefaultProviderUrl();

//localhost:4200
```

---

### getLibraryVersion

获取当前代码库的版本号

#### Typed

getLibraryVersion ():void =\> version: String

#### 参数

无

#### 返回

- `String` 代码库版本号

#### 用法

```javascript
Laksa.getLibraryVersion();

//0.0.1
```

---

### isConnected

判断当前 Provider 是否连接

#### Typed

isConnected ():void =\> Promises\<Boolean\>

#### 参数

**无**

#### 返回

- `Promises<Boolean>` 连接状态

#### 用法

```javascript
Laksa.isConnected().then(console.log);

// true
```

---

### setProvider

设置新的 Provider

#### Typed

setProvider (url:String):void =\> undefined

#### 参数

| 名称 |  类型  |                                  说明 |
| :--- | :----: | ------------------------------------: |
| url  | String | Provider 的 url 地址，http 或者 https |

#### 返回

- `undefined` 无返回

#### 用法

```javascript
Laksa.setProvider("https://api-scilla.zilliqa.com");

//undefined
```

---

## 子对象

### currentProvider

返回当前的 Provider 类

#### Typed

currentProvider :Class

#### 参数

无

#### 返回

- `Class` Provider 类，详见`Provider`

#### 用法

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

返回当前的 config 参数

#### Typed

config :Object

#### 参数

无

#### 返回

- `Object`
  - **version**: `String`,
  - **defaultProviderUrl**: `String`,
  - **defaultBlock**: `String`,
  - **defaultAccount**: `String`

#### 用法

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

返回 providers 对象下的子对象

#### Typed

providers :Object

#### 参数

无

#### 返回

- `Object`
  - **HttpProvider**: `Class`

#### 用法

```javascript
Laksa.providers;

/**
{ HttpProvider: [Function: HttpProvider] }
 */
```
