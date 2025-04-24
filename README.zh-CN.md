# AI Image Studio

AI Image Studio 是一个基于 Next.js 13+、Supabase Auth 和 Stripe 支付的 AI 图片生成与管理平台，支持邮箱/Google 登录注册，安全高效，适合个人和团队使用。

## 功能特性

- AI 图片生成与管理
- 邮箱/Google 登录注册（Supabase Auth）
- Stripe 支付集成
- 用户权限与会话管理
- 响应式 UI，基于 shadcn/ui
- 支持多端访问

## 技术栈

- **前端框架**：Next.js 13+ (App Router)
- **认证与用户管理**：Supabase Auth
- **支付系统**：Stripe
- **UI 组件库**：shadcn/ui
- **数据库**：Postgres（通过 Supabase 提供）
- **云函数/API 路由**：Next.js API Routes

## 快速开始

1. 克隆项目
   ```bash
   git clone git@github.com:ACTOR-ALCHEMIST/ai-image-studio.git
   cd ai-image-studio
   ```

2. 安装依赖
   ```bash
   pnpm install
   # 或 npm install / yarn install
   ```

3. 配置环境变量  
   复制 `.env.example` 为 `.env`，并根据你的 Supabase/Stripe 项目配置填写相关变量。

4. 运行开发环境
   ```bash
   pnpm dev
   # 或 npm run dev / yarn dev
   ```
   访问 [http://localhost:3000](http://localhost:3000)

## 主要页面

- `/` 首页：项目介绍，未登录时显示登录/注册按钮
- `/login` 登录页：支持邮箱和 Google 登录
- `/register` 注册页：支持邮箱和 Google 注册
- `/api/stripe/checkout`、`/api/stripe/webhook`：Stripe 支付相关 API
- `/auth/callback`：第三方登录回调

## 目录结构

```
app/
  page.tsx           # 首页
  layout.tsx         # 全局布局
  login/page.tsx     # 登录页
  register/page.tsx  # 注册页
  api/stripe/        # Stripe 支付 API
  auth/callback/     # 第三方登录回调
components/
  nav.tsx            # 导航栏
  ui/                # 基础 UI 组件
lib/
  auth-context.tsx   # 认证上下文
  supabase.ts        # Supabase 客户端
  payments/          # 支付相关逻辑
```

## 环境变量说明

- `NEXT_PUBLIC_SUPABASE_URL`：Supabase 项目 URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`：Supabase 匿名密钥
- `SUPABASE_SERVICE_ROLE_KEY`：Supabase 服务密钥（仅服务端用）
- `STRIPE_SECRET_KEY`：Stripe 后端密钥
- `STRIPE_WEBHOOK_SECRET`：Stripe Webhook 密钥
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`：Stripe 前端公钥
- `NEXT_PUBLIC_BASE_URL`：站点基础 URL
- `AUTH_SECRET`：认证加密密钥

**注意：请勿将 .env、.env.local 等环境变量文件提交到仓库。**

## 生产部署

- 推荐部署到 [Vercel](https://vercel.com/) 或其他支持 Next.js 的平台
- 配置生产环境变量
- Stripe Webhook 需在 Stripe 控制台设置为生产 API 路径

## 贡献与许可

欢迎提交 issue 和 PR 参与改进。  
本项目基于 MIT License 开源。

---
如需详细开发文档或有任何问题，请在 GitHub Issue 区留言。
