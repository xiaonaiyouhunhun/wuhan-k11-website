# 武汉K11网站部署指南

## 部署到Vercel

### 方法1: 通过Vercel CLI部署

1. 登录Vercel账号
```bash
vercel login
```

2. 部署项目
```bash
vercel --yes
```

### 方法2: 通过Vercel网页部署

1. 访问 https://vercel.com
2. 点击 "Add New Project"
3. 导入你的GitHub仓库(或者直接上传dist文件夹)
4. Vercel会自动检测到Vite配置并构建项目
5. 点击Deploy,等待部署完成

### 方法3: 使用Netlify部署

1. 访问 https://app.netlify.com
2. 点击 "Add new site" → "Deploy manually"
3. 拖拽`dist`文件夹到Netlify
4. 网站即可立即部署完成

### 方法4: 使用GitHub Pages部署

1. 将项目推送到GitHub仓库
2. 在GitHub仓库设置中开启GitHub Pages
3. 选择`dist`文件夹作为发布源
4. 访问: `https://你的用户名.github.io/仓库名`

## 部署说明

项目已构建完成,构建文件位于`dist`文件夹。

构建配置:
- 输出目录: dist
- 静态资源: 包含HTML、CSS、JS文件
- 总大小: ~180KB (gzip后约57KB)

## 自定义域名

部署完成后,可以在平台设置中添加自定义域名。

## 环境变量

目前项目不需要环境变量配置。

## 性能优化建议

1. 启用CDN加速
2. 配置Gzip压缩
3. 设置缓存策略
4. 启用HTTPS

## 联系方式

如有部署问题,请联系主理人: 林某某
