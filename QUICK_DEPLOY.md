# 一键部署指南 - 最简单的部署方式

## 🚀 方法1: Netlify一键部署(推荐,最快)

### 第一步: 上传到GitHub

由于你没有提供GitHub Token,请手动完成:

1. **访问GitHub创建仓库**
   - 访问: https://github.com/new
   - 仓库名: `wuhan-k11-website`
   - 选择 Public
   - 不要勾选 "Initialize this repository with a README"
   - 点击 "Create repository"

2. **推送代码到GitHub**
   打开PowerShell,运行以下命令:
   ```powershell
   cd c:\Users\18571\WorkBuddy\20260325215726
   git remote add origin https://github.com/你的GitHub用户名/wuhan-k11-website.git
   git branch -M master
   git push -u origin master
   ```

### 第二步: Netlify一键部署

#### 方式A: 拖拽部署(30秒完成)

1. 访问: https://app.netlify.com/drop
2. 打开项目文件夹: `c:\Users\18571\WorkBuddy\20260325215726`
3. 将 `dist` 文件夹拖拽到Netlify页面
4. 等待上传完成
5. ✅ 立即获得可访问的网址!

#### 方式B: GitHub集成部署(持续部署)

1. 访问: https://app.netlify.com
2. 点击 "Add new site" → "Import an existing project"
3. 选择 "GitHub",点击 "Connect to GitHub"
4. 授权Netlify访问你的GitHub账号
5. 选择 `wuhan-k11-website` 仓库
6. 构建配置:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. 点击 "Deploy site"
8. ✅ 部署完成!

## 🌟 方法2: Vercel一键部署

1. **完成上述第一步的GitHub推送**

2. **Vercel部署**
   - 访问: https://vercel.com/new
   - 点击 "Continue with GitHub"
   - 授权Vercel访问GitHub
   - 选择 `wuhan-k11-website` 仓库
   - 框架会自动检测为 "Vite"
   - 点击 "Deploy"
   - ✅ 部署完成!

## 📝 注意事项

### 持续部署优势
使用GitHub集成部署后:
- 每次推送代码到GitHub会自动重新部署
- 支持多环境(dev/staging/prod)
- 自动HTTPS和CDN
- 部署历史和回滚功能

### 拖拽部署适用场景
- 快速预览网站
- 不需要持续部署
- 临时展示

## 🎯 推荐流程

**如果你需要持续更新网站:**
1. 先推送到GitHub
2. 使用Netlify GitHub集成部署

**如果你只是想快速展示:**
1. 直接拖拽 `dist` 文件夹到Netlify
2. 无需GitHub

## 🔗 获取帮助

- Netlify文档: https://docs.netlify.com
- Vercel文档: https://vercel.com/docs
- GitHub文档: https://docs.github.com

---

**选择适合你的方式,几分钟后就能看到网站上线!**
