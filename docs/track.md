# 埋点
## 定义
所谓埋点就是在应用中特定的流程收集一些信息，用来跟踪应用使用的状况，后续用来进一步优化产品或是提供运营的数据支撑，  

### 包括访问（Visits)，   
访客（Visitor）， - session,   
停留时间（Time On Site），  
页面查看（Page Views，又称为页面浏览)  
跳出率（Bounce Rate，又可称为蹦失率） - 单个页面访问（只打开一个页面就关掉了）所占的会话比例

推出率，转化率，

### 信息收集可以大致分为两种:
页面统计（track this virtual page view），
统计操作行为（track this button by an event）。


## 前端埋点 - SDK 

1.手动代码埋点：用户触发某个动作后手动上报数据
优点：是最准确的，可以满足很多定制化的需求。
缺点：埋点逻辑与业务代码耦合到一起，不利于代码维护和复用。
2.可视化埋点：通过可视化工具配置采集节点，指定自己想要监测的元素和属性。核心是查找 dom 然后绑定事件，业界比较有名的是 Mixpanel、GrowingIO、神策
优点：可以做到按需配置，又不会像全埋点那样产生大量的无用数据。
缺点：比较难加载一些运行时参数；页面结构发生变化的时候，可能就需要进行部分重新配置。
3.无埋点：也叫“全埋点”，前端自动采集全部事件并上报埋点数据，在后端数据计算时过滤出有用数据
优点：收集用户的所有端上行为，很全面。
缺点：无效的数据很多、上报数据量大。


曝光埋点一般是用来统计页面某个模块、区域被“看到”的次数。这里的“看到”是指被用户有效浏览，所以曝光埋点的关键就在于怎么定义“有效”，因为埋点也是需要开发的，那么就需要一个可工程化的逻辑。
#### sdk 
software development kit, a set of tools that provides a developer with the ability to build a custom app which can be added on, or connected to. Another program.)

Sdk : compliler, code samples. Code libraries, testing and analytics tools, documentation, debuggers
Eg: Apple’s iOS SDK, Google Android SDK

#### 页面性能监控， 错误报警监控  
#### 用户行为监控
页面访问次数- PV
页面访问人数- UV  
用户点击操作的行为  
