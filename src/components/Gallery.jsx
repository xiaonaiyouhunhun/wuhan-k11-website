import React, { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('全部');

  const categories = ['全部', '建筑艺术', '空间设计', '活动瞬间'];
  
  const artworks = [
    {
      id: 1,
      title: '建筑外观',
      category: '建筑艺术',
      color: 'from-blue-400 to-blue-600',
      description: '独特的建筑造型,成为武汉城市新地标'
    },
    {
      id: 2,
      title: '中庭设计',
      category: '空间设计',
      color: 'from-purple-400 to-purple-600',
      description: '挑高中庭设计,营造开阔通透的空间感'
    },
    {
      id: 3,
      title: '艺术装置',
      category: '建筑艺术',
      color: 'from-pink-400 to-pink-600',
      description: '大型艺术装置,激发无限想象'
    },
    {
      id: 4,
      title: '购物空间',
      category: '空间设计',
      color: 'from-orange-400 to-orange-600',
      description: '精心设计的购物区域,享受愉悦体验'
    },
    {
      id: 5,
      title: '文化活动',
      category: '活动瞬间',
      color: 'from-green-400 to-green-600',
      description: '丰富多彩的文化活动,连接人与艺术'
    },
    {
      id: 6,
      title: '展览现场',
      category: '活动瞬间',
      color: 'from-indigo-400 to-indigo-600',
      description: '国际艺术展览,提升城市文化品位'
    }
  ];

  const filteredArtworks = activeCategory === '全部'
    ? artworks
    : artworks.filter(art => art.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">展览展示</h2>
          <p className="section-subtitle">
            在这里,艺术无处不在,灵感随时迸发
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-k11-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group relative rounded-2xl overflow-hidden card-shadow cursor-pointer"
            >
              <div className={`aspect-[4/5] bg-gradient-to-br ${artwork.color}`}>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-2">{artwork.title}</h3>
                    <p className="text-sm">{artwork.description}</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-k11-secondary">{artwork.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
