# h5 页面
h5是一种编程语言，用于微信的页面

## 小程序
打包-微信开发者工具-上传（appID）

# download
实际效果是打开了一个新的窗口
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
# 小程序中 copyURL
```javascript
  const {path, params} = Taro.useRouter();

  let url = baseURL + path + '?';
  for (const [key, value] of Object.entries(params)) {
          if (key !== '$taroTimestamp') {
              url += key + '=' + value + '&';
          }
        }
  url = url.substring(0, url.length - 1);

  Taro.setClipboardData({
          data: url,
          success: () => {
            Taro.showToast({
              title: reason || I18N.ShareSource.download_noright,
              icon: 'none',
            });
          },
        });
```
without Taro

```javascript
function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}


```

