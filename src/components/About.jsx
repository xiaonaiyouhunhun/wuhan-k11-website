import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-slide-up">
          <h2 className="section-title">关于我们</h2>
          <p className="section-subtitle">
            武汉K11不仅是购物中心,更是一个艺术与生活交融的创新空间
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-k11-primary to-k11-dark rounded-3xl overflow-hidden card-shadow">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="text-3xl font-bold mb-2">武汉K11</h3>
                  <p className="text-xl opacity-90">艺术 · 文化 · 商业</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-k11-primary rounded-2xl opacity-20 blur-2xl"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 animate-slide-up delay-200">
            <h3 className="text-3xl font-bold text-k11-secondary mb-6">
              林某某 · 主理人
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              作为武汉K11的主理人,我始终坚信艺术不应被束之高阁,而应融入日常生活的每一个角落。我们致力于打造一个让艺术触手可及、让商业充满温度的独特空间。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              在这里,每一次购物都是一次艺术之旅,每一次体验都是一次心灵的共鸣。我们不仅提供商品,更传递一种生活方式和审美理念。
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-k11-primary mb-1">100+</div>
                <div className="text-sm text-gray-600">合作品牌</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-k11-primary mb-1">50+</div>
                <div className="text-sm text-gray-600">艺术展览</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-k11-primary mb-1">10万+</div>
                <div className="text-sm text-gray-600">月客流量</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
