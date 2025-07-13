---
date: '2024-11-24T23:12:44+08:00'
draft: false
comments: true
title: '安装 HUGO'
slug: '1be48c19'
image: 'https://img-1300288738.cos.ap-beijing.myqcloud.com/PicGo_Home/202503091602852.webp'
categories: ["技术"]
tags: ["HUGO", "Blog"]
---

HUGO博客安装比较简单，跟着 [Windows | Hugo](https://gohugo.io/installation/windows/) 即可轻松完成安装

## 环境配置

安装HUGO博客需要电脑已经安装Git，若没有安装可以访问 [Git for Windows](https://git-scm.com/download/win) 下载安装

## 使用 WinGet 安装 HUGO

先在 Microsoft Store 中搜索安装 Widgets for UniGetUI (formerly WingetUI)

之后使用管理员身份打开 Windows PowerShell, 并运行下方指令安装 HUGO

`winget install Hugo.Hugo.Extended`

安装完成后，继续输入下方指令判断是否安装成功

`hugo version`

成功显示 HUGO 版本，即为安装成功