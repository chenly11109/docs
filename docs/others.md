- too long; didn't read" -> tl;dr
- Any organization that designs a system will produce a design whose structure is a copy of the organization’s communication structure. – Melvin E. Conway

# Test

https://juejin.cn/post/6844904194600599560#heading-27

>前端测试 ： Unit Test , Integration Test, UI Test

>Unit Test : 低耦合

>Integration Test : Unit Test 在一起

>使用场景：
公共库类的开发维护
中长期项目的迭代/重构
引用了不可控的第三方依赖


# MVC, MVP, MVVM

model - 业务模型和数据行为  
view - 展示层  
controller, presenter,viewModel

组合模式， 策略模式， 观察者模式

三层架构： 表现层，业务逻辑层， 数据访问层

# MVC - model - view - controller

## MVP - model - view - presenter

## MVVM - model - view - viewModel

# 脚手架
元编程, 可以理解为template


# SSO
single sign-on
a session and user authentication service
permits a user to use one set of login credentials -- for example, a username and password -- to access multiple applications. 

## SAML - Security Assertion Markup Language
## FIM federated identity management
Identity Federation  联合身份管理
## Open Authorization (OAuth)
OAuth 是关于授权的开放网络标准，2.0 - third-party services

### 传统用户名/密码第三方服务的问题：  
1. 安全问题-需要保存用户名密码  
2. 密码登录不安全  
3. 无法限制拿到权限后的使用范围  
4. 修改密码才能拿回权限 ->会导致其他应用程序失效  
5. 密码泄漏会连带其他应用程序  

## 思路
user <-(authorization grant : 权限范围&有效期)-> client <-(access token)<-  authorization layer - server



## RFC - request for comments
一系列以编号排定的文件。文件收集了有关互联网相关信息，以及UNIX和互联网社区的软件文件

# 测试修改head小插件
whistle(好难用 不知道是什么原因...), ModHeader

# 插槽 
客户可能要求本地化部署，也要求SaaS + 本地化混合部署
-定制化，系统、模块的功能拓展

解决`依赖` (高耦合)：
依赖注入（控制反转）
利用第三方角色和配置来实现解耦

Addon - 插件机制， 客户模块定义的接口：插槽，模块的实现：插件。 - 组件地址。
插件机制，是模块（也就是我们后面要说的应用）之间的互相扩展的最通用、最轻量的方式。它能够实现在自由灵活组装模块的基础上，达到最大化的可扩展性。

aPaaS


# micro frontend
简而言之就是把一个项目分成各个部分，有同一个入口，解决共同依赖/组件等等但是又有很多团队做不同的页面需要独立处理的问题  
iframe - 白屏 - micro frontend
single-spa, micro-app, qiankun， webpack5 Module Federation
## purpose:
独立开发- 测试 - 部署 - 基座应用
## single-spa - kan

component lifecycles
single-spa root config   - respond to url change
applications must have bootstrap, mount, unmount

## web-component
Custom elements, shadow DOM, HTML templates
```javascript
CustomElementRegistry.define();
Element.attachShadow();
<template> <slot>
```

## Module Federation
Module Federation是Webpack5提出的概念，module federation用来解决多个应用之间代码共享的问题，让我们更加优雅的实现跨应用的代码共享。  

（monorepo）



# monorepo

monolithic respositories
monorepo + CI/CD pipelines
visibility, simpler dependency management, single source of truth, consistency, shared timeline, atomic commits, implicit CI(continuous integration), unified CI/CD

## best practice
1. Define a unified directory organization for easy discovery.
2. Maintain branch hygiene. Keep branches small, consider adopting trunk-based development.
3. Use pinned dependencies for every project. Upgrade dependencies all at once, force every project to keep up with the dependencies. Reserve exceptions for truly exceptional cases.
4. If you’re using Git, learn how to use shallow clone and filter-branch to handle large-volume repositories.
5. Shop around for a smart build system like Bazel or Buck to speed up building and testing.
6. Use CODEOWERS when you need to restrict access to certain projects.
7. Use a cloud CI/CD platform such as Semaphore to test and deploy your applications at scale.


# RPC remote procedure call

calling procedures are largely the same whether they are local or remote

An RPC is initiated by the client, which sends a request message to a known remote server to execute a specified procedure with supplied parameters. The remote server sends a response to the client, and the application continues its process.

远程过程调用协议。客户端在不知道调用细节的情况下，调用存在于远程计算机上的某个对象，就像调用本地应用程序中的对象一样。

比较正式的描述是：一种通过网络从远程计算机程序上请求服务，而不需要了解底层网络技术的协议。

## 对比RPC和http的区别 (两者都是一种通信方式)
1 RPC要求服务提供方和服务调用方都需要使用相同的技术，要么都hessian，要么都dubbo
而http无需关注语言的实现，只需要遵循rest规范
2 RPC的开发要求较多，像Hessian框架还需要服务器提供完整的接口代码(包名.类名.方法名必须完全一致)，否则客户端无法运行
3 RPC 对内，http对外


# distributed computing

A distributed system is a system whose components are located on different networked computers  
 challenges of distributed systems are:
maintaining concurrency of components,  
 overcoming the lack of a global clock,  
 and managing the independent failure of components

eg: HTTP, RPC-like connectors and message queues

# 微服务 - spring

## 特点

1.协同工作小而自治 2.将单一应用程序划分成一组小的服务，服务之间相互协调，互相配合，为用户提供最终价值。 3.每个服务运行在其独立的<mark>进程中</mark>，服务与服务之间采用轻量级的通信机制(如 HTTP 或 Dubbo)互相协作，每个服务都围绕着具体的业务进行构建，并且能够被<mark>独立的部署到生产环境中</mark> 4.应尽量避免统一的，集中式的服务管理机制，对具体的一个服务而言，应根据业务上下文，选择合适的语言、工具(如 Maven)对其进行构建。

## 定义

微服务化的核心就是将传统的一站式应用，根据业务拆分成一个一个的服务，彻底地去耦合，每一个微服务提供单个业务功能的服务，一个服务做一件事情，从技术角度看就是一种小而独立的处理过程，类似进程的概念，能够自行单独启动或销毁，拥有自己独立的数据库。

# 泳道

对服务链按需求进行分组复制，并实现逻辑、物理的隔离，使得不同需求的服务链运行在相隔的物理机器上，逻辑上如同游泳场中的泳道

微服务框架下服务个数多、调用链路较长，其中一个服务出问题会影响到整条链路。但 QA 提测往往需要该条链路上的多个服务配套测试，甚至是同时测试一个服务的多个演进版本。

提供稳定环境 和 多服务/多版本同时测试 看似相悖的需求，通过泳道“Swimlane”能够得到解决。

## 优势：

1.并行测试。（因此可以根据测试需要，部署不同分支的服务分组，多个泳道并行，多个服务/多个版本可同时提测）

2.提供稳定的骨干链路。（保证整个测试流程始终能正常运行）

3.错误隔离。（泳道内的服务发生异常 不会影响其他泳道）

# Nginx

performance and stability, HTTP server, proxy server, reverse proxy and load balancer
C10k problem - optimizing network sockets to handle a large number of clients at the same time - concurrency

## Compare

- Apache , benchmarks measuring web server performance

## Advantage

Fast web server, reverse proxy and load balancer, SSL/TLS terminator, web accelerator, content cache

## Proxy server

- cache, load balancer, TLS encryption, etc. application sits in front of back-end applications and forwards client

# k8s - kubernetes

automating development, scaling, and management of containerized applications

# php
-client-side scripting language  
-Hypertext Preprocessor  
-<? php echo .....>  


# RUST
fast programming language