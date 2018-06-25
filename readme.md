# read me first...

## Node.js的简易爬虫

#### 准备步骤：

1. 下载文件
2. npm install
3. npm start

#### 代码内容

**主要运用了request和fs模块，[request](https://github.com/request/request)用于使用被爬取页面的接口及重写请求头，[fs](http://nodejs.cn/api/fs.html#fs_fs_writefile_file_data_options_callback)用于将接收数据重新分析处理(提取有效部分),并写入本地文件中**

* 代码本身并无难度，重要的是对接口和数据的分析和梳理 
* 使用superagent和cheerio并不能获取到页面异步接收的数据
* （开始是想着使用爬虫获取淘宝店铺后台的一些数据，然后就没有然后了..恐怖如斯！）

这个例子主要借鉴了这位[大佬分享的技术](http://tosim.top/2017/07/21/nodejs%E7%88%AC%E8%99%AB%E6%8A%93%E5%8F%96%E5%BC%82%E6%AD%A5%E6%95%B0%E6%8D%AE/#more)，原创请移步

- [x] 日常装逼打卡  
