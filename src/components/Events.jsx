import React from 'react';

const Events = () => {
  const events = [
    {
      date: '2026-04-15',
      month: '4月',
      day: '15',
      title: '当代艺术展览开幕式',
      description: '知名艺术家新作首次亮相武汉',
      location: '3楼艺术展厅',
      status: 'upcoming'
    },
    {
      date: '2026-04-20',
      month: '4月',
      day: '20',
      title: '设计大师讲座',
      description: '邀请国际知名设计师分享设计理念',
      location: '5楼多功能厅',
      status: 'upcoming'
    },
    {
      date: '2026-04-25',
      month: '4月',
      day: '25',
      title: '儿童艺术工作坊',
      description: '亲子互动,培养孩子的艺术兴趣',
      location: '1楼儿童区',
      status: 'upcoming'
    },
    {
      date: '2026-04-30',
      month: '4月',
      day: '30',
      title: '音乐会之夜',
      description: '古典与现代音乐的完美融合',
      location: '中庭舞台',
      status: 'upcoming'
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-k11-secondary to-k11-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">近期活动</h2>
          <p className="section-subtitle text-gray-300">
            精彩活动不断,总有一场适合你
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 card-shadow hover:scale-105 transition-transform duration-300 flex gap-6"
            >
              {/* Date Badge */}
              <div className="flex-shrink-0">
                <div className="bg-k11-primary rounded-xl p-4 text-center min-w-[100px]">
                  <div className="text-sm text-white/80 mb-1">{event.month}</div>
                  <div className="text-4xl font-bold text-white">{event.day}</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-k11-secondary mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </span>
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    即将开始
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-primary bg-white text-k11-secondary hover:bg-gray-100">
            查看全部活动
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
