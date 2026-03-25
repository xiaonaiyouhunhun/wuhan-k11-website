# GitHub仓库创建和部署指南

## 方法1: 使用GitHub CLI (推荐,最简单)

### 1. 安装GitHub CLI
如果你还没有安装GitHub CLI,可以访问 https://cli.github.com/ 下载安装。

### 2. 登录GitHub
```bash
gh auth login
```
按提示选择GitHub.com,选择HTTPS,然后会打开浏览器授权。

### 3. 创建仓库并推送
```bash
cd c:/Users/18571/WorkBuddy/20260325215726
gh repo create wuhan-k11-website --public --source=. --remote=origin
git push -u origin master
```

## 方法2: 手动创建GitHub仓库

### 1. 在GitHub网页创建仓库
- 访问 https://github.com/new
- 仓库名称: `wuhan-k11-website`
- 选择 Public 或 Private
- 不要初始化README(我们已经有了)
- 点击"Create repository"

### 2. 推送代码
```bash
cd c:/Users/18571/WorkBuddy/20260325215726
git remote add origin https://github.com/你的用户名/wuhan-k11-website.git
git branch -M master
git push -u origin master
```

## 方法3: 使用GitHub API (需要Personal Access Token)

### 1. 创建Personal Access Token
- 访问 https://github.com/settings/tokens
- 点击"Generate new token (classic)"
- 选择 `repo` 权限
- 生成并复制token

### 2. 使用API创建仓库
```bash
curl -X POST -H "Authorization: token YOUR_TOKEN" -H "Accept: application/vnd.github.v3+json" https://api.github.com/user/repos -d '{"name":"wuhan-k11-website","public":true}'
```

### 3. 推送代码
```bash
git remote add origin https://github.com/你的用户名/wuhan-k11-website.git
git push -u origin master
```

## 部署到Netlify

### 方法1: 拖拽部署(最快)
1. 访问 https://app.netlify.com/drop
2. 将整个项目文件夹拖拽到页面
3. 等待上传完成,会立即获得一个可访问的网址

### 方法2: 从GitHub部署
1. 访问 https://app.netlify.com
2. 点击"Add new site" → "Import an existing project"
3. 选择GitHub,授权并选择 `wuhan-k11-website` 仓库
4. 构建配置:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. 点击"Deploy site"

### 注意事项
- Netlify会自动检测 `package.json` 中的构建脚本
- 首次部署可能需要几分钟
- 部署后会提供一个随机网址,可以在设置中绑定自定义域名

## 查看部署状态
- GitHub: https://github.com/你的用户名/wuhan-k11-website
- Netlify: 登录后查看部署日志
