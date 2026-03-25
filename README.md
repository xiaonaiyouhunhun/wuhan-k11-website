# 武汉K11企业网站

一个现代化的企业官方网站,展示武汉K11的艺术、文化与商业融合。

## 技术栈

- **React 18** - 现代化的前端框架
- **Vite** - 快速的构建工具
- **Tailwind CSS** - 实用优先的CSS框架
- **React Router** - 路由管理

## 功能特点

- 🎨 现代化的UI设计,响应式布局
- 📱 完美适配移动端和桌面端
- ⚡ 基于Vite的快速开发体验
- 🎭 平滑的动画效果
- 📦 组件化的代码结构

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000 查看网站

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
wuhan-k11-website/
├── public/              # 静态资源
├── src/
│   ├── components/      # React组件
│   │   ├── Navbar.jsx   # 导航栏
│   │   ├── Hero.jsx     # 首页横幅
│   │   ├── About.jsx    # 关于我们
│   │   ├── Features.jsx # 特色服务
│   │   ├── Gallery.jsx  # 展览展示
│   │   ├── Events.jsx   # 活动信息
│   │   ├── Contact.jsx  # 联系我们
│   │   └── Footer.jsx   # 页脚
│   ├── App.jsx          # 主应用组件
│   ├── main.jsx         # 应用入口
│   └── index.css        # 全局样式
├── index.html           # HTML模板
├── tailwind.config.js   # Tailwind配置
└── vite.config.js       # Vite配置
```

## 自定义配置

### 修改主题色

编辑 `tailwind.config.js` 文件中的 `theme.extend.colors` 部分:

```javascript
colors: {
  k11: {
    primary: '#C4A484',      // 主色调
    secondary: '#2C2C2C',    // 次要色调
    accent: '#D4AF37',       // 强调色
    light: '#F5F5F5',        // 浅色背景
    dark: '#1A1A1A'         // 深色背景
  }
}
```

## 主理人信息

- **姓名**: 林某某
- **角色**: 武汉K11主理人
- **理念**: 融合艺术与商业,打造独特的文化体验空间

## 许可证

MIT License
