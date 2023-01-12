# RPC remote procedure call
calling procedures are largely the same whether they are local or remote  

An RPC is initiated by the client, which sends a request message to a known remote server to execute a specified procedure with supplied parameters. The remote server sends a response to the client, and the application continues its process.   

远程过程调用协议。客户端在不知道调用细节的情况下，调用存在于远程计算机上的某个对象，就像调用本地应用程序中的对象一样。

比较正式的描述是：一种通过网络从远程计算机程序上请求服务，而不需要了解底层网络技术的协议。


# distributed computing
 A distributed system is a system whose components are located on different networked computers  
 challenges of distributed systems are: 
 maintaining concurrency of components,   
 overcoming the lack of a global clock,   
 and managing the independent failure of components  

 eg: HTTP, RPC-like connectors and message queues

# 微服务 - spring
## 特点
1.协同工作小而自治
2.将单一应用程序划分成一组小的服务，服务之间相互协调，互相配合，为用户提供最终价值。
3.每个服务运行在其独立的<mark>进程中</mark>，服务与服务之间采用轻量级的通信机制(如HTTP或Dubbo)互相协作，每个服务都围绕着具体的业务进行构建，并且能够被<mark>独立的部署到生产环境中</mark>
4.应尽量避免统一的，集中式的服务管理机制，对具体的一个服务而言，应根据业务上下文，选择合适的语言、工具(如Maven)对其进行构建。

## 定义
微服务化的核心就是将传统的一站式应用，根据业务拆分成一个一个的服务，彻底地去耦合，每一个微服务提供单个业务功能的服务，一个服务做一件事情，从技术角度看就是一种小而独立的处理过程，类似进程的概念，能够自行单独启动或销毁，拥有自己独立的数据库。


# 泳道
对服务链按需求进行分组复制，并实现逻辑、物理的隔离，使得不同需求的服务链运行在相隔的物理机器上，逻辑上如同游泳场中的泳道

微服务框架下服务个数多、调用链路较长，其中一个服务出问题会影响到整条链路。但QA提测往往需要该条链路上的多个服务配套测试，甚至是同时测试一个服务的多个演进版本。

提供稳定环境 和 多服务/多版本同时测试 看似相悖的需求，通过泳道“Swimlane”能够得到解决。

## 优势：

1.并行测试。（因此可以根据测试需要，部署不同分支的服务分组，多个泳道并行，多个服务/多个版本可同时提测）

2.提供稳定的骨干链路。（保证整个测试流程始终能正常运行）

3.错误隔离。（泳道内的服务发生异常 不会影响其他泳道）



# Nginx 
performance and stability, HTTP server, proxy server, reverse proxy and load balancer
C10k problem - optimizing network sockets to handle a large number of clients at the same time - concurrency

## Compare 
- Apache , benchmarks measuring	 web server performance

## Advantage
Fast web server, reverse proxy and load balancer, SSL/TLS terminator, web accelerator, content cache

## Proxy server 
- cache, load balancer, TLS encryption, etc. application sits in front of back-end applications and forwards client

