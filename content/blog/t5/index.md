---
title: T5
category: "自然言語処理"
tags: ["T5"]
slug: /articles/nlp/t5/
---


# T5とは
TransformerをベースとしたEncoder-Decoderモデル。

分類、翻訳、要約といった様々なタスクを、入力も出力もテキストに統一する（Text-to-Text）ことで同じモデルで扱えるようにした。

BERT同様にマスク部分を予測するタスクを解くことによって学習する。15%のトークンが予測対象のトークンとしてランダムに選ばれ、内90%は[MASK]トークンに、10%はランダムな単語に置き換えられる。BERTと異なり、連続するトークンを単一のマスクキーワードに変更する。[^1]

Original
```
Thank you for inviting me to your party last week
```

Inputs
```
Thank you <X> me to your party <Y> week
```

Targets
```
<X> for inviting <Y> last <Z>
```

[^1] https://arxiv.org/abs/1910.10683