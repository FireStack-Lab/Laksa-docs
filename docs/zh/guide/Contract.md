```ocaml
(* Scilla 合约架构 *)


(***************************************************)
(*               相关依赖库，以library开头            *)
(***************************************************)

library MyContractLib


(* 书写依赖库代码 *)



(***************************************************)
(*             合约定义部分，以contract开头           *)
(***************************************************)

contract MyContract

(* 不可变字段声明 *)

(vname_1 : type_1,
 vname_2 : type_2)

(*
  # init.json
  # 部署之前通过 Scilla-Checker获取初始化参数数据
  # 即 ABI
  # 在部署之后, 可以通过 GetSmartContractInit 获取
 [
     {
         "vname" : "vname_1",
         "type" : "type_1",
         "value" : "0x1234567890123456789012345678901234567890"
     },
     {
         "vname" : "vname_2",
         "type" : "type_2" ,
         "value" : "199"
     },

     # ......更多参数

     # 部署时的默认参数:
     {
         "vname" : "_creation_block",
         "type" : "BNum",
         "value" : "1"
     }
 ]
*)


(* 可变字段声明 *)

field vname_1 : type_1 = init_val_1
field vname_2 : type_2 = init_val_2

(*
  # state.json
  # 在合约部署后通过 GetSmartContractState 获取
  [
    {
      "vname": "backers",
      "type": "Map (ByStr20) (Uint128)",
      "value": []
    },
    {
      "vname": "funded",
      "type": "Bool",
      "value":
      {
        "constructor": "False",
        "argtypes": [],
        "arguments": []
      }
    },
    {
      "vname": "_balance",
      "type": "Uint128",
      "value": "0"
    }
  ]
*)





(* Transitions 转换器 *)



(* Transition 方法定义  *)
transition firstTransition (param_1 : type_1, param_2 : type_2)
  (* Transition 转换体 *)

end


(* Transition 方法定义  *)
transition TransferFrom (from: ByStr20, to: ByStr20, tokens: Unit128)
  (* Transition 转换体 *)

end



(*

# message.json
# Transitions将在合约部署后, 每一个Transaction都通过它作为配置文件
# 使用createTransaction与之交互

  {
    "_tag"    : "TransferFrom",
    "_amount" : "0",
    "_sender" : "0x64345678901234567890123456789012345678cd",
    "params"  : [
      {
        "vname" : "from",
        "type"  : "ByStr20",
        "value" : "0x1234567890123456789012345678901234567890"
      },
      {
        "vname" : "to",
        "type"  : "ByStr20",
        "value" : "0x78345678901234567890123456789012345678cd"
      },
      {
        "vname" : "tokens",
        "type"  : "Uint128",
        "value" : "500"
      }
    ]
  }
*)
```

## 各种参数详细解释

### Immutable Fields（初始化字段，不可变）

- 对应`init.json`
- 部署前可写，部署后只读
- 合约初始化，使用它，一旦部署，不可更改
- 合约部署后，只读，通过 GetSmartContractInit 读取

### Blockchian State Fields(区块链状态字段)

- 对应`blockchain.json`
- 部署前可写，部署后可读写
- 也是在合约部署的时候发送，`BLOCKNUMBER`这个字段很特殊，不在合约中出现
- 可获取的方式是 GetLatestTxBlock

### Mutable Fields（可变状态字段）

- 对应`state.json`
- 这里说的可变，指的并不是某个客户端输入发生改变，而是由区块链的总体交互改变
- 把整个区块链看作一个后端状态机，由这个状态机产生的状态映射到合约的变量上
- 可以看作是对这个合约进行一系列统计之后的状态结果
- 合约部署后，通过 GetSmartContractState 读取，实际上并不能直接改变它

### Message Fields（消息变量）

- 对应`message.json`
- 就是每个客户端访问合约制定的 transition（转换方法）中，输入的各种参数
- DApp 前端通过它与合约 transition 进行交互，有一定的约定，比如`_amount`：消费金额,`_tag`：方法名,`_sender`：交互者地址，就是消费参数
- 其余的变量都要根据方法名对应的参数进行设置

## Scilla 合约流转和 Dapp 交互流程

1.  合约源码 -- Scilla Checker --- code.scilla, 获取 ABI
2.  准备部署 -- createTransactionJson -- init.json，blockchain.json，参数格式通过解析 ABI 更准确
3.  开始部署 -- createTransaction -- 获取返回的 txnID 和想办法拿到 contractAddress
4.  Dapp 展示 -- getSmartConract{Init|State|Code} -- 监听 state.json ，Dapp 做出统计和数据展示以及前端的改变
5.  合约交互 -- 获取 ABI，得到合约的 transition 方法名 -- 发送 message.json ，Dapp 做出与合约的交互
6.  上述 4 和 5 循环，直至合约中止
