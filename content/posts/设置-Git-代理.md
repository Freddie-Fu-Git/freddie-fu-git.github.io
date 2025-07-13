---
date: '2024-11-25T21:02:34+08:00'
draft: false
comments: true
title: '设置 Git 代理'
slug: 'f7d92018'
cover: 'https://img-1300288738.cos.ap-beijing.myqcloud.com/PicGo_Home/202503091605124.webp'
categories: ["技术"]
tags: ["Git","HUGO","Blog"]
---
在使用 GitHub 子模块安装 HUGO 主题时会提示无法连接到仓库，网上搜索后发现原因为未设置 Git 代理。在 CMD 中使用下方命令可开启代理

```git
git config --global http.proxy http://127.0.0.1:port
git config --global https.proxy http://127.0.0.1:port
```

其中 `http://127.0.0.1` 为本机地址，不用更改， `port` 为使用代理的端口号。我这里使用的为 Clash for Windows， `http` 和 `https` 对应的端口号分别为 `7890` 和 `7891`

再次使用 Git 子模块命令安装主题，一般可正常下载