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
        text: "小工具",
        items:[
          {text:"文件传输（局域网）",link:"/pages/27351f/"},
          {text:"自动提交Github",link:"/pages/27352f/"},
        ]
      },
      {
        text: "深入Go",
        items:[
          {text:"01.字符串",link:"/pages/b6ba67/"}
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
          {text:"Day00-准备",link:"/pages/fc80dd/"},
          {text:"Day01-数组",link:"/pages/8aab7b/"},
          {text:"Day02-数组",link:"/pages/f2d3aa/"},
          {text:"Day03-链表",link:"/pages/2c5009/"},
          {text:"Day04-链表",link:"/pages/115af7/"},
          {text:"Day05-哈希",link:"/pages/311b6b/"},
          {text:"Day06-哈希",link:"/pages/5d4a2f/"},
          {text:"Day07-字符串",link:"/pages/26eaf0/"},
        ]
      },
    ],
  },
  {text: '归档', link: '/archives/'},
  // { text: "简历", link: "/" },
];
