---
title: Html
draft: false
tags:
  - front-end
date: 2024-07-02
---
from: [尚硅谷前端入门html+css零基础教程](https://www.bilibili.com/video/BV1p84y1P7Z5/)

HyperText Markup Language 超文本标记语言

是一种组织信息的方式，通过超链接将不同空间的文字、图片等各种信息组织在一起，能从当前阅读的内容，跳转到超链接所指向的内容。

“超文本”(hypertext) 是指连接单个网站内或多个网站间的网页的链接。

## 基本结构
```html
<!-- 文档声明，声明当前网页的版本，向下兼容 html5 -->
<!DOCTYPE html>
<!-- 
zh-CN：中文-中国大陆(简体中文)
zh-TW：中文-中国台湾(繁体中文)
zh：中文
en-US：英语-美国
en-GB：英语-英国
-->
<html lang="en">
<!-- html 的根标签（元素），网页中的所有内容都要写根元素的里边 -->
<html>
    <!-- head 是网页的头部，head 中的内容不会在网页中直接出现，主要用来帮助浏览器或搜索引擎来解析网页 -->
    <head>
        <!-- meta 标签用来设置网页的元数据，这里 meta 用来设置网页的字符集，避免乱码问题 -->
        <meta charset="utf-8" />
        <!-- title 中的内容会显示在浏览器的标题栏，搜索引擎会主要根据 title 中的内容来判断网页的主要内容 -->
        <title>网页的标题</title>
    </head>
    <!-- body 是 htm1 的子元素，表示网页的主体，网页中所有的可见内容都应该写在 body 里 -->
    <body>
        <!-- h1 网页的一级标题 -->
        <h1>网页的大标题</h1>
        I love you
    </body>
</html>
```