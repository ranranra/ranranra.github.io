---
layout: post
title: apache服务器的下载与安装
date: 2016-2-14
categories: blog
tags: [服务器]
description: 从今日起正式开始写博客，每日一篇，聊一聊技术，谈谈诗和远方

---

## 简介

### apache服务器

Apache是世界使用排名第一的Web服务器软件。它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用，是最流行的Web服务器端软件之一。Apache，nginx，tomcat并称为网页服务三剑客。


### apache服务器与tomacat服务器服务器的区别？

Apache是web服务器，Tomcat是应用（java）服务器，Tomcat只是一个servlet容器，是Apache的扩展。 Apache和Tomcat都可以做为独立的web服务器来运行，但是Apache不能解释java程序。

两者都是一种容器，只不过发布的东西不同：Apache是html容器，功能像IIS一样；Tomcat是jsp/servlet容器，用于发布jsp及java的，类似的有IBM的websphere、BEA的Weblogic，sun的JRun等等

## apache服务器的安装

### 下载apache

推荐从[apache官网](http://httpd.apache.org/)上直接下载。

按照如下步骤进入下载页面:
1.点击Download

![](http://7xqtb3.com1.z0.glb.clouddn.com/blog%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE20160214013941.png)

2.点击Files for Mircrosoft Windows

![](http://7xqtb3.com1.z0.glb.clouddn.com/blog%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE20160214014651.png)

3.点击ApacheHaus

![](http://7xqtb3.com1.z0.glb.clouddn.com/blog%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE20160214014736.png)

4.根据自己的电脑选择下载：

x86代表32位电脑，X64代表64位电脑

![](http://7xqtb3.com1.z0.glb.clouddn.com/blog%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE20160214015436.png)

## 安装apache

解压下载的文件后，得到一个文件夹

![](http://7xqtb3.com1.z0.glb.clouddn.com/blog%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE20160214020024.png)

通过dos窗口进入到apache文件夹得bin目录下：
输入
httpd -k install

![](http://7xqtb3.com1.z0.glb.clouddn.com/blog%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE20160214020343.png)

如果显示如下，恭喜您安装成功。

![](http://7xqtb3.com1.z0.glb.clouddn.com/blog%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE20160214020551.png)


### 博主在安装的时候遇到的问题：

连接服务器出现异常

![](http://7xqtb3.com1.z0.glb.clouddn.com/blog%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE20160214163422.png)

## 使用
使用apache既能通过命令行的形式使用，也能通过apache官方自带的图形化界面使用。

在apache文件夹的bin目录下，官方自带有ApacheMonitor图形化操作界面

![](http://7xqtb3.com1.z0.glb.clouddn.com/blog%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE20160214020910.png)
