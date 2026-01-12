# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个使用 Next.js 15 + React 19 + TypeScript + Tailwind CSS 构建的个人主页网站，采用 App Router 架构。

## 常用命令

```bash
# 开发
npm run dev          # 启动开发服务器 (http://localhost:3000)

# 构建和部署
npm run build        # 构建生产版本
npm start            # 启动生产服务器

# 代码质量
npm run lint         # ESLint 代码检查
```

## 架构设计

### 数据驱动架构
- **单一数据源**: `lib/data.ts` 集中管理所有内容数据（个人信息、项目、技能、链接）
- **修改内容时只需编辑 `lib/data.ts`**，无需改动组件代码

### 核心文件职责
- `app/page.tsx` - 主页面组件，负责布局和展示
- `app/layout.tsx` - 根布局，包含 SEO 元数据、字体配置、Analytics 和错误边界
- `app/globals.css` - 全局样式和自定义动画（fade-in、slide-up、gradient-text）
- `lib/data.ts` - 内容数据配置中心

### SEO 配置
- `app/sitemap.ts` - 自动生成 sitemap.xml
- `app/robots.ts` - 搜索引擎爬取规则
- `app/manifest.ts` - PWA manifest 配置
- `app/layout.tsx` - 包含完整的 Open Graph、Twitter Card、结构化数据配置
- Google Search Console 验证码已配置在 metadata.verification

### 组件系统
- `app/components/Analytics.tsx` - 分析追踪组件
- `app/components/ErrorBoundary.tsx` - 错误边界处理
- `app/components/PerformanceMonitor.tsx` - 性能监控

### Next.js 配置
- `next.config.ts` - 配置了安全响应头（X-Frame-Options、CSP 等）和远程图片域名白名单
- `tailwind.config.ts` - Tailwind 扫描路径配置为 `./app/**/*.{js,ts,jsx,tsx,mdx}`

## 开发注意事项

### 修改内容
1. 个人信息、项目、技能、链接 → 编辑 `lib/data.ts`
2. 样式和动画 → 编辑 `app/globals.css` 或组件内的 Tailwind 类
3. SEO 元数据 → 编辑 `app/layout.tsx` 的 metadata 对象

### 样式系统
- 使用 Tailwind CSS 原子类
- 自定义动画定义在 `globals.css` 的 `@keyframes` 中
- 渐变文字使用 `.gradient-text` 类

### 部署
- 自动部署到 Vercel (chico-lac.vercel.app)
- 推送到 GitHub 后自动触发构建
- 使用静态站点生成（SSG）以获得最佳性能
