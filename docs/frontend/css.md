
# css
## text-overflow
ellipsis text...

## 居中显示
position: absolute;
transform: translateX(-50%);
left:50%;
# mansory layouts
场景：内容以图片为主， 信息与信息之间相对独立，信息与搜索匹配模糊，用户目的性不强


# css counters
```css
counter-reset: name defaultvalue;
 h3::before{
    counter-increment:section;
 }

```


# 画表格
```css
:root {
  --bg-color: #fff;
  --line-color-1: #AAA;
  --line-color-2: #DDD;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #000;
    --line-color-1: #666;
    --line-color-2: #333;
  }
}
canvas {
  display: block;  /* make the canvas act like a block   */
  width: 100%;     /* make the canvas fill its container */
  height: 100%;
  background-color: var(--bg-color);
  background-image: linear-gradient(var(--line-color-1) 1.5px, transparent 1.5px),
      linear-gradient(90deg, var(--line-color-1) 1.5px, transparent 1.5px),
      linear-gradient(var(--line-color-2) 1px, transparent 1px),
      linear-gradient(90deg, var(--line-color-2) 1px, transparent 1px);
  background-position: -1.5px -1.5px, -1.5px -1.5px, -1px -1px, -1px -1px;
  background-size: 100px 100px, 100px 100px, 10px 10px, 10px 10px;  
}
```

