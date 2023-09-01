# NGINX 在线配置调试工具
# [在线调试地址](http://blog.luckly-mjw.cn/tool-show/nginx-online-config-debug/index.html)

### 背景：

- 学习 nginx 最头痛的问题在与，解析过程不可见，常常因效果不符合配置预期而烦恼，只能无脑尝试解决。
- 或者网上上翻阅各种教程，了解各个命令优先级，过程复杂繁琐
- nginx 一般放在 linux 服务器中，建立文件夹测试，查看日志都较为复杂，测试过程操作繁琐
- 而且一般 nginx 配置一次就不会经常改，学习成本高，刚学会，没有得运用就很容易忘记
- 因此，如果能有一个工具，解析 nginx 的运行流程，是先经过那个命令，再经过那个命，系统的访问路径是怎么样的，那就直观很多
![](https://upyun.luckly-mjw.cn/Assets/nginx-online-config-debug/background.png)



### 功能介绍：

- 所见即所得，提供 location 配置编写处，点击测试按钮，即可将该配置动态生成并设置
![](https://upyun.luckly-mjw.cn/Assets/nginx-online-config-debug/001.png)
- 测试文件夹，测试目录提供了做 nginx 做配置测试时，服务器可用的目录
![](https://upyun.luckly-mjw.cn/Assets/nginx-online-config-debug/003.png)
- 提供测试路径入口，发起测试自动访问该路径，直观测试 nginx 配置效果
![](https://upyun.luckly-mjw.cn/Assets/nginx-online-config-debug/006.png)
- 右侧是该测试路径情况的效果，返回访问到的资源文本，直观显示请求结果
![](https://upyun.luckly-mjw.cn/Assets/nginx-online-config-debug/002.png)
- 左下角展示 nginx 在该请求过程中，各个常用变量的值，直观了解 nginx 的可用变量，以便使用变量
![](https://upyun.luckly-mjw.cn/Assets/nginx-online-config-debug/004.png)
- 右下角展示 nginx 在解析该路径的过程，非常详细，使用 try_files 的各个 try 过程都能展示
![](https://upyun.luckly-mjw.cn/Assets/nginx-online-config-debug/005.png)
