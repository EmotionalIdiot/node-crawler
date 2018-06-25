var request = require("request");
var fs = require("fs");

request
    .get({
        url:'https://recommender-api-ms.juejin.im/v1/get_recommended_entry?suid=vjImmmjUjn2EAJEe2NVE&ab=welcome_3&src=web',
        //  找到自己需要的数据源接口，控制台查看
        rejectUnauthorized: false,
        // 数据经过gzip压缩需要加入该参数，不然获取的数据是乱码 
        gzip:true,
        // 将该接口的请求头照抄
        headers:{
            "Accept":"/",
            'Accept-Encoding':"gzip,deflate,br",
            "Accept-Language":"zh-CN,zh;q=0.9",
            "Connection":"keep-alive",
            "Host":"recommender-api-ms.juejin.im",
            "Origin":"https://juejin.im",
            "Referer":"https://juejin.im/",
            "User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36"
        }
    },function (err,res,body) {  
        // 数据分析 处理
        var formatData = [];
        // 获取到的body数据序列化
        var d = JSON.parse(body).d;
        d.forEach(function (v,i) {  
            formatData.push({
                meta_list:{
                    readCount: d[i].viewsCount,
                    kindsOf:d[i].category.name,
                    createTime:d[i].createdAt,
                    username:d[i].user.username
                },
                title:d[i].title,
                collectCount:d[i].collectionCount,
                content:d[i].content,
                avatar:d[i].user.avatarLarge,
                lastUpdate:d[i].updateAt,
                screenShot:d[i].screenshot,
                originalUrl:d[i].originalUrl
            })
        });
        // __dirname指当前目录下 ，第二参数需要将数据转字符串 不然内容是 [Object][object]
        fs.writeFile(__dirname+"/data.json",JSON.stringify(formatData),function (err) {  
            if(err) throw err;
            console.log("数据爬取完成--掘金")
        })
})
    