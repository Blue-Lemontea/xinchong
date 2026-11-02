# 芯宠 · AI 个性化互动桌宠

> 一个能记住你、回应你、陪你一起成长的桌面伙伴。

这是项目的**最小可运行骨架**：Next.js 16 + TypeScript + Tailwind CSS v4，可直接部署到 Vercel / Render。
业务功能陆续填入，目录结构已按 App Router 组织。

## 本地开发

```bash
pnpm install     # 安装依赖
pnpm dev         # 开发模式，http://localhost:3000
pnpm build       # 生产构建
pnpm start       # 运行生产构建
pnpm lint        # 代码检查
```

## 目录结构

```
app/
├── layout.tsx      # 全局布局 + 元信息（标题/描述）
├── page.tsx        # 首页（当前为占位页）
├── globals.css     # Tailwind 入口 + 全局样式变量
└── favicon.ico
public/             # 静态资源
```

后续建议：`components/` 放 UI 组件，`lib/` 放 AI 交互与数据逻辑，`app/api/` 放服务端接口。

## 部署

**Vercel**（推荐，零配置）

```bash
vercel link      # 首次关联项目
vercel --prod    # 部署到生产
```

或在 Vercel 面板导入本仓库，之后每次 push 到 `main` 自动部署。

**Render**

新建 Web Service 并关联本仓库：

- Build Command: `pnpm install && pnpm build`
- Start Command: `pnpm start`
- Node 版本：24

## 约定

- 主分支 `main`，提交信息用中文或英文均可，保持一句话说清做了什么。
- 开源仓库，注意不要把密钥、`.env*` 提交上来（已在 `.gitignore` 中忽略）。
