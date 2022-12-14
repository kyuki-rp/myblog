---
title: クラス図
date: "2022-01-09"
category: "プログラミング"
tags: ["クラス図"]
slug: /articles/class-diagram/
---


# クラス図とは
UML（Unified Modeling Language: 統一モデリング言語）の代表的な図の一つ。
クラス図では、クラスと関連を用いてクラス間の依存関係を視覚的に表現できる。

# クラスの表記
クラスは、3つの区画に分割された長方形で表記する。3つの区画には上から順にクラス名、属性、メソッドが記載される。

![クラス図](./class-diagram-1.png)

属性やメソッドのアクセス可能性は、+、#、－といった記号を各属性やメソッドの前に記載することで表現する。

|記号|アクセス可能性|意味|
|---|---|---|
|+|public|すべてのオブジェクトからアクセス可能。|
|#|protected|自クラスと派生クラスからのみアクセス可能。|
|-|private|自クラスからのみアクセス可能。|

例えば、属性として製品番号、メソッドとしてrunとstopをもつVehicleクラスは次のように表記できる。

![クラス図](./class-diagram-2.png)

# 関連の表記
クラス同士の関連としてよく使われるものに、集約、コンポジション、継承、依存があり、それぞれ以下のように表記する。

+ 集約
AはBを保持している（has-a 関係）

![クラス図](./class-diagram-3.png)

例）空港は航空機を保持している

![クラス図](./class-diagram-4.png)

+ コンポジション
AはBによって構成されている（has-a 関係）

![クラス図](./class-diagram-5.png)

（例）タイヤは車の一部である

![クラス図](./class-diagram-6.png)

+ 継承
AはBの一種である（is-a 関係）

![クラス図](./class-diagram-7.png)

例）三角、四角、丸は図形の一種である

![クラス図](./class-diagram-8.png)

+ 依存
AはBを使用している（uses-a 関係）

![クラス図](./class-diagram-9.png)

例）人が電話を使用している

![クラス図](./class-diagram-10.png)