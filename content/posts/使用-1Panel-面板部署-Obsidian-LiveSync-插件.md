---
date: '2025-03-27T12:37:54+08:00'
draft: false
comments: true
title: '使用 1Panel 面板部署 Obsidian LiveSync 插件'
slug: '9f3k7p2q'
cover: 'https://img-1300288738.cos.ap-beijing.myqcloud.com/PicGo_Home/202504041859665.webp'
categories: ["工作"]
tags: ["1Panel","Obsidian"]
---

Obsidian LiveSync 部署方法

<!--more-->

一个月体验下来，果然还是使不惯 Notion 的 Block 结构，遂将笔记软件换回 Obsidian. 翻译项目单独使用 Notion 来管理。

Obsidian LiveSync 插件文档并没有很详细，网上教程也大多使用 IBM 或者 [fly.io](http://fly.io/) 平台部署，需要绑定外币信用卡。其实，使用 1Panel 便可以轻松部署。

1. 在 1Panel 面板的应用商店中搜索 `Obsidian LiveSync` 点击安装
2. 设置用户名、密码、端口号并确认安装
3. 在防火墙放行设置的端口号
4. 安装完成后，访问 `http://localhost:5984/_utils`
5. 输入步骤 3 设置的用户名和密码登录
6. 点击 `Create Database` 并设置好数据库名
7. Obsidian 中安装 `Self-hosted LiveSync` 插件
8. 按要求输入上述步骤中的用户名、密码、数据库名和 URI
9. 点击 `Check` 确认无报错，点击 `Apply` 即可

如果也想同步到移动端，则需在 1Panel 面板上将应用反向代理，并设置域名和 SSL 证书。再将步骤 9 中的 URI 替换为反向代理的域名。