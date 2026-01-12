# 自定义域名配置指南

## 域名配置

本项目已配置自定义域名：**chico.aimake.cc**

## DNS 配置步骤

### 1. 在你的 DNS 提供商（aimake.cc）添加 CNAME 记录

```
类型：CNAME
名称：chico
值：cname.vercel-dns.com
TTL：自动或 3600
```

### 2. 在 Vercel 项目中添加域名

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 进入 `chico` 项目
3. 点击 **Settings** → **Domains**
4. 添加域名：`chico.aimake.cc`
5. Vercel 会自动检测 DNS 配置并激活域名

### 3. 等待 DNS 传播

DNS 记录可能需要几分钟到几小时才能在全球生效。可以使用以下命令检查：

```bash
# 检查 CNAME 记录
dig chico.aimake.cc CNAME

# 或使用
nslookup chico.aimake.cc
```

### 4. SSL 证书

Vercel 会自动为你的自定义域名提供免费的 SSL 证书（Let's Encrypt），通常在域名验证后几分钟内生效。

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

### DNS 配置未生效
```bash
# 检查 DNS 记录
dig chico.aimake.cc +short

# 应该返回类似：cname.vercel-dns.com
```

### SSL 证书未生效
- 等待 5-10 分钟让 Vercel 自动配置 SSL
- 检查 Vercel Dashboard 中的域名状态
- 确保 DNS 记录正确指向 `cname.vercel-dns.com`

### 域名无法访问
1. 确认 DNS 记录已正确配置
2. 检查 Vercel 项目中域名状态
3. 清除浏览器缓存后重试
4. 使用无痕模式测试

## 参考文档

- [Vercel 自定义域名文档](https://vercel.com/docs/concepts/projects/domains)
- [DNS 配置指南](https://vercel.com/docs/concepts/projects/domains/add-a-domain)
