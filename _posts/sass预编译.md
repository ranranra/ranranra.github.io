---
published: true
layout: post
title: sass预编译
category: 前端
tags: 
  - 前端
  - 工具
time: 2016.08.10 8:00:00
excerpt: sass不是一种语言，而是一种工具。可以提高前端工程师的css开发效率，增强css的可维护性。<br/>
sass是用Ruby语言写的，所以在安装sass之前要先安装**Ruby**,才能安装sass。
---
sass不是一种语言，而是一种工具。可以提高前端工程师的css开发效率，增强css的可维护性。<br/>
sass是用Ruby语言写的，所以在安装sass之前要先安装**Ruby**,才能安装sass。

<!--more-->
#sass预编译
假期，利用一个礼拜的时间学习了一下css预编译技术中的一种--sass。总体来说，上手很快，优点也很明显，开发速度的提升、代码的更加通俗易懂、维护更加简便、可以实现简单js的效果。

##

###简单语法规则
#####1、导入及注释
导入使用`@import`，以`.sass`、`.scss`为后缀名的文件可以省略后缀名。</br>
单行注释使用`\\`，多行注释使用`\* *\`。

#####2、变量
变量以`$`开头,例如`$color:red;`，引用时直接引用变量名即可。

	$color: red;
	div{
		background: $color;
	}
在引用复杂变量的时候，用`#{}`,例如`margin-#{$Top};`

	$Top:top;
	div{
		margin-#{$Top}: 10px;
	}

多值变量：`list`型，`map`型。<br/>

**list**型，通过`nth($var,$index)`取值。

	$linkColor: #08c #333;
	a{
  		color:nth($linkColor,1);
  		&:hover{
    		color:nth($linkColor,2);
  		}
	}

**map**型

	$headings: (h1: 2em, h2: 1.5em, h3: 1.2em);
	@each $header, $size in $headings {
  		#{$header} {
    		font-size: $size;
  		}
	}
#####3、计算
使用sass可以完成简单的计算。

	div{
		width: 1080px / 2;
		height: 40px + 200px;
	}	

#####4、嵌套
嵌套分为选择器嵌套和属性嵌套。本人用的几乎是选择器嵌套。个人觉得属性嵌套很乱……

 	p{
 		width: 448px;
 		height: 14px;
 		font-size: 8px;
 		a{
 			color: #666;
 			&:hover{
 				text-decoration: underline;
 				color: $baseColor;
 			}
 		}
 	}

注：`&`代表父级元素。

#####5、继承
`@extend`:使一个选择器继承另一个选择器。
	
	.class{
		border: solid 1px #000;
	}
	.class2{
		@extend .class;
		background: #bdbdbd;
	}

#####6、混合
通过`@mixin`声明，通过`@include`调用。<br/>
混合，可以通过`$`传递参数，多参数以`,`分隔；也可以不传参。<br/>
无参：

	@mixin block {
		display: block;
    	margin: 0 auto;
	}
	div{
    	@include block;
	}

多个参数传参：

	@mixin style($border:1px solid #000, $baseColor:#666){
    	border-bottom: $border;
		background: $baseColor;
	}
	ul li{
    	@include style(1px solid #ccc);
	}
	ul li a{
    	@include style($baseColor:pink);
	}

多组值参数：

	@mixin box-shadow($shadow...) {
  		-webkit-box-shadow:$shadow;
  		box-shadow:$shadow;
	}
	.box{
 		border:1px solid #ccc;
  		@include box-shadow(0 2px 2px rgba(0,0,0,.3),0 3px 3px rgba(0,0,0,.3),0 4px 4px rgba(0,0,0,.3));
	}

#####7、颜色函数
`lighten()`,`darken()`是两个常用的颜色函数，分别可以将颜色浅一些或深一些。

	nav{
		background: lighten($baseColor,20%);
		a{	
			width: 110px;
			height: 40px;
			display: inline-block;
			&:hover{
				background: darken($baseColor,5%);
			}
		}
	}

对于sass，我还只是初学者，文章里面只是总结了一小部分我经常用，或者用到过的知识点和小例子。在今后的学习中，我会努力完善自己的知识体系，更深入的去学习sass。
