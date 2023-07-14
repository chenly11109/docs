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


## innerHTML property
`Document` - (`Element` - `Node` - `Event`)
- dangerouslySetInnerHTML
- innerHTML
 - on HTML elements to programmatically set their content
eg:
populat a `<div>` element with the data coming from a rich text editor
```javascript
const App = () => {
  const data = 'lorem <b>ipsum</b>';
  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
export default App;
```

- react will aware the HTML tags and renders them properly
- sanitization tools - `DOMPurify` - remove the script on the code
#### innerHTML
``` javascript
<ul id="list">
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
  <li><a href="#">Item 3</a></li>
</ul>


const list = document.getElementById("list");

list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;


```

# MIME
A media type (also known as a Multipurpose Internet Mail Extensions or MIME type) indicates the nature and format of a document, file, or assortment of bytes.

type/subtype;parameter=value
eg:text/plain;charset=UTF-8
application/pdf etc. -download

application/octet-stream
unknown binary file, browsers usually don't execute it, or even ask if it should be executed. They treat it as if the Content-Disposition header was set to attachment, and propose a "Save As" dialog.  


# ResizeObserver
The ResizeObserver interface reports changes to the dimensions of an Element's content or border box, or the bounding box of an SVGElement.
- `ResizeObserver.disconnect()`
- `ResizeObserver.observe()`
- `ResizeObserver.unobserve()`

``` javascript
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    ...
  }
})

resizeObserver.observe(element);

```