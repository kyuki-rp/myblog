---
title: TF-IDF
category: "AI"
tags: ["TF-IDF"]
slug: /articles/nlp/tf-idf/
---


# TF-IDFとは
TF-IDFは、TF(Term Frequency)とIDF(Inverse Document Frequency)を用いて単語を重み付けする手法。

TFは同じ文章内での出現頻度が高い単語ほど重みが大きくなるように、IDFは他の文章中での出現頻度が低い単語ほど重み大きくなるように調整する役割を担う。

TF-IDFによる各文章$d$中の単語$t$の重みは、以下の式で表される。

$$
\rm{tfidf}(t,d) = \rm{tf}(t,d) \times \rm{idf}(t)
$$

$\rm{tf}(t,d)$は文章$d$の内の単語tの出現率、$\rm{idf}(t)$は単語$t$が出現する文章の割合の逆数であり、以下の式で表される。

$$
\rm{tf}(t, d) = \frac{n_{t,d}}{\sum_{s \in d} n_{s,d}}
$$
$$
\rm{idf}(t) = log \frac{N}{\rm{df}(t)}
$$

|    ただし、  
|    $n_{t,d}$：文章$d$内での単語$t$の出現回数  
|    $\sum_{s \in d} n_{s,d}$：文章$d$内のすべての単語の出現回数の和  
|    $N$：全文章数  
|    $\rm{df}(t)$：単語$t$が出現する文章の数

なお、scikit-learnでの$\rm{idf}(t)$の定義は若干異なっている。

smooth_idf=Falseの場合、

$$
\rm{idf}(t) = log \frac{N}{\rm{df}(t)} + 1
$$

smooth_idf=Trueの場合、

$$
\rm{idf}(t) = log \frac{N+1}{\rm{df}(t)+1} + 1
$$
