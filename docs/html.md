## link
常用：stylesheet, css
```html
<link href="/media/examples/link-element-example.css" rel="stylesheet">
```

## <a>
download : 下载url, 如果有值，作为文件名
同源，但blob:URL, data:URL

```javascript
objectURL = URL.createObjectURL(object);
```

## shadowdom
Shadow DOM 是创建组件级别 DOM 的一种方法。

```javascript
shadowRoot = elem.attachShadow({mode: open|closed})
```
 —— 为 elem 创建 shadow DOM。如果 `mode="open"`，那么它通过 `elem.shadowRoot` 属性被访问。
我们可以使用 innerHTML 或者其他 DOM 方法来扩展 shadowRoot。
Shadow DOM 元素：

1. 有自己的 id 空间。
2. 对主文档的 JavaScript 选择器隐身，比如 querySelector。
3. 只使用 shadow tree 内部的样式，不使用主文档的样式。
4. Shadow DOM，如果存在的话，会被浏览器渲染而不是所谓的 「light DOM」（普通子元素）。  

### 应用
1. 参考前端微服务
micro-app -> WebComponent 实现  
2. 像<input>之类的组件的实现  


# iframe
```javascript
<iframe src="demo_iframe_sandbox.htm"></iframe>
```
## 常用属性：
frameborder, height, width, name ,scrolling, src, srcdoc, sandbox

```javascript
A:<iframe id="mainIframe" name="mainIframe" src="/main.html" frameborder="0" 
scrolling="auto" ></iframe>

B:<iframe id="mainIframe" name="mainIframe" src="http://www.baidu.com" frameborder="0" 
scrolling="auto" ></iframe>
```

B:跨域，会实现页面跳转 - `window.location.href` 


常用函数： `iframe.contentWindow`, `iframe.contentDocument`
## iframe.contentWindow/iframe.contentDocument
iframe 的 window object.
iframe 的 document object.
``` javascript
window.frames[iframeId].window  /  getElementById(iframdId).contentWindow
```

## 后端
X-Frames-Options， Content-Security-Policy

## CROS 
window.location.protocol + window.location.host
!!子域不同也会引发跨域
iframe - document.domain = 域名
两个iframe 之间就可以交流了

## CDM
cross document messaging
window.postMessage???




