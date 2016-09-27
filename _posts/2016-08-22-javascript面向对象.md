---
published:true
layout:post
title:javascript面向对象
category:前端
tags:
  -前端
  -面向对象
time:2016.08.22 18:00:00
excerpt:面向对象是一种思想。世间万物皆对象。
---
##javascript面向对象
面向对象编程，就使用面向对象的思想去写代码。相较于面向过程的编程，更抽象，代码复用率更高。

	var obj1=new Object();
	obj1.name='张三';
	obj1.showName=function(){
		alert(this.name);		
	}

这就是一个最简单的面向对象的程序。obj1是一个Object对象，name和showName()分别是obj1下面的属性和方法。


###工厂模式
	
	function person(name,age){
		var o=new Object();
		o.name=name;
		o.age=age；
		o.showName=function(){
			alert(this.name);
		}
		return o;
	}

	var P1=person("张三","22")；
	P1.showName();

工厂模式虽然使代码的复用率提高了，但是，工厂模式也有一个最致命的问题，即没有办法识别谁是谁的对象，都是object对象。

###构造函数模式

	function Person(name,age){
		this.name=name;
		this.age=age；
		this.showName=function(){
			alert(this.name);
		}
	}

	var P1=new Person("张三","22","男")；
	P1.showName();

注：当new创建一个函数时，这时候函数中的this就是所创建的对象，而且函数的返回值直接就是this（隐式返回）。

构造函数模式需要经过四个步骤。</br>
1.创建一个新对象</br>
2.将构造函数的作用域给了新对象（this指向新对象）</br>
3.为新对象添加属性</br>
4.返回新对象

创建自定义构造函数意味着可以把它的实例标识为一种特定的类型。这正是工厂模式无法做到的。
然而，构造函数模式也存在着一些问题。每当调用这个函数，新创建出一个对象实例时，都会把Person对象下面的showName()方法重新创建一边。很耗内存。

###构造函数模式与原型模式混合使用

	function Person(name,age){
		this.name=name;
		this.age=age；
	}
	Person.prototype.showName=function(){
		alert(this.name);
	}

	var P1=new Person("张三","22","男")；
	P1.showName();

这种模式，通过构造函数创建属性，通过原型创建方法，使每个实例的属性均不同，方法却是同一个，大大提高了性能，叫小了损耗。

#####原型

`hasOwnProperty()`，看是不是对象自身下面的属性。是原型属性，返回false；实例属性，返回true。

`constructor`，查看对象构造函数。默认，系统总会有一句`P1.prototype.constructor=P1;`,当执行某些操作时，会修改对象的constructor属性，此时要手动修改回来。
