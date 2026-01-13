# Chico Gong

Chico Gong的个人主页，使用Next.js 15构建的现代化、简约风格的单页网站。

## 在线访问

- 网站: [chico-lac.vercel.app](https://chico-lac.vercel.app)
- GitHub: [@chicogong](https://github.com/chicogong)
- X: [@chicogongx](https://x.com/chicogongx)

## 技术栈

- **Next.js 15** - React框架（使用App Router）
- **React 19** - UI库
- **TypeScript** - 类型安全
- **Tailwind CSS 3** - 原子化CSS框架
- **GitHub API** - 动态获取GitHub数据

## 新功能

### GitHub API 集成
- 自动从GitHub API获取真实的仓库数量和stars数据
- 动态加载GitHub头像
- 使用ISR（Incremental Static Regeneration）缓存数据（1小时）
- 支持GitHub Token配置以避免API速率限制

### 内容扩展
- 博客/文章链接部分
- 工作经历时间线展示
- 加载状态和骨架屏

### 性能优化
- 字体预加载（display: swap）
- Next.js Image组件优化图片加载
- 响应式字体大小（移动端15px）
- 客户端组件按需加载

## 项目结构

### 核心文件

```
chico/
├── app/                      # Next.js App Router 目录
│   ├── api/
│   │   └── github/
│   │       └── route.ts      # GitHub API路由
│   ├── components/
│   │   ├── GitHubComponents.tsx  # GitHub数据组件
│   │   ├── Analytics.tsx     # 分析组件
│   │   ├── ErrorBoundary.tsx # 错误边界
│   │   └── PerformanceMonitor.tsx # 性能监控
│   ├── page.tsx              # 主页组件（首页内容）
│   ├── loading.tsx           # 加载状态组件
│   ├── layout.tsx            # 根布局（HTML结构、字体、元数据）
│   ├── globals.css           # 全局样式和动画定义
│   └── favicon.ico           # 网站图标
├── lib/
│   └── data.ts               # 内容数据配置（个人信息、项目、文章、经历）
├── public/                   # 静态资源目录
├── .env.example              # 环境变量模板
├── package.json              # 项目依赖和脚本
├── tsconfig.json             # TypeScript配置
├── tailwind.config.ts        # Tailwind CSS配置
├── postcss.config.mjs        # PostCSS配置
└── next.config.ts            # Next.js配置
```

### 文件详细说明

#### `app/page.tsx`
**作用**: 网站主页面组件
**包含内容**:
- 头部区域：头像、姓名（渐变文字）、职位、公司、地点
- 项目展示：卡片式布局，包含项目名称、描述、链接、GitHub仓库
- 社交链接：GitHub、X(Twitter)、邮箱
- 页脚：版权信息

**动画效果**:
- `fade-in`: 渐显效果（头部、页脚）
- `slide-up`: 上滑效果（项目区、链接区）
- `scale-on-hover`: 悬停放大效果（头像、按钮）

#### `app/layout.tsx`
**作用**: 应用根布局
**功能**:
- 设置HTML基础结构
- 引入Inter字体（Google Fonts）
- 配置SEO元数据（标题、描述、Open Graph）
- 引入全局样式

#### `app/globals.css`
**作用**: 全局样式和自定义动画
**包含**:
- Tailwind CSS引入
- 基础样式重置
- 自定义工具类：
  - `.gradient-text`: 渐变文字效果（蓝-紫-粉）
  - `.fade-in`: 淡入动画
  - `.slide-up`: 上滑动画
  - `.scale-on-hover`: 悬停缩放
- `@keyframes`动画定义

#### `lib/data.ts`
**作用**: 内容数据管理中心
**导出**:
- `profile`: 个人信息（姓名、职位、公司、地点、简介）
- `skills`: 技能列表
- `projects`: 项目列表（名称、描述、链接、GitHub仓库）
- `articles`: 博客文章列表（标题、链接、日期）
- `experience`: 工作经历（公司、职位、时间、描述）
- `links`: 社交链接（GitHub、X、邮箱）

**优点**: 集中管理内容，修改时只需编辑这一个文件

#### `app/api/github/route.ts`
**作用**: GitHub API数据获取
**功能**:
- 从GitHub API获取用户数据和仓库信息
- 计算总stars数
- 支持ISR缓存（1小时）
- 错误时返回默认值

#### `app/components/GitHubComponents.tsx`
**作用**: GitHub数据展示组件
**包含**:
- `GitHubStats`: 显示仓库数、贡献数、stars数
- `Avatar`: 动态加载GitHub头像
- 加载状态处理

#### `package.json`
**作用**: 项目配置和依赖管理
**脚本**:
- `dev`: 启动开发服务器
- `build`: 构建生产版本
- `start`: 启动生产服务器
- `lint`: 代码检查

**依赖**:
- 运行时依赖：next、react、react-dom
- 开发依赖：typescript、tailwindcss、@types/*

#### `tsconfig.json`
**作用**: TypeScript编译器配置
**关键设置**:
- 路径别名：`@/*` 映射到项目根目录
- 严格模式：启用类型检查
- JSX支持：preserve模式（Next.js处理）

#### `tailwind.config.ts`
**作用**: Tailwind CSS配置
**配置**:
- 内容扫描路径：`./app/**/*.{js,ts,jsx,tsx}`
- 主题扩展：可添加自定义颜色、字体等
- 插件：可添加Tailwind插件

#### `next.config.ts`
**作用**: Next.js框架配置
**当前配置**: 使用默认设置

## 本地开发

### 环境变量配置（可选）
复制 `.env.example` 到 `.env.local` 并配置GitHub Token：
```bash
cp .env.example .env.local
```

编辑 `.env.local`：
```bash
# 可选：添加GitHub Token以避免API速率限制
GITHUB_TOKEN=your_github_token_here
```

获取GitHub Token：
1. 访问 https://github.com/settings/tokens
2. 创建新的Personal Access Token
3. 不需要任何特殊权限（用于读取公开数据）

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本
```bash
npm run build
```

## 如何修改内容

### 修改个人信息
编辑 `lib/data.ts` 中的 `profile` 对象：
```typescript
export const profile = {
  name: '你的名字',
  role: '你的职位',
  company: '公司名称',
  location: '所在地',
  bio: '个人简介...',
}
```

### 添加/修改项目
编辑 `lib/data.ts` 中的 `projects` 数组：
```typescript
export const projects = [
  {
    name: '项目名称',
    desc: '项目描述',
    url: 'https://项目链接',
    github: 'username/repo', // 或 null
  },
]
```

### 修改社交链接
编辑 `lib/data.ts` 中的 `links` 数组。

### 调整样式
- 修改颜色、间距：编辑 `app/page.tsx` 中的 Tailwind 类名
- 修改动画：编辑 `app/globals.css` 中的 `@keyframes` 定义
- 添加新的工具类：在 `app/globals.css` 的 `@layer utilities` 中添加

## 部署

项目已配置自动部署：
- 推送到GitHub仓库后，Vercel自动触发部署
- 部署地址：[chico-lac.vercel.app](https://chico-lac.vercel.app)

### 手动部署到Vercel
```bash
npm run build
# 然后通过Vercel CLI或Web界面部署
```

## 动画说明

当前实现的动画效果：
- **淡入动画** (`fade-in`): 0.8秒，应用于头部和页脚
- **上滑动画** (`slide-up`): 0.6秒，应用于项目和链接区域
- **悬停缩放** (`scale-on-hover`): 0.3秒，应用于头像和按钮
- **渐变文字**: 应用于名字（蓝-紫-粉渐变）
- **渐变背景**: 页面背景（白-蓝-紫渐变）
- **卡片效果**: 项目卡片带玻璃态效果和悬停阴影

## 性能特性

- ✅ 静态站点生成（SSG）- 所有页面预渲染
- ✅ 无外部JS库 - 仅使用纯CSS动画
- ✅ 响应式设计 - 移动端优先
- ✅ 快速加载 - 极小的包体积
- ✅ SEO优化 - 完整的元数据配置

## SEO优化

本网站已完成全面的SEO优化，包括：

### 已实现的SEO功能
- ✅ **元数据优化** - Title、Description、Keywords、Open Graph、Twitter Card
- ✅ **结构化数据** - JSON-LD格式的Schema.org Person标记
- ✅ **Sitemap** - 自动生成sitemap.xml（`/sitemap.xml`）
- ✅ **Robots.txt** - 搜索引擎爬取规则（`/robots.txt`）
- ✅ **语义化HTML** - 正确使用header、section、footer标签
- ✅ **移动适配** - 响应式设计，完美支持移动设备

### 搜索引擎收录
要让Google收录您的网站，请按照以下步骤操作：

1. **Google Search Console验证**
   - 访问 [Google Search Console](https://search.google.com/search-console)
   - 添加网站并完成验证
   - 提交sitemap：`https://chico-lac.vercel.app/sitemap.xml`

2. **查看详细指南**
   - 查看 `SEO_GUIDE.md` 获取完整的SEO设置步骤
   - 包含Google Search Console验证流程
   - 包含Bing Webmaster Tools设置
   - 包含社交媒体分享策略

3. **检查索引状态**
   ```bash
   # 在Google搜索框输入
   site:chico-lac.vercel.app
   ```

### SEO相关文件
- `app/layout.tsx` - 元数据配置
- `app/page.tsx` - JSON-LD结构化数据
- `app/sitemap.ts` - Sitemap生成逻辑
- `app/robots.ts` - Robots.txt配置
- `docs/SEO_GUIDE.md` - 完整SEO设置指南
- `docs/SOCIAL_SHARE_TEMPLATES.md` - 社交媒体分享文案

## 许可证

MIT

---

Built with ❤️ using Next.js & Tailwind CSS


<!-- Auto deploy test - 2026-01-13_15:54:16 -->
