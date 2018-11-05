# 常用组件

https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxe1adf0c2c539a0f3&token=&lang=zh_CN

## 介绍

用于组件开发测试

- 头部导航菜单 - 滚动
- 头部导航菜单 - 固定
- 主题按钮
- 自定义弹框
- 自定义城市选择 - 数据自定义
- 日期选择控件 - 范围选择
- 无限结构树 - 代理图

# 公用方法

**1、设置主题色 **

> setColors(theme_color)
> getColors()

**2、过滤并合并拥有相同字段的数据 **

> _compareJson(json1 = {},json2 = [],key = '',curkeys = [])

**3、对象参数转url字符串 **

> _paramsToString(params)

**4、获取URL字符串的参数 **

> getparams(url)

**5、发送短信倒计时 **

> _smsCountDown()

...........................................................................................

# 使用方法

**1、 头部导航菜单 - 滚动 （level-scroll）**

```graph
"level-scroll": "plugin://myPlugin/level-scroll"

<view class="level-scroll">
    <level-scroll navlist="{{navlist}}" bind:clickEvent="navi_click" navcur="{{navcur}}" />
</view>
```

**2、 头部导航菜单 - 固定 （level-fixebox）**

```graph
"level-fixebox": "plugin://myPlugin/level-fixebox"

<view class="level-fixebox">
    <level-fixebox navlist="{{navlist1}}" bind:clickEvent="navi_click"/>
</view>
```

**3、 主题按钮 （theme-button）**

```graph
"theme-button": "plugin://myPlugin/theme-button"

<theme-button title="提示按钮" bind:clickEvent="apply_tips" />
```

**4、 自定义弹框 （dialog）**

```graph
"dialog": "plugin://myPlugin/dialog"
"popup-textarea1": "plugin://myPlugin/popup-textarea1"

<dialog title="提示" isShow="{{isdialog}}" cancelText="哈哈">我是谁</dialog>
<popup-textarea1 bind:confirmEvent="confirm_click"  isShow="{{isPopup1}}" title="否决取消" />
```

**5、 自定义城市选择 （address-picker）**
```graph
"address-picker": "plugin://myPlugin/address-picker"

<address-picker show="{{pickstate}}" value="{{init_region}}" bind:cancelEvent="pick_cancel" bind:confirmEvent="picker_confirm" />
```

**6、 日期选择控件 （date-choose）**
```graph
"date-choose": "plugin://myPlugin/date-choose"

<date-choose bind:clickEvent="query_click" start-date="{{startDate}}" isEnds="{{false}}" end-date="{{endDate}}" />
```

**7、 无限结构树 （Tree-node）**
```graph
"Tree-node": "plugin://myPlugin/Tree-node-txt"

<view class="api_wrap" >
	<block wx:for="{{ treeList }}" wx:key="index" wx:for-item="tree1">
		<Tree-node dataList="{{tree1}}" catch:clickEvent="node_click" catch:popupEvent="node_popup" />
	</block>
</view>
```