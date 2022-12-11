# Test


https://juejin.cn/post/6844904194600599560#heading-27

>前端测试 ： Unit Test , Integration Test, UI Test

>Unit Test : 低耦合

>Integration Test : Unit Test 在一起

>使用场景：
公共库类的开发维护
中长期项目的迭代/重构
引用了不可控的第三方依赖


# 后端

## RPC

### distributed computing
 A distributed system is a system whose components are located on different networked computers  
 challenges of distributed systems are: 
 maintaining concurrency of components,   
 overcoming the lack of a global clock,   
 and managing the independent failure of components  

 eg: HTTP, RPC-like connectors and message queues

### remote procedure call

calling procedures are largely the same whether they are local or remote  

An RPC is initiated by the client, which sends a request message to a known remote server to execute a specified procedure with supplied parameters. The remote server sends a response to the client, and the application continues its process.   


## 微服务
协同工作小而自治


# MVC, MVP, MVVM

model - 业务模型和数据行为  
view - 展示层  
controller, presenter,viewModel

组合模式， 策略模式， 观察者模式

三层架构： 表现层，业务逻辑层， 数据访问层


## MVC - model - view - controller

## MVP - model - view - presenter

## MVVM - model - view - viewModel

# 脚手架
元编程