---
layout: post
title:  (原创)Neural style神经元网络深度学习皮克斯风美化头像
category: neural network
tags: [neural style,tensorflow,Pixar]
---
## 用Neural style 神经元网络学习Pixar把你画的美美的

有画家将普通的人物生活照改画成皮克斯动画风，看起来非常惊艳。周末开始训练一下“神经病网络”，让机器学习一下皮克斯的画风，看能达到什么效果。

![20170909163407](https://raw.githubusercontent.com/zhengr/zhengr.github.io/master/assets/images/20170909163407.jpg)

![20170909163219](https://raw.githubusercontent.com/zhengr/zhengr.github.io/master/assets/images/20170909163219.jpg)

![20170909163244](https://raw.githubusercontent.com/zhengr/zhengr.github.io/master/assets/images/20170909163244.jpg)

![20170909163255](https://raw.githubusercontent.com/zhengr/zhengr.github.io/master/assets/images/20170909163255.jpg)

![20170909163305](https://raw.githubusercontent.com/zhengr/zhengr.github.io/master/assets/images/20170909163305.jpg)

![20170909163314](https://raw.githubusercontent.com/zhengr/zhengr.github.io/master/assets/images/20170909163314.jpg)

看起来是不是美美滴! 闲话少说， 直接上neural style开始深度学习，试着皮克斯的画风把下面的高圆圆重画一下， 看能画出啥样子，原谅我吧！要更多了解neural style请参看论文 https://arxiv.org/pdf/1508.06576v2.pdf

![20170909163324](../../assets/images/20170909163324.jpg)
手头没有GPU服务器，AWS账户也没钱了， 就弄个普通机器跑吧， 一分钟一个迭代， 跑一千圈，得16个小时，用GeForce GTX Titan X GPU 之类都是按照分钟来的， 深度学习一直是壕的荣耀。

![20170909Capture1](https://raw.githubusercontent.com/zhengr/zhengr.github.io/master/assets/images/20170909Capture1.PNG)

![20170909Capture2](https://raw.githubusercontent.com/zhengr/zhengr.github.io/master/assets/images/20170909Capture2.PNG)

希望能画出一个不要太丑的高圆圆，天知道会成什么样子。等待吧。。。。。。。。

----------------------------------------------------分割线----------------------------------------------------

