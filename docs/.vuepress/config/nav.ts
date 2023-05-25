// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "Golang",
    link: "/go/",
    items: [
      {
        text: "框架",
        items:[
          {text:"Gin",link:"/pages/3e14ca/"}
        ]
      },
      {
        text: "Tools",
        items:[
          {text:"文件传输（局域网）",link:"/pages/27351f/"},
          {text:"自动提交Github",link:"/pages/27352f/"},
        ]
      },
    ],
  },
  {
    text: "算法",
    link: "/algorithm/",
    items: [
      {
        text: "算法打卡",
        items:[
          {text:"Day01-数组",link:"/pages/8aab7b/"},
          {text:"Day02-数组",link:"/pages/f2d3aa/"},
        ]
      },
    ],
  },
  {text: '归档', link: '/archives/'},
  // { text: "简历", link: "/" },
];
