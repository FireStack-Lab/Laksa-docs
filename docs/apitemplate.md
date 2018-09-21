### method_template

{description template}

::: warning
This Method is not open tested yet

`DO NOT` use it.
:::

#### Typed

```flow
 method({ params: type }, callback?: void)=> Promises<Error|boolean|string|number|any|object<T>>;
```

#### parameters

- 1.  `object`- required, see below

      | key  | type     | required? | example    | description |
      | :--- | :------- | :-------- | :--------- | :---------- |
      | code | `string` | yes       | {template} | {template}  |

- 2.  `function`- optional, callback function, Error as the first parameter，normal result will be as the second parameter，see examples:

  ```flow
  function callback(err: Error, data: any): void {
    if (err) {
      // do with error
    }
    // do with data
  }
  ```

#### returns

- `Promises<Error|boolean|string|number|any|object<T>>` {template},otherwise Error

#### usage

```javascript
// // suppose Laksa is initialized

// const code = "scilla code";

// // use callback to get the result
// Laksa.zil.checkCodeTest({ code: code }, (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });
//
// // use then to return Promises
// Laksa.zil.checkCodeTest({ code: code }).then(console.log);
```

---

### 方法模板

{文字模板}

::: warning 警告
这个方法还没有开放测试

`不要` 使用！
:::

#### Typed

```flow
 method({ params: type}, callback?: void)=> Promises<Error|boolean|string|number|any|object<T>>;
```

#### 参数

- 1.  `object`- 必须, 见下表

      | 键名   | 类型   | 必须 | 实例       | 描述       |
      | :----- | :----- | :--- | :--------- | :--------- |
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

- `Promises<Error|boolean|string|number|any|object<T>>` {文字模板}，报错返回 Error

#### 用法

```javascript
// // 假设 Laksa 已经初始化

// const code = "scilla code";

// // 使用callback获取结果
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

---
