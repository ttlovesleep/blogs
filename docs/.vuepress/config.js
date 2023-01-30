module.exports = {
  title: 'SweetyHou的博客',
  description: '学习创建自己的博客（vuepress）',
  theme: 'reco', //vuepress挂载的主题
  locales: {
    '/': {
      lang: 'zh-CN', //日期格式问题
    },
  },
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      {
        text: '博客',
        items: [
          { text: '掘金', link: 'https://juejin.cn/user/233526039432445' },
          { text: 'Github', link: 'https://github.com/Xusssyyy' },
        ],
      },
    ],
    // 侧边栏
    // sidebar: [
    //   {
    //     title: '欢迎学习',
    //     path: '/',
    //     collapsable: false, // 是否折叠
    //     children: [{ title: '博客简介', path: '/' }],
    //   },
    //   {
    //     title: '基础篇',
    //     path: '/blogs/1',
    //     collapsable: true,
    //     children: [
    //       { title: '第一篇', path: '/blogs/1' },
    //       { title: '第二篇', path: '/blogs/2' },
    //     ],
    //   },
    // ],
    // 博客配置
    blogConfig: {
      // 分类
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '博客', // 默认文案 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认4
        text: 'Tag', // 默认文案 “标签”
      },
    },
    author: 'Sweety Hou', //作者名字
    logo: '/OIP-C.jpg',
    authorAvatar: '/OIP-C.jpg',
    type: 'blog',
  },
  plugins: [
    [
      'sakura',
      {
        num: 20, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        },
      },
    ],
    [
        "cursor-effects",
        {
          size: 4, // size of the particle, default: 2
          shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
          zIndex: 999999999, // z-index property of the canvas, default: 999999999
        },
      ]
  ],
  base: '/blogs/',
}
