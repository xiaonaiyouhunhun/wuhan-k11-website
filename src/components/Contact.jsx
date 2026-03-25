import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📍',
      title: '地址',
      content: '武汉关山大道',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: '📞',
      title: '电话',
      content: '027-8888-8888',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: '✉️',
      title: '邮箱',
      content: 'contact@k11wuhan.com',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: '⏰',
      title: '营业时间',
      content: '周一至周日 10:00 - 22:00',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">联系我们</h2>
          <p className="section-subtitle">
            期待与您的每一次相遇
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className={`flex-shrink-0 p-4 rounded-xl ${info.color}`}>
                  <span className="text-3xl">{info.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-k11-secondary mb-1">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-k11-secondary mb-6">给我们留言</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-k11-primary focus:border-transparent transition-all"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    电话
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-k11-primary focus:border-transparent transition-all"
                    placeholder="请输入您的电话"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-k11-primary focus:border-transparent transition-all"
                  placeholder="请输入您的邮箱"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  留言内容
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-k11-primary focus:border-transparent transition-all"
                  placeholder="请输入您的留言内容"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary text-lg"
              >
                提交留言
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
