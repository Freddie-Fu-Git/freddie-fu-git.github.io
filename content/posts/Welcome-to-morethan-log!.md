---
date: '2025-03-05T15:22:48+08:00'
draft: false
comments: true
title: 'Welcome to Morethan Log!'
slug: '842a5801'
cover: 'https://img-1300288738.cos.ap-beijing.myqcloud.com/PicGo_Home/202504132123185.png'
categories: ["其他"]
tags: ["morethan-log","notion","Blog"]
---

## morethan log

Next.js static blog using Notion as a Content Management System (CMS). Supports both Blog format Post as well as Page format for Resume. Deployed using Vercel.

[Repository](https://github.com/morethanmin/morethan-log) | [Demo Blog](https://morethan-log.vercel.app/) | [Demo Resume](https://morethan-log.vercel.app/resume)

## Features

**📒 Writing posts using notion**

- No need of commiting to Github for posting anything to your website.
- Posts made on Notion are automaticaly updated on your site.

**📄 Use as a page as resume**

- Useful for generating full page sites using Notion.
- Can be used for Resume, Portfolios etc.

**👀 SEO friendly**

- Dynamically generates OG IMAGEs (thumbnails!) for posts. ([og-image-korean](https://github.com/morethanmin/og-image-korean)).
- Dynamically creates sitemap for posts.

**🤖 Customisable and Supports various plugin through CONFIG**

- Your profile information can be updated through Config. (`site.config.js`)
- Plugins support includes, Google Analytics, Search Console and also Commenting using Github Issues(Utterances).

## Getting Started

To use morethan-log, you must follow the steps below.

### Deploy on [vercel](https://vercel.com)

1. Star this repo.
2. [Fork](https://github.com/morethanmin/morethan-log/fork) the repo to your Profile.
3. Duplicate [this Notion template](https://www.notion.so/1ad7dfa2a72a808d982aeec89bcf5f64?pvs=21), and Share to Web.
4. Copy the Web Link and keep note of the Notion Page Id from the Link which will be in this format [username.notion.site/`NOTION_PAGE_ID`?v=`VERSION_ID`].
5. Clone your forked repo and then customize `site.config.js` based on your preference.
6. Deploy on [Vercel](https://vercel.com), with the following environment variables.
    - `NOTION_PAGE_ID` (Required): The Notion page Id got from the Share to Web URL.
    - `GOOGLE_MEASUREMENT_ID` : For Google analytics Plugin.
    - `GOOGLE_SITE_VERIFICATION` : For Google search console Plugin.

### Set your blog configuration

You can set your blog configuration by editing `site.config.js`.

### Writing Post

When you write a post, you should check the properties below.

![Writing Post](https://img-1300288738.cos.ap-beijing.myqcloud.com/PicGo_Home/202504132127330.png)