---
title: PyinstallerでTEMPディレクトリにファイルがないと言われるときの対処法
date: "2023-07-12"
category: "プログラミング"
tags: [Pyinstaller, pykakasi, streamlit]
slug: /articles/pyinstaller-add-datas/
---


# Pyinstallerについて

Pyinstallerで生成したexeファイルは、TEMPディレクトリ（_MEI*****）に解凍され、実行される。exeファイル実行時に「TEMPディレクトリにファイルが存在しない」という旨のエラーが出たときは、specファイルを編集してa.datasに存在しないと言われたファイルを追加する必要がある。

Pyinstallerはバージョン5.7.0を利用して動作確認を実施した。

# 例えばpykakasiでは...

pykakasiを利用したサンプルプログラムを作成する。
```python:title=sample.py
import pykakasi

kks = pykakasi.kakasi()
result = kks.convert('東京')
with open("./output.txt", mode="w") as file:
    file.write(result[0]['kana'])
```

ターミナルでexeファイル作成用のコマンドを実行する。

```
pyinstaller sample.py --onefile
```

生成されたexeファイルを実行すると、pykakasiが利用する辞書がTEMPディレクトリに展開されていないため、以下のようなエラーが出る。

```
FileNotFoundError: [Errno 2] No such file or directory: 'C:\\Users\\<ユーザ名>\\AppData\\Local\\Temp\\_MEIxxxxxx\\pykakasi\\data\\kanwadict4.db'
```

# pykakasi辞書をa.datasに追加する

pykakasiをインストールしたとき、site-packages/pykakasi/dataの配下に一緒にインストールされるpykakasi辞書をa.datasに追加する。

```python:title=sample.spec
a = Analysis(
    ['sample.py'],
    pathex=[],
    binaries=[],
    datas=[],
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
    noarchive=False,
)

# === この部分を追加 ===

import os, glob
package_path = 'C:/path/to/lib/site-packages' # 各自の環境に合わせてsite-packagesのパスを記載
files = glob.glob(f"{package_path}/pykakasi/data/**", recursive=True)
files = [file for file in files if os.path.isfile(file)]
for file in files:
    a.datas += [(file.split('/site-packages/')[-1], file, 'DATA')]

# === この部分を追加 ===

pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)
```

specファイルをもとにexeファイルを作り直すためのコマンドを実行する。

```
pyinstaller sample.spec
```

生成されたexeファイルを実行して、エラーが出ないことを確認する。

# 例えばstreamlitでは...

streamlitを利用したサンプルプログラムを作成する。

```python:title=main.py
import streamlit as st

if __name__ == '__main__':
    st.header("Hello world")
```

```python:title=run_main.py
import streamlit.web.cli as stcli
import sys

def streamlit_run():
    sys.argv=['streamlit', 'run', 'main.py', '--global.developmentMode=false']
    sys.exit(stcli.main())

if __name__ == "__main__":
    streamlit_run()
```

ターミナルでexeファイル作成用のコマンドを実行する。

```
pyinstaller run_main.py --onefile --copy-metadata=streamlit
```

exeファイルが読み込めるようにdistの配下にmain.pyをコピーしておく。

./dist  
　└ main.py  

生成されたexeファイルを実行すると、streamlitが利用するhtml、css、jsなどのファイルがTEMPディレクトリに展開されていないため、以下のようなエラーが出る。
```
FileNotFoundError: [Errno 2] No such file or directory: 'C:\\Users\\<ユーザ名>\\AppData\\Local\\Temp\\_MEIxxxxxx\\streamlit\\static\\index.html'
```

# streamlitが利用するhtmlファイルなどをa.datasに追加する

streamlitをインストールしたとき、site-packages/streamlitの配下にインストールされるhtml、css、jsなどのファイルをa.datasに追加する。

```python:title=run_main.spec
a = Analysis(
    ['run_main.py'],
    pathex=[],
    binaries=[],
    datas=datas,
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
    noarchive=False,
)

# === この部分を追加 ===

import os, glob
package_path =  'C:/path/to/lib/site-packages' # 各自の環境に合わせてsite-packagesのパスを記載
streamlit_files = glob.glob(f"{package_path}/streamlit/**", recursive=True)
files = [file for file in streamlit_files if os.path.isfile(file)]
for file in files:
    a.datas += [(file.split('/site-packages/')[-1], file, 'DATA')]

# === この部分を追加 ===

pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)
```

specファイルをもとにexeファイルを作り直すためのコマンドを実行する。

```
pyinstaller run_main.spec
```

生成されたexeファイルを実行して、エラーが出ないことを確認する。