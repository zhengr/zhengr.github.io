---
published: true
layout: article
key: 20191216
---
机器学习世界的研究重点稍微从探索“模型 能够理解什么”，转向了研究“模型是如何理解的”。由于人们担心引入偏差，或者过度泛化模型的适用性，因此开发出了What-If Tool（WIT）这样的工具。这个工具可帮助数据科学家深入研究模型的行为，并将各种功能和数据集对输出的影响进行可视化。WIT由Google引入，简化了比较模型、切片数据集、可视化构面和编辑单个数据点等任务，并可以在Tensorboard 或Jupyter notebooks中使用。尽管WIT可以帮助执行分析，但研究者仍然需要对模型背后的数学 和理论有深刻的理解。WIT只是数据科学家 用来深入了解模型行为的工具，对于使用不当或缺乏训练不佳的算法，初级用户不应奢望有任何工具可以消除或减轻其风险或造成的损害。

在数据中我们对What-If充满了好奇，总是想从上下文关联推断中获得对未来假设的展望。

![wit-smile-intro.png](https://github.com/tensorflow/tensorboard/blob/master/tensorboard/plugins/interactive_inference/img/wit-smile-intro.png?raw=true)

What-If Tool(WIT)为扩展对黑箱分类或回归ML模型的理解提供了一个易于使用的接口。使用该插件，您可以对大量示例执行推理，并立即以各种方式可视化结果。此外，可以手动或以编程方式编辑示例并重新运行模型，以查看更改的结果。它包含用于研究模型性能和数据集子集公平性的工具。

https://pair-code.github.io/what-if-tool/index.html 洞悉数据的利器，Google PAIR（[People + AI Research initiative (PAIR)](https://www.google.ai/pair) ）出品。

