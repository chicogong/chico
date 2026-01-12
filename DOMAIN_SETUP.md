# 自定义域名配置指南

## 域名配置

本项目已配置自定义域名：**chico.aimake.cc**

## Cloudflare DNS 配置步骤（推荐）

### 1. 登录 Cloudflare 并添加 CNAME 记录

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 选择域名 `aimake.cc`
3. 点击左侧菜单 **DNS** → **Records**
4. 点击 **Add record** 按钮
5. 填写以下信息：
   ```
   类型 (Type)：CNAME
   名称 (Name)：chico
   目标 (Target)：cname.vercel-dns.com
   代理状态 (Proxy status)：DNS only（灰色云朵，关闭代理）⚠️ 重要
   TTL：Auto
   ```
6. 点击 **Save** 保存

**⚠️ 重要提示：**
- 必须设置为 **DNS only**（灰色云朵），不要使用 Cloudflare 代理（橙色云朵）
- 使用代理会导致 Vercel 无法正确验证域名和配置 SSL 证书

### 截图参考
```
┌────────────────────────────────────────────────┐
│ Type    │ Name  │ Target                       │
│ CNAME   │ chico │ cname.vercel-dns.com         │
│ ☁️ (灰色) │       │ TTL: Auto                    │
└────────────────────────────────────────────────┘
```

### 2. 在 Vercel 项目中添加域名

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 进入 `chico` 项目
3. 点击 **Settings** → **Domains**
4. 在 "Add Domain" 输入框中输入：`chico.aimake.cc`
5. 点击 **Add**
6. Vercel 会自动检测 DNS 配置
7. 等待域名验证完成（通常 1-2 分钟）

### 3. 验证 DNS 记录

使用以下命令检查 DNS 配置是否生效：

```bash
# 方法 1：使用 dig
dig chico.aimake.cc CNAME +short
# 应该返回：cname.vercel-dns.com.

# 方法 2：使用 nslookup
nslookup -type=CNAME chico.aimake.cc
# 应该看到 CNAME 记录指向 cname.vercel-dns.com

# 方法 3：使用 Cloudflare 1.1.1.1 DNS 测试
nslookup chico.aimake.cc 1.1.1.1
```

### 4. 等待 DNS 传播和 SSL 配置

- **DNS 传播时间**：Cloudflare DNS 通常几分钟内生效
- **SSL 证书**：Vercel 会在域名验证后 5-10 分钟内自动配置 Let's Encrypt SSL 证书
- **检查状态**：在 Vercel Dashboard 的 Domains 页面查看域名状态
  - ✅ **Valid Configuration** - 配置成功
  - 🔄 **Pending Verification** - 等待验证
  - ❌ **Invalid Configuration** - 配置错误，检查 DNS 记录

## 验证域名配置

配置完成后，你可以通过以下方式访问网站：

- ✅ https://chico.aimake.cc（主域名）
- ✅ https://chico-lac.vercel.app（Vercel 默认域名）

## 更新内容

本次提交已更新以下文件中的 URL：

- `app/layout.tsx` - SEO metadata 和 Open Graph URLs
- `app/page.tsx` - JSON-LD 结构化数据 URLs
- `vercel.json` - 域名配置文件

## 故障排查

### 问题 1：Vercel 显示 "Invalid Configuration"

**原因：** Cloudflare 代理已启用（橙色云朵）

**解决方案：**
1. 回到 Cloudflare DNS 设置
2. 找到 `chico` CNAME 记录
3. 点击橙色云朵图标，切换为灰色（DNS only）
4. 等待 1-2 分钟后在 Vercel 重新验证

### 问题 2：DNS 记录未生效

```bash
# 检查 DNS 记录
dig chico.aimake.cc +short

# 应该返回类似：cname.vercel-dns.com.
# 如果返回空或其他内容，说明 DNS 未生效
```

**解决方案：**
- 等待 5-10 分钟让 DNS 传播
- 清除本地 DNS 缓存：
  ```bash
  # macOS
  sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

  # Windows
  ipconfig /flushdns

  # Linux
  sudo systemd-resolve --flush-caches
  ```

### 问题 3：SSL 证书未配置

**原因：** DNS 未正确指向 Vercel 或 Cloudflare 代理已启用

**解决方案：**
1. 确认 CNAME 记录正确且为 DNS only 模式
2. 在 Vercel Domains 页面点击域名旁的 **Refresh** 按钮
3. 等待 5-10 分钟让 Vercel 重新配置 SSL

### 问题 4：网站显示 Cloudflare 错误页面

**原因：** Cloudflare 代理模式与 Vercel 冲突

**解决方案：**
- 必须使用 **DNS only** 模式（灰色云朵）
- Vercel 需要直接管理 SSL 证书，不能通过 Cloudflare 代理

### 问题 5：域名可以访问但显示 404

**原因：** Vercel 路由配置问题

**解决方案：**
1. 检查 Vercel Dashboard 中该域名的部署状态
2. 确认域名已分配到正确的项目和分支
3. 尝试重新部署项目

## 参考文档

- [Vercel 自定义域名文档](https://vercel.com/docs/concepts/projects/domains)
- [Cloudflare DNS 配置](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/)
- [Cloudflare DNS only 模式说明](https://developers.cloudflare.com/dns/manage-dns-records/reference/proxied-dns-records/)

## 快速检查清单

- [ ] Cloudflare 添加 CNAME 记录：`chico → cname.vercel-dns.com`
- [ ] Cloudflare 设置为 **DNS only**（灰色云朵）
- [ ] Vercel 添加域名：`chico.aimake.cc`
- [ ] 等待 DNS 验证完成（1-5 分钟）
- [ ] 等待 SSL 证书配置（5-10 分钟）
- [ ] 测试访问 `https://chico.aimake.cc`
- [ ] 验证 HTTPS 连接和 SSL 证书

## 预期时间

- **DNS 配置**：2 分钟
- **DNS 传播**：1-5 分钟（Cloudflare 很快）
- **Vercel 验证**：1-2 分钟
- **SSL 证书配置**：5-10 分钟
- **总计**：约 10-20 分钟

配置完成后，你可以通过 `https://chico.aimake.cc` 访问网站！
