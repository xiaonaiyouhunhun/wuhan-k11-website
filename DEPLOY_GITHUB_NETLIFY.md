# GitHub和Netlify部署完整指南

## 📋 部署步骤

### 第一步: 创建GitHub仓库

我已经为你准备好了创建GitHub仓库的PowerShell脚本。

**请提供你的GitHub Personal Access Token,我将帮你:**
1. 创建GitHub仓库
2. 推送代码到GitHub
3. 配置Netlify部署

### 如何获取GitHub Token?

1. 访问 https://github.com/settings/tokens
2. 点击 "Generate new token" → "Generate new token (classic)"
3. Token note: `wuhan-k11-deploy`
4. Expiration: 选择合适的时间(建议90天或更长)
5. 勾选权限:
   - ✅ **repo** (完整的仓库访问权限)
6. 点击 "Generate token"
7. **复制token并保存**(只会显示一次!)

### 第二步: 运行部署脚本

将你的GitHub Token提供给我,我将执行以下命令:

```powershell
.\create_repo.ps1 "你的GitHub_Token"
```

这个脚本会自动完成:
- ✅ 创建GitHub仓库 `wuhan-k11-website`
- ✅ 推送代码到GitHub
- ✅ 显示仓库访问地址

### 第三步: 部署到Netlify

#### 方法A: 拖拽部署(推荐,最快)

1. 访问 https://app.netlify.com/drop
2. 将 `dist` 文件夹拖拽到页面
3. 等待上传完成
4. 立即获得可访问的网址

#### 方法B: 从GitHub自动部署(推荐,支持持续部署)

1. 访问 https://app.netlify.com
2. 点击 "Add new site" → "Import an existing project"
3. 选择 GitHub,授权并选择 `wuhan-k11-website` 仓库
4. 构建配置:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. 点击 "Deploy site"

#### 方法C: 使用Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## 🎯 预期结果

完成后你将拥有:

1. **GitHub仓库**: https://github.com/你的用户名/wuhan-k11-website
   - 包含所有源代码
   - 支持版本控制
   - 可以邀请协作者

2. **Netlify网站**: https://随机名称.netlify.app
   - 全球CDN加速
   - 自动HTTPS
   - 持续部署(每次推送GitHub会自动重新部署)
   - 可以绑定自定义域名

## 🔄 持续部署配置

使用GitHub + Netlify后,每次你推送代码到GitHub:
1. Netlify会自动检测到更改
2. 自动运行 `npm run build`
3. 自动部署新版本
4. 邮件通知部署状态

## 📝 自定义域名

部署完成后,可以在Netlify中:
1. Site settings → Domain management
2. 添加你的自定义域名
3. 配置DNS记录

## 🚀 现在开始部署

**请提供你的GitHub Personal Access Token,我将立即为你创建仓库并部署!**

注意事项:
- Token只会用于此次部署,不会保存
- 确保Token有repo权限
- 仓库将会是公开的(可以在脚本中改为私有)
