---
date: '2025-03-12T21:30:37+08:00'
draft: false
comments: true
title: '配置 Morethanlog 主题'
slug: '0m3s8z9v'
cover: 'https://img-1300288738.cos.ap-beijing.myqcloud.com/PicGo_Home/202504132123185.png'
categories: ["技术"]
tags: ["morethan-log","Blog"]
---

配置 Notion 博客 Morethan-log 主题

<!--more-->

本地化翻译工作量逐渐上来了，继续使用 Obsidian 记笔记，进行翻译项目管理和统计逐渐变得困难，索性便将笔记、博客、翻译项目统计，全部迁移至 Notion 这个 All in One 的平台。

Notion 平台本身支持把页面发布为网站，但如果使用自定义域名的话，需要开通 PLUS 版本会员。Nobelium, NotionNext 等 Notion 建站工具可以免费将 Notion 页面发布为博客，并且可以自定义域名，但 Nobelium 项目年久失修，按照文档部署失败，而 NotionNext 中的主题少了一些精致，所以最终选择了这款 Morethan-log 作为 Notion 博客的建站工具。

## 部署方式

同 Nobelium, NotionNext 相同，Morethan-log 博客部署也十分简单，复制 Notion 模板，Fork GitHub 上的项目，到 Vercel 中部署。这里不再赘述，感兴趣可以访问项目地址查看。

[GitHub - morethanmin/morethan-log: 😎 A static blog using notion database](https://github.com/morethanmin/morethan-log)

## 装修笔记

这里简单记录一下，我的博客迁移过程。

### 首页头像和标签栏 favicon 设置

头像和标签栏 favicon 设置相对简单，替换根目录下 `public` 文件夹内对应的图片素材即可。

> 💡 **注意：** 文件名和文件类型都需要保持一致

### 首页 Profile 栏个人信息设置

在项目根目录下 `site.config.js` 文件内进行修改即可。该文件内可以修改博客相当多的基础信息，包括：

1. 姓名、角色、个人介绍、社交媒体信息
2. 项目名称、项目地址
3. 博客名称、博客简介、主题颜色
4. 谷歌数据统计插件、评论插件

小站尚未引入评论插件，原有有二：

1. morethan-log 对于 Cusdis 评论插件适配似乎并不好，基本处于不可用的状态
2. utterance 评论强制使用 GitHub 登录，考虑到小站内容主要围绕观后感、读后感、本地化翻译、以及日常工作中的 Excel 和 Photoshop 使用笔记为主，受众可能同我一样是非技术人员，并没有 GitHub, 所以放弃使用 utterance 评论

目前站长正在同 AI 疯狂输出，试图引入 Waline 评论系统，有进展会新开文章同步，在此之前，有问题可通过右侧信息栏邮箱联系。

## 文章页头像不显示问题

进入文章页，发现主题作者可正常显示，站长新发布的文章，作者头像无法正常显示。使用 F12 选择器进行定位，发现问题出在头像地址上：

修改项目根目录下 `next.config.js` 文件，将网址由 `s3-us-west-2.amazonaws.com` 修改为 `s3.us-west-2.amazonaws.com` 之后 Push 到 GitHub 上即可。