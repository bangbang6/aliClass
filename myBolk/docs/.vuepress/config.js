module.exports = {
  title: '以vue名扬晚枫的博客',
  description: '我的个人网站',
 
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '首页', link: '/' },
      {text: 'vue', link: '/vue/' },
      {text: 'react', link: '/react/'},
      {text: '阿里训练营', link: 'ali'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};