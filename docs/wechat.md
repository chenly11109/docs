# h5 页面
h5是一种编程语言，用于微信的页面

# download
```javascript
export default function download(url: string, name: string) {
  const link = document.createElement('a');
  link.download = name;
  link.href = url;
  link.style.display = 'none';
  link.click();
  link.remove();
}
```