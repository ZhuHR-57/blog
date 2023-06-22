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
          {text:"01.string类型",link:"/pages/b6ba67/"},
          {text:"02.slice类型",link:"/pages/5b42f7/"},
          {text:"03.结构体和内存对齐",link:"/pages/20d234/"},
        ]
      },
    ],
  },
  {
    text: "CPP",
    link: "/cpp/",
    items: [
      {
        text: "误区总结",
        items:[
          {text:"字符串与字符初始化及转换",link:"/pages/cf07c3/"}
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
          // {text:"Day00-准备",link:"/pages/fc80dd/"},
          // {text:"Day01-数组",link:"/pages/8aab7b/"},
          // {text:"Day02-数组",link:"/pages/f2d3aa/"},
          // {text:"Day03-链表",link:"/pages/2c5009/"},
          // {text:"Day04-链表",link:"/pages/115af7/"},
          // {text:"Day05-哈希",link:"/pages/311b6b/"},
          // {text:"Day06-哈希",link:"/pages/5d4a2f/"},
          // {text:"Day07-字符串",link:"/pages/26eaf0/"},
          // {text:"Day08-字符串",link:"/pages/8ef17c/"},
          // {text:"Day09-栈与队列",link:"/pages/5b91fa/"},
          // {text:"Day10-栈与队列",link:"/pages/51e036/"},
          // {text:"Day11-栈与队列",link:"/pages/9f1ed7/"},
          // {text:"Day12-二叉树",link:"/pages/e42f06/"},
          // {text:"Day13-二叉树",link:"/pages/e1103c/"},
          // {text:"Day14-二叉树",link:"/pages/d2bfea/"},
          // {text:"Day15-二叉树",link:"/pages/718929/"},
          // {text:"Day16-二叉树",link:"/pages/aa0545/"},
          // {text:"Day17-二叉树",link:"/pages/dc9ac8/"},
          // {text:"Day18-二叉树",link:"/pages/26e3ea/"},
          // {text:"Day19-二叉树",link:"/pages/45f404/"},
          // {text:"Day20-二叉树",link:"/pages/25c17d/"},
          // {text:"Day21-回溯",link:"/pages/a70acb/"},
          // {text:"Day22-回溯",link:"/pages/cedc16/"},
          // {text:"Day23-回溯",link:"/pages/7f73da/"},
          {text:"Day24-回溯",link:"/pages/f279ae/"},
          {text:"Day25-回溯",link:"/pages/486f1f/"},
          {text:"Day26-回溯",link:"/pages/959586/"},
        ]
      },
      {
        text: "经典算法",
        items:[
          {text:"字符",link:"/pages/d1dc4a/"},
          {text:"回溯",link:"/pages/4b1970/"}
        ]
      },
    ],
  },
  {
    text: "分享",
    link: "/shares/",
    items: [
      {
        text: "有趣的库",
        items:[
          {text:"ChatGPT提示",link:"/pages/68dc78/"},
        ]
      },
      {
        text: "实用软件",
        items:[
          {text:"Windows",link:"/pages/5d207c/"},
          {text:"Android",link:"/pages/7d7b4c/"},
          {text:"Apple",link:"/pages/21b4f2/"},
        ]
      },
      {
        text: "工具使用",
        items:[
          {text:"Git使用",link:"/pages/bf5ad3/"},
        ]
      },
    ],
  },
  {text: '归档', link: '/archives/'},
  // { text: "简历", link: "/" },
];
