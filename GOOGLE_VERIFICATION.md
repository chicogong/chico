# Google Search Console 快速验证指南

## 第1步：获取验证代码

1. 访问 https://search.google.com/search-console
2. 点击"添加资源" → 选择"网址前缀"
3. 输入：`https://chico-lac.vercel.app`
4. 选择验证方法："HTML标签"
5. 复制meta标签中的content值

示例：
```html
<meta name="google-site-verification" content="ABC123XYZ..." />
```

复制 `ABC123XYZ...` 这部分（不包括meta标签）

## 第2步：更新验证代码

编辑 `app/layout.tsx` 文件的第49行：

**修改前：**
```typescript
verification: {
  google: 'your-google-verification-code', // 用户需要从Google Search Console获取
},
```

**修改后：**
```typescript
verification: {
  google: 'ABC123XYZ...', // 替换为您的验证代码
},
```

## 第3步：部署更新

```bash
git add app/layout.tsx
git commit -m "chore: Add Google Search Console verification code"
git push
vercel --prod
```

等待1-2分钟让Vercel完成部署。

## 第4步：完成验证

回到Google Search Console，点击"验证"按钮。

✅ 验证成功后，您将看到"所有权已验证"的消息。

## 第5步：提交Sitemap

1. 在Google Search Console左侧菜单找到"站点地图"
2. 输入：`sitemap.xml`
3. 点击"提交"

等待几天，Google将开始索引您的网站。

## 验证是否成功

在Google搜索框输入：
```
site:chico-lac.vercel.app
```

- **立即**：应该显示"找不到和您查询的..."（正常）
- **1-3天后**：应该显示至少1个结果
- **1-2周后**：所有页面被索引

## 故障排除

### 问题：验证失败
- 确保代码正确复制（不包含引号或空格）
- 等待部署完成（检查 https://chico-lac.vercel.app 源码）
- 清除浏览器缓存

### 问题：部署后还是失败
查看页面源代码（右键 → 查看源代码），搜索 "google-site-verification"，确认代码已更新。

### 问题：长时间未被索引
1. 在Google Search Console使用"URL检查"工具
2. 点击"请求编入索引"
3. 在社交媒体分享链接
4. 在其他网站添加链接

## 更多帮助

查看 `SEO_GUIDE.md` 获取完整的SEO优化指南。
