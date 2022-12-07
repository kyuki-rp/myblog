---
title: 単一責務の原則
category: "プログラミング"
tags: ["単一責務の原則"]
slug: /articles/design/single-responsibility-principle/
---


# 単一責務の原則とは
クラスを変更する理由は1つ以上存在すべきでないという考え方。凝集とほぼ同義。オブジェクト指向におけるSoC。

単一責務の原則では、「役割（責務）＝変更理由」と定義され、変更理由が複数ある場合は役割が複数あるとみなされる。役割が複数あるクラスは分離して、凝集度を上げるべきである。

![単一責務の原則](./single-responsibility.jpg)
