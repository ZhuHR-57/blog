// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "Golang",
    items: [
      {
        text: "项目配置",
        link: "/start/",
      },
    ],
  },
  {
    text: "Python",
    items: [
      {
        text: "项目配置",
        link: "/start/",
      },
    ],
  },
  {
    text: "数据库",
    items: [
      {
        text: "项目配置",
        link: "/start/",
      },
    ],
  },
  {
    text: "Linux",
    items: [
      {
        text: "项目配置",
        link: "/start/",
      },
    ],
  },
  {
    text: "容器",
    items: [
      {
        text: "项目配置",
        link: "/start/",
      },
    ],
  },
  {
    text: "前端",
    items: [
      {
        text: "项目配置",
        link: "/start/",
      },
    ],
  },
  {
    text: "算法",
    items: [
      {
        text: "项目配置",
        link: "/start/",
      },
    ],
  },
  { text: "简历", link: "/" },
];
