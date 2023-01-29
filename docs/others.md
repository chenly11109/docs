too long; didn't read" -> tl;dr


## Any organization that designs a system will produce a design whose structure is a copy of the organization’s communication structure. – Melvin E. Conway

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

# webpack / rollup
#### Babel
Bundler-based build tool - crawl process and concatenate entire JS file

Source code ,distribution(list) code


Vite
Es modules in browser - transform and serve a piece of application	code using ES Modules when the browser request for it
(Deploy)

Production - performance optimization - tree-shaking, lazy-loading, common chance splitting

More bundles means better caching, but less compression


#### Entry
#### Output
#### Loaders - 
process other types of files and convert then into valid modules that can be consumed by application and added to dependency graph
#### Test:which file should be transformed
 #### Use
 which loaders should be used to do the transforming
module.rules
#### Cache - 
Cache the generated web pack modules and chunks to improve build speed - filesystem for more options


Plugins

Mode
 Browser compatibility



///A small sample of how a bundler works!
#### Transpile 
take source code written in one language and transforming into another language that has a similar level of abstraction

Web pack, browserify,parcel

#### Entry file - bootstrap our entire application
#### Bootstrapping
bootstrap - 序列,starting code, instructions for how the program should start
Code splitting on demand loading
-try understand which file it depends on - iterate - figures out every module - dependency graph

Circular dependencies, caching module exports, parsing each module just once

#### Javascript parser
Parser - resolve something into components - complier in a tree like structure(parse tree, Abstract syntax tree - AST Tree)

commonJS module system: require, module, export

```javascript
createAsset(fileName){
Return {
Id,filename,dependencies(get when traverse ast), code(transformAst)
} 
}

createGraph(entry){
mainAsset = createAsset(entry);
->queue[] ->createAsset->{id, dependencies, code, filename)
Execute until queue is empty

—>{
Mapping,->relativePath : child.id
Dependencies ->
```

1.add entry point
2.module graph
3.babel, transpile 
Chunk graph
Chunk main
Chunk async

Optimization.availableModules
Child : normal import, same chunks, all importer must be included, try all dependencies optionally 