# http

- HTTP是客户端浏览器或其他程序与Web服务器之间的<mark>应用层通信协议</mark>  
- `URL` (Uniform Resource Locator，统一资源定位符)  
- `URI` Uniform Resource Identifier

## HTTP/1.1 HTTP/2
`HTTP/1.1` <br>
- Keep-Alive 长连接<br>
- 连接机制，计时器，计时器到0之后发出的一个探测包 - ACK包，Seq与上一个包是重复的<br>
- TCP 长连接<br>
- 优点：更快这一点不明显， 但显著减少了server的效能<br>

`HTTP/2` 
- 提供了一个称为<mark>加权优先顺序的功能</mark>。开发人员可以决定每次首先加载哪些页面资源。
- 在 HTTP/2 中，当客户端请求网页时，服务器会一次性将多个数据流发送到客户端，而不是逐个依次发送。这种数据传输方法称为<mark>多路复用</mark>。
- 开发人员可以为这些数据流分别分配一个不同的加权值，该值告诉客户端首先要呈现哪个数据流。
<mark>多路复用，服务器推送，标头压缩</mark>

## HTTP / HTTPS
#### HTTP问题
- 通信使用明文，容易被窃听
- 不验证通信方的身份，可能遭遇伪装
- 无法证明报文的完整性，有可能遭遇篡改  

#### HTTPS
客户端向服务器端索要并验证公钥。这一阶段使用的是非对称加密传输(RSA),服务端将数字证书发给客户端.其中数字证书包括:公钥和数字签名.客户端在拿到后对两者进行校验.
在非对称加密传输中,两端协商生成"对话密钥"。
双方采用"对话密钥"进行对称加密通信。  

SSL证书需要钱，功能越强大的证书费用越高，个人网站、小网站没有必要一般不会用。  
对称加密算法， 因为加密和解密用的是同一个密钥  
这个加密解密算法需要的密钥双方必须得知道啊， 但是密钥又无法通过网络发送  

非对称加密  
这个加密解密算法需要的密钥双方必须得知道啊， 但是密钥又无法通过网络发送  
用私钥加密的数据，只有对应的公钥才能解密，用公钥加密的数据， 只有对应的私钥才能解密  

公钥不用保密，但是一定得有个办法声明这个公钥确实是Bill的， 而不是别人的。  

 Bill可以把他的公钥和个人信息用一个Hash算法生成一个<mark>消息摘要</mark>， 这个Hash算法有个极好的特性，只要输入数据有一点点变化，那生成的消息摘要就会有巨变，这样就可以防止别人修改原始内容。  

CA（公信力认证中心）用私钥对消息进行加密形成数字签名,bill 的公钥和个人信息+数字签名=数字证书  

浏览器->服务器数字证书 ->浏览器CA列表验证证书


## hash routing & history routing
1. `#`长得不好看,但可路由，是一种anchor point, SPA 用了这个方式来假冒url, 是历史上的一种使用的方式  
2. 旧的浏览器不支持history routing
3. `history routing`也可以直接改url但不用加`#`了 
4. react-router 新版本即使是`#`也是用的histroy routing, 需要注意  
5. #之后的不会发到server端，所以如果涉及到reloading & linking, 不会有问题（针对#之前的url， 对#会重新定位) 
6. 但是browserRouter可能会有问题， 因为这个地址实际上在server上不存在，刷新的时候又发过去了  
- browser router - history API

```javascript
    document.location.href = 'https://developer.mozilla.org/';
```
- reloads the page

```javascript
    window.history.pushState({}, null, 'https://developer.mozilla.org/');
```

-change the URL without triggering the page reload.  
-URL must be of the same origin as the current page  


## 跨域 - cross-origin  
#### 同源策略
协议，域名，端口  
应用访问了应用域名或端口之外的域名或端口
*浏览器限制，而不是服务端限制  
*可以使用 a 标签（模拟xhr请求）和 img 标签  

#### 处理方式  
1. 直接改浏览器  
* 非简单请求：(options）方式- Access-Control-Request-Headers:content-type, 
Access-Control-Allow-Headers, Access-Control-Max-Age  
3. JSONP - JSON with Padding, 利用Script 标签请求资源可以跨界（不推荐）  
4. 修改服务器，“Access-Control-Allow-Origin”: “*”，“Access-Control-Allow-Methods”: “*”  
5. `开发时`在客户端添加反向代理（proxy)，这样请求就是同源的了  

#### iframe 的跨域问题  
#### document.domain
作用是获取/设置当前文档的原始域问题  
https://juejin.cn/post/7010691890928418824
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe
## rest API
`restful` reprensentational state transfer architectural style
1. uniform interface
2. client-server decoupling
3. statelessness
4. cacheability
5. code on demand(optional)
`layered system architecture` neither the client nor the server can tell whether it communicates with the end application or an intermediary.

## preflight
A `CORS` preflight request is a CORS request that checks to see if the CORS protocol is understood and a server is aware using specific methods and headers.
`Access-Control-Request-Method` - `post`

## idempotent
- `safe` - does not alter the state of the server - read-only eg:`OPTION`, `GET`
- An HTTP method is idempotent if the intended effect on the server of making a single request is the same as the effect of making several identical requests.  
- all `safe`/`PUT`/`DELETE` methods are `idempotent`, `POST` is not `Idempotent`


## blocked csp
blocked:csp  - in header
Content Security Policy  
Content-Security-Policy: default-src 'self'

apollo配置 - 对header进行设置 
