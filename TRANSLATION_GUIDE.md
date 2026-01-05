# 英文内容配置指南

## 概述

网站已支持中英文双语切换功能。所有英文内容配置在 `translations.js` 文件中。

## 配置文件结构

`translations.js` 文件包含两个主要部分：

1. **translations 对象** - 包含所有静态文本的翻译
2. **activityTranslations 和 interviewTranslations** - 包含活动和专访的详细翻译

## 如何配置英文内容

### 1. 基础文本翻译

在 `translations.js` 文件的 `translations.en` 对象中，你可以修改以下部分：

- `nav` - 导航菜单项
- `title` - 页面标题
- `aboutUs` - 关于我们部分
- `contact` - 联系方式部分
- `platform` - 平台背景部分
- `data` - 数据展示部分
- `activities` - 过往活动部分
- `interviews` - 人物专访部分

### 2. 活动和专访翻译

#### 活动翻译

在 `activityTranslations.en` 数组中添加活动翻译对象：

```javascript
{
    theme: "活动主题的英文翻译",
    time: "活动时间的英文格式",
    location: "活动地点的英文翻译",
    intro: "活动介绍的详细英文内容"
}
```

#### 专访翻译

在 `interviewTranslations.en` 数组中添加专访翻译对象：

```javascript
{
    time: "专访时间的英文格式",
    theme: "专访主题的英文翻译",
    guest: "嘉宾名称的英文翻译",
    intro: "专访介绍的详细英文内容"
}
```

## 注意事项

1. **数组顺序**：活动和专访的翻译数组顺序必须与 HTML 中的顺序一致
2. **HTML 属性**：所有需要翻译的元素都已添加 `data-i18n` 属性
3. **自动切换**：用户的语言偏好会保存在 localStorage 中，下次访问时会自动应用

## 添加新内容翻译

如果需要为新的活动或专访添加翻译：

1. 在 HTML 中找到对应的活动/专访元素
2. 在 `activityTranslations.en` 或 `interviewTranslations.en` 数组中添加对应的翻译对象
3. 确保数组索引与 HTML 中的顺序一致

## 测试

1. 打开网站
2. 点击右上角的 "English" 按钮
3. 检查所有内容是否正确切换到英文
4. 刷新页面，确认语言偏好已保存

