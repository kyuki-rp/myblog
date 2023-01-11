---
title: コメントの書き方
date: "2022-11-09"
category: "プログラミング"
tags: ["コメント"]
slug: /articles/comment/
---


# コメントの役割
コメントはコードとは異なり、プログラム実行時には無視され実行されることはない。そのため、コメントの内容は正しいかどうかテストされることはなく、間違っている可能性もある。

そこで、コメントに頼るのではなく、プログラム実行時に毎回実行・テストされるコード自体で、処理内容を表現する（自己文章化）ことが良いとされている。

自己文書化されたコードはコメントが少なくても読みやすく、コードとコメントの整合性が取れないといった事態も防ぐことができる。

コメントは、コードでうまく表現することに「失敗」したときのみ記載するようにするのが良い。

>適切なコメントの使用方法とは、コードでうまく表現することに失敗したときに、それを補うのに使うことです。
>
>Clean Code　著：Robert C. Martin　訳：花井志生

# 良くないコメント
読み手の理解を補助する情報を与えないようなコメントはすべて良くないコメントである。冗長なコメント、ひどいコードを補足するコメント、ノイズコメントはいずれも良くないコメントである。

## 冗長なコメント
読み手に新しい情報を与えないコメントは冗長なコメントである。冗長なコメントは読者からコードを読む時間を奪うだけなので削除するのが良い。

例1：コードからすぐに分かることを説明するだけのコメント
```
# ','で区切って0番目をfirst_nameに代入
first_name = name.split(',')[0]
```
```
# Sampleクラスの定義
class Sample:

    # コンストラクタの定義
    def __init__(self):
        pass

    # runメソッドの定義
    def run(self):
        pass
```

例2：関数ヘッダ
```
def sey_hello(name):
    """sey_hello()関数
       引数：name
       返り値：f'Hello {name}'
    """
    return f'Hello {name}'
```

## ひどいコードを補足するコメント
一見、読み手に新しい情報を与えているようにみえるコメントも、コード自体で表現（自己文章化）するのが良い。

例1：ひどい名前を補うためのコメント
```
# 一時的に平均値を変数に格納しておく
aaa = np.mean(num_list)
```
　　↓　解決策：aaaをわかりやすい名前に変える
```
mean_temp = np.mean(num_list)
```

例2：長いコードを補うコメント
```
# 極座標表示を直交座標表示に直して、2点間の距離を求める
distance = distance.euclidean((r1*np.cos(theta1), r1*np.sin(theta1)),
                              (r2*np.cos(theta2), r2*np.sin(theta2))
                             )
```
　　↓　解決策：変数（あるいは関数）を使用して式を分割する
```
vec1 = (r1*np.cos(theta1), r1*np.sin(theta1))
vec2 = (r2*np.cos(theta2), r2*np.sin(theta2))
distance = distance.euclidean(vec1, vec2)
```

例3：要約コメント
```
# sin曲線グラフの出力
x = np.linspace(0, 2*np.pi, 500)
plt.plot(x, np.sin(x))
plt.show()
```
　　↓　関数（あるいはクラス）として括り出す
```
def sin_plot():
    x = np.linspace(0, 2*np.pi, 500)
    plt.plot(x, np.sin(x))
    plt.show()

sin_plot()
```
※ 小さい関数をたくさん作るより、要約コメントを用いた方が可読性が高くなることもある。要約コメントを使いたくなった場合、コード設計を見直すのがベストだが、時間的制約によりコード設計を見直す余裕がなく、要約コメントを使用するのはやむを得ないこともある。

## ノイズコメント
コメントとして残すのは不適切なコメントはノイズコメントである。日誌コメントや属性と著名、過去のコードなどはソースコード管理システムで管理するのが良い。

例1：日誌コメント
```
# 変更履歴
# ------------------------------------
# 2019/10/09：get_description()メソッドの追加
# 2019/10/15：output_log()メソッドの追加
# 2019/10/23：Managementクラスの削除
# 2019/11/02：get_description()メソッドのエラーの修正
```

例2：属性と著名
```
# ボブによる追加
```

例3：コメントアウトされたコード
```
# mean = np.mean(num_list)
# var = np.var(num_list)
```

例4：長すぎるコメント
```
# このクラスはフィボナッチ数列生成ジェネレータです。
# フィボナッチ数列は1番目と2番目の数値は 1であり、
# 3番目以降の数値は直前の2数の和である数列です。
# イタリアの数学者レオナルド・フィボナッチに因んで名付けられました。
# …
```

例5：意味のわからないコメント
```
# 課長の気が変わったらこれを追加する → 10016, 10034, 10177
# 部長の気が変わったらこれを追加する → 20016, 20034, 20177
```

# 良いコメント
書かずに済ますよりも良いコメントはない。しかし、時間の都合などで優れた設計ができない場合もある。読み手が「なぜこんな実装になっているのか」と疑問に思うコードにはコメントをつけておくと良い。

## コードの欠陥を示すコメント
コードは絶えず進化していくものであり、常に欠陥を含んでいる。その欠陥について説明するコメントは必要なコメントである。この手のコメントはアノテーションコメントと呼ばれていて、以下のように使用する。

```
 # TODO: 引数の型チェック機能の追加
 # HACK: 冗長なコード。関数で括りだす
 # NOTE: ～という最適化を実施。処理速度が30分から10分に改善
 ```

その他よく使われる記法を、以下に示す。
|記法|典型的な意味|
|---|---|
|TODO|後で追加、修正するべき機能がある|
|FIXME|既知の不具合があり、修正が必要なコード|
|HACK|あまりキレイではない、リファクタリングが必要なコード|
|XXX|動くけど大きな問題がある危険なコード|
|REVIEW|意図通りに動くか、見直す必要があるコード|
|OPTIMIZE|非効率で最適化が必要なコード|
|CHANGED|コードをどのように変更したか情報を残す|
|NOTE|なぜこうなったかという情報を残す|
|WARNING|注意が必要なコード|

## コードの最適化に対するコメント
リファクタリングの際、コードの不用意な変更により、パフォーマンスが下がってしまうことがある。不用意なリファクタリングを避けるため、最適化を実施した箇所にはコメントを残すのが良い。

```
image_quality = 0.67  # NOTE: 0.67ならファイルサイズと品質の面で妥協できる
```

```
# NOTE: 処理時間の最適化を実施している
# TODO: 最適化の際に、可読性が低くなったのでリファクタリングする
def sort(list):
    …
    return result
```

# 参考文献
- Clean Code　著：Robert C.Martin　訳：花井志生
- リーダブルコード　著：Dustin Boswell, Trevor Foucher　訳：角征典