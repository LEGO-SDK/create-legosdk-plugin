# create-legosdk-plugin

使用 Plugin 模板创建一个 LEGO-SDK 扩展

## 使用方法

1. 下载本仓库 [ZIP](https://github.com/LEGO-SDK/create-legosdk-plugin/archive/master.zip) 包
2. 修改其中的 ```plugin.json``` 文件相关参数
3. 在解压目录，执行 npm start
4. 分别使用 Xcode / Android Studio 开发对应插件

## 发布方法

将开发好的仓库上传至你自行创建的 GitHub 仓库中

### iOS

1. 修改仓库目录下的 podspec 文件，需要修改的参数有仓库地址、描述等
2. 自行发布至 CocoaPods Spec，或者使用私有 podspec 形式发布

### Android

1. 发布一个 Tag
2. 访问 jitpack.io，填入仓库地址，选择对应的 Tag Build 即可