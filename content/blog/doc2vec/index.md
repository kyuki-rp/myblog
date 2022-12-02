---
title: Doc2Vec
category: "自然言語処理"
tags: ["Doc2Vec", "dmpv", "DBOW"]
slug: /articles/nlp/doc2vec/
---

# Doc2Vecとは
Doc2VecはWord2Vecを応用したモデルで、単語だけでなく文書もベクトル化できる。Doc2Vecには、「dmpv」と「DBOW」の2種類あり、それぞれWord2Vecの「CBOW」と「skip-gram」に似たモデルである。

# dmpv
dmpvはWord2VecのCBOWに似たモデル。「文章IDと前後の単語からその中間の単語を予測する」というタスクを解く。

![Doc2Vec-dmpv](./doc2vec-dmpv-1.png)

CBOWの入力層に文章IDを追加したモデル。

![Doc2Vec-dmpv](./doc2vec-dmpv-2.png)

大量の文章を用いてモデル内の重みを更新することで、「文章IDと前後の単語からその中間の単語を予測する」という偽のタスクを解けるようにモデルを学習する。このモデルは文章と単語間の関係を学習しており、モデルの重みW<sub>VxN</sub>を文章ベクトル、単語ベクトルとして利用できる。

# DBOW
DBOWはWord2VecのSkip-gramと似たモデル。「文章IDからその文章を構成する単語を予測する」というタスクを解く。

![Doc2Vec-dbow](./doc2vec-dbow-1.png)

入力値として文章IDをOne-hotベクトル化したものを、正解値としてその文章を構成する単語をOne-hotベクトル化したものを使用する。

![Doc2Vec-dbow](./doc2vec-dbow-2.png)

大量の文章を用いてモデル内の重みを更新することで、「文章IDからその文章を構成する単語を予測する」という偽のタスクを解けるようにモデルを学習する。このモデルは文章と単語間の関係を学習しており、モデルの重みW<sub>VxN</sub>を文章ベクトルとして利用できる。