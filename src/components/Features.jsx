import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🏛️',
      title: '艺术展览',
      description: '定期举办国内外知名艺术家作品展,将艺术融入商业空间',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🛍️',
      title: '精选购物',
      description: '汇集国际知名品牌与设计师品牌,提供独特的购物体验',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🍽️',
      title: '美食天地',
      description: '米其林星级餐厅与特色餐饮,满足味蕾的极致追求',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '🎭',
      title: '文化活动',
      description: '音乐会、讲座、工作坊等丰富活动,打造文化社交平台',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '🎬',
      title: 'IMAX影院',
      description: '顶级视听设备,带来沉浸式观影体验',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '🌸',
      title: '亲子乐园',
      description: '专为家庭设计的互动空间,寓教于乐',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">特色服务</h2>
          <p className="section-subtitle">
            全方位的商业体验,满足你对美好生活的所有想象
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 card-shadow hover:scale-105 transition-transform duration-300"
            >
              <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6`}>
                <span className="text-4xl">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-k11-secondary mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
