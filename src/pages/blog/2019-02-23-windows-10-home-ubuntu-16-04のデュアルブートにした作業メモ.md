---
templateKey: blog-post
title: Windows 10 Home+Ubuntu 16.04のデュアルブートにした作業メモ
date: 2019-02-23T09:45:54.420Z
description: Dockerとかいろいろ使いたいのでやってみたの巻
tags:
  - '#setting'
---
株のソフトとかオフィスとか動かしたいと思ってWindows 10 Homeを使っていたけれども、どちらもブラウザから使うで問題なくなったため、Ubuntuを導入することにした。

とはいえWindowsをすぐ消すわけにも行かないのでパーティションを切ってデュアルブート環境にしたときの作業メモ。

#### 環境
マザーボード: MSI B250I GAMING PRO AC ITX

グラボ: MSI GeForce GTX 1080 GAMING X 8G

BIOS: E7A67IMS.130

Linuxカーネル: 4.15.0-45-generic

ディスプレイ: 24型が5枚！

#### 前準備
私の自作機のストレージはOSブート用のSSDとデータ保存用のHDDの2枚構成なので、SSDに入っているWindowsの領域をEaseUS Partition Masterで切り分けてext4でフォーマット。あとはついでにHDDの方も切り分けてFAT32でフォーマット。

あとはUbuntu 16.04のISOイメージをUNetbootinをUSBに書き込んで前準備完了。

#### OSのインストール
USBを刺したまま起動してF11連打。ISOを入れたUSBを指定するとGRUBが立ち上がるので、`e`を押して編集画面に移行。`Linux`の行の最後に`ACPI=off nomodeset`を追加してF10でインストール画面に。

あとはポチポチやって先ほど作ったパーティションを指定するとイントール完了。

#### 各種ソフトのインストール
##### よく使うソフトたち
まずはお決まりのやつ。
```
sudo apt update
```

`gcc`と`build-essential`は後でやるnvidiaドライバインストールに必要なのでここで入れておく。
```
sudo apt install vim git zsh screen gcc build-essential
```

あとは[chrome](https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQiA-8PjBRCWARIsADc18TL4rqXX7yuqHOGbdQpDq6qIFyqoWCo3oudPytr7LYABc0WZw25x7CMaArLMEALw_wcB&gclsrc=aw.ds)をインストール

##### neovimのインストール
公式にしたがってやったらうまくいった特筆することなし。

[Installing Neovim](https://github.com/neovim/neovim/wiki/Installing-Neovim)
```
sudo add-apt-repository ppa:neovim-ppa/stable
sudo apt-get update
sudo apt-get install neovim

sudo apt-get install python-dev python-pip python3-dev python3-pip
```

##### エディタ、IDE
公式から[Visual Studio Code](https://code.visualstudio.com/)と
[Intellij IDEA](https://www.jetbrains.com/idea/)をダウンロードしてインストールした。いずれも設定ファイルをgithub上にアップロードしているので、Access Tokenを入力して環境をダウンロード。

##### キーボード設定
###### CapsとCtrlを入れ替え
[コマンド一発でCapsLockをCtrlに変える方法](https://linuxfan.info/capslock-ctrl)を参考に以下を実行。再起動不要。

```
gsettings set org.gnome.desktop.input-sources xkb-options "['ctrl:swapcaps']"
```

###### Input Methodの切り替え


##### 日本語設定


##### グラフィック関連
###### NVIDIAドライバインストール
贅沢にもディスプレイを5枚つないでいるため、NVIDIAドライバを入れる。昔、`apt`で入れてドハマりした経験があった上ので、[公式](https://www.nvidia.co.jp/Download/index.aspx?lang=jp)からダウンロードしてインストール。

この時、Xが生きていると先に進めないので、`Ctrl+Alt+F1`でコマンドラインモードにした上で`sudo service lightdm stop`としてXを切ってからインストールを開始する。終了したら再起動。

###### ディスプレイ設定(dGPU)
`sudo nvidia-xconfig`として/etc/X11/xorg.confにXの設定ファイルを自動作成(やらなくていいかも)。

その後、`sudo nvidia-settings`としてNVIDIA X Server Settingsをroot権限で立ち上げる。画面の配置とかをいいようにして、右下のSaveボタンを押す。保存場所を聞かれるので先ほどの/etc/X11/xorg.confに上書きして保存する。

_保存したら、nvidiaではなくUbuntu側のSystem Settings -> Displaysから適用ボタンを押す。この作業は結構盲点で調べても出てこないハマりどころ。_

###### ディスプレイ設定(iGPU)
外付けのGPU(dGPU)が4枚までの出力に対応しており、5枚に出力するには内蔵グラフィック(iGPU)を利用する必要がある。

[この記事](https://himeji-cs.jp/wiki/Ubuntu%E3%81%A7dGPU/iGPU%E3%81%AE%E3%83%87%E3%83%A5%E3%82%A2%E3%83%AB%E3%83%A2%E3%83%8B%E3%82%BF%E8%A8%AD%E5%AE%9A)を真似しようと思ったが、まだうまくいかず。
ハードウェアの一覧を取得する`lshw`コマンドを使うと内蔵グラフィックは認識されているようだがわからないので要調査。

#### 各種言語環境の構築
極力ローカルで環境を作って、設定ファイルを共有するようにしたかった。

#### Dockerのインストール
