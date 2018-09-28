# Laska

Laksa 的主要类

#### 用法

```Javascript
const Laksa=require('laksa')
// 或者
import Laksa from 'laksa'

//初始化
const laksa=new Laksa('https://api-scilla.zilliqa.com')

laska.*<{Method|Class|Object}>
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
- [Laksa.getDefaultProviderUrl](/zh/api/laksa.html#getdefaultproviderurl)
- [Laksa.getLibraryVersion](/zh/api/laksa.html#getlibraryversion)
- [Laksa.isConnected](/zh/api/laksa.html#isconnected)
- [Laksa.setProvider](/zh/api/laksa.html#setprovider)

#### 子对象

- [Laksa.currentProvider](/zh/api/laksa.html#currentprovider)
- [Laksa.config](/zh/api/laksa.html#config)
- [Laksa.providers](/zh/api/laksa.html#providers)

---

## 方法

### getProvider

获取当前的 Provider 类

#### Typed

```flow
getProvider () => provider: Class
```

#### 参数

**无**

#### 返回

- `Class` Provider 类，详见`Provider`

#### 用法

```javascript
//假设 Laksa 已经初始化
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

获取默认的帐号

#### Typed

```flow
getDefaultAccount () => defaultAccount: string
```

#### 参数

**无**

#### 返回

- `string` 默认 Provider 的 defaultAccount

#### 用法

```javascript
//假设 Laksa 已经初始化
Laksa.getDefaultAccount();

//undefined
```

---

### getDefaultBlock

获取默认的 Block

#### Typed

```flow
getDefaultBlock () => defaultBlock: string
```

#### 参数

**无**

#### 返回

- `string` 默认 Provider 的 defaultBlock

#### 用法

```javascript
//假设 Laksa 已经初始化
Laksa.getDefaultBlock();

//"latest"
```

---

### getDefaultProviderUrl

获取默认的 Provider 的 URL

#### Typed

```flow
getDefaultProviderUrl () => url: string
```

#### 参数

**无**

#### 返回

- `string` 默认 Provider 的 Url

#### 用法

```javascript
//假设 Laksa 已经初始化
Laksa.getDefaultProviderUrl();

//localhost:4200
```

---

### getLibraryVersion

获取当前代码库的版本号

#### Typed

```flow
getLibraryVersion () => version: string
```

#### 参数

**无**

#### 返回

- `string` 代码库版本号

#### 用法

```javascript
//假设 Laksa 已经初始化
Laksa.getLibraryVersion();

//0.0.1
```

---

### isConnected

判断当前 Provider 是否连接

#### Typed

```flow
isConnected (callback?: void)=> Promises<Error|Boolean>
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

- `Promises<boolean>` 连接状态,报错返回 Error，正常返回 true 或 false

#### 用法

```javascript
//假设 Laksa 已经初始化

// 使用callback获取结果
Laksa.isConnected({ code: code }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 使用then返回Promises
Laksa.isConnected().then(console.log);

// true
```

---

### setProvider

设置新的 Provider

#### Typed

```flow
setProvider (url:string)=> void
```

#### 参数

- 1.  `string`- 必须, Provider 的 url 地址，http 或者 https

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

```flow
currentProvider :class
```

#### 参数

无

#### 返回

- `Class` Provider 类，详见`Provider`

#### 用法

```javascript
//假设 Laksa 已经初始化
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

```flow
providers :object<T>
```

#### 参数

无

#### 返回

- `object`
  - **HttpProvider**: `Class`

#### 用法

```javascript
//假设 Laksa 已经初始化
Laksa.providers;

/**
{ HttpProvider: [Function: HttpProvider] }
 */
```
