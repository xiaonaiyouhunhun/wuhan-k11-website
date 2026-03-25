import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-k11-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">武汉K11</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              融合艺术、文化、商业的综合性商业中心,为城市注入新的活力与创造力。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-k11-primary transition-colors">
                <span>📱</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-k11-primary transition-colors">
                <span>📸</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-k11-primary transition-colors">
                <span>🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-k11-primary transition-colors">
                <span>💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">快速链接</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-k11-primary transition-colors">关于我们</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-k11-primary transition-colors">特色服务</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-k11-primary transition-colors">展览展示</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-k11-primary transition-colors">活动信息</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-k11-primary transition-colors">联系我们</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">联系方式</h4>
            <ul className="space-y-3 text-gray-400">
              <li>📍 武汉市江岸区香港路8号</li>
              <li>📞 027-8888-8888</li>
              <li>✉️ contact@k11wuhan.com</li>
              <li>⏰ 周一至周日 10:00-22:00</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} 武汉K11. All rights reserved. | 主理人: 林某某</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
