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


