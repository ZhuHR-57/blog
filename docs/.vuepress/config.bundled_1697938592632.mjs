// docs/.vuepress/config.ts
import { defineConfig4CustomTheme } from "vuepress/config";

// docs/.vuepress/config/nav.ts
var nav_default = [
  { text: "Home", link: "/" },
  {
    text: "Golang",
    link: "/go/",
    items: [
      {
        text: "\u6846\u67B6",
        items: [
          { text: "Gin", link: "/pages/3e14ca/" }
        ]
      },
      {
        text: "\u5C0F\u5DE5\u5177",
        items: [
          { text: "\u6587\u4EF6\u4F20\u8F93\uFF08\u5C40\u57DF\u7F51\uFF09", link: "/pages/27351f/" },
          { text: "\u81EA\u52A8\u63D0\u4EA4Github", link: "/pages/27352f/" }
        ]
      },
      {
        text: "\u6DF1\u5165Go",
        items: [
          { text: "01.string\u7C7B\u578B", link: "/pages/b6ba67/" },
          { text: "02.slice\u7C7B\u578B", link: "/pages/5b42f7/" },
          { text: "03.\u7ED3\u6784\u4F53\u548C\u5185\u5B58\u5BF9\u9F50", link: "/pages/20d234/" }
        ]
      }
    ]
  },
  {
    text: "CPP",
    link: "/cpp/",
    items: [
      {
        text: "\u8BEF\u533A\u603B\u7ED3",
        items: [
          { text: "\u5B57\u7B26\u4E32\u4E0E\u5B57\u7B26\u521D\u59CB\u5316\u53CA\u8F6C\u6362", link: "/pages/cf07c3/" }
        ]
      }
    ]
  },
  {
    text: "\u7B97\u6CD5",
    link: "/algorithm/",
    items: [
      {
        text: "\u7B97\u6CD5\u6253\u5361",
        items: [
          { text: "Day45-\u52A8\u6001\u89C4\u5212", link: "/pages/8fcb3c/" },
          { text: "Day46-\u52A8\u6001\u89C4\u5212", link: "/pages/aed779/" },
          { text: "Day47-\u52A8\u6001\u89C4\u5212", link: "/pages/5375de/" }
        ]
      },
      {
        text: "\u7ECF\u5178\u7B97\u6CD5",
        items: [
          { text: "\u5B57\u7B26", link: "/pages/d1dc4a/" },
          { text: "\u56DE\u6EAF", link: "/pages/4b1970/" }
        ]
      }
    ]
  },
  {
    text: "\u5206\u4EAB",
    link: "/shares/",
    items: [
      {
        text: "\u6709\u8DA3\u7684\u5E93",
        items: [
          { text: "ChatGPT\u63D0\u793A", link: "/pages/68dc78/" }
        ]
      },
      {
        text: "\u5B9E\u7528\u8F6F\u4EF6",
        items: [
          { text: "Windows", link: "/pages/5d207c/" },
          { text: "Android", link: "/pages/7d7b4c/" },
          { text: "Apple", link: "/pages/21b4f2/" },
          { text: "Linux", link: "/pages/8f5ca5/" },
          { text: "Web", link: "/pages/6aa419/" }
        ]
      },
      {
        text: "\u5DE5\u5177\u4F7F\u7528",
        items: [
          { text: "Git\u4F7F\u7528", link: "/pages/bf5ad3/" }
        ]
      },
      {
        text: "English helper",
        items: [
          { text: "English Grammar", link: "/pages/08fa35/" }
        ]
      }
    ]
  },
  { text: "\u5F52\u6863", link: "/archives/" }
];

// docs/.vuepress/config/themeVdoingConfig.ts
var themeVdoingConfig_default = {
  nav: nav_default,
  sidebarDepth: 2,
  logo: "/assets/img/logo.png",
  repo: "ZhuHR-57",
  searchMaxSuggestions: 7,
  lastUpdated: "\u4E0A\u6B21\u66F4\u65B0",
  docsDir: "docs",
  editLinks: false,
  editLinkText: "\u7F16\u8F91",
  category: true,
  tag: true,
  archive: true,
  sidebarOpen: true,
  sidebar: { mode: "structuring", collapsable: true },
  updateBar: {
    showToArticle: false,
    moreArticle: "/archives"
  },
  author: {
    name: "Lido",
    link: "https://zhuhr-57.github.io/blog/"
  },
  blogger: {
    avatar: "h/assets/img/logoo.jpeg",
    name: "Lido",
    slogan: "\u6162\u6162\u4E00\u70B9\u4E00\u70B9\u505A\u7684\u66F4\u597D"
  },
  social: {
    icons: [
      {
        iconClass: "icon-github",
        title: "GitHub",
        link: "https://github.com/ZhuHR-57"
      }
    ]
  },
  footer: {
    createYear: 2022,
    copyrightInfo: `
      <a href='https://github.com/ZhuHR-57' target='_blank'>Lido</a>
    `
  }
};

// docs/.vuepress/config/markdown.ts
var markdown_default = {
  lineNumbers: true,
  plugins: [
    "markdown-it-sub",
    "markdown-it-sup",
    "markdown-it-footnote",
    "markdown-it-task-lists",
    "markdown-it-attrs",
    "markdown-it-imsize",
    "markdown-it-mathjax3",
    "markdown-it-abbr",
    "markdown-it-ins",
    "markdown-it-multimd-table-ext"
  ],
  extendMarkdown: (md) => {
    md.set({ breaks: true });
  },
  extractHeaders: ["h2", "h3", "h4", "h5", "h6"]
};

// docs/.vuepress/config/plugins.ts
import fs from "fs";
import { resolve } from "path";
var plugins_default = [
  [
    "sitemap",
    {
      hostname: `https://${fs.readFileSync(resolve("F:\\Blog\\Blog_Home_New\\docs\\.vuepress\\config", "../public", "CNAME"))}`
    }
  ],
  [
    "smplayer",
    {
      artplayer: {
        src: {
          playbackRate: true,
          whitelist: ["*"],
          moreVideoAttr: {
            preload: "auto"
          }
        }
      }
    }
  ],
  ["pangu"],
  [
    "one-click-copy",
    {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside'
      ],
      copyMessage: "\u590D\u5236\u6210\u529F",
      duration: 1e3,
      showInMobile: false
    }
  ],
  [
    "zooming",
    {
      selector: ".theme-vdoing-content img:not(.no-zoom)",
      options: {
        bgColor: "rgba(0,0,0,0.6)"
      }
    }
  ],
  ["fulltext-search"]
];

// docs/.vuepress/config/head.ts
var head_default = [
  ["link", { rel: "icon", href: "/favicon.ico" }],
  [
    "meta",
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1,user-scalable=no"
    }
  ]
];

// docs/.vuepress/config.ts
var config_default = defineConfig4CustomTheme({
  title: "Lido's Blog",
  description: "Hello Bugs!",
  dest: "dist",
  base: "/blog/",
  shouldPrefetch: () => false,
  head: head_default,
  theme: "vdoing",
  themeConfig: themeVdoingConfig_default,
  markdown: markdown_default,
  plugins: plugins_default
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZy9uYXYudHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlnL3RoZW1lVmRvaW5nQ29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZy9tYXJrZG93bi50cyIsICJkb2NzLy52dWVwcmVzcy9jb25maWcvcGx1Z2lucy50cyIsICJkb2NzLy52dWVwcmVzcy9jb25maWcvaGVhZC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gXHU3OTNBXHU0RjhCXHU1MTY4XHU5MEU4XHU0RjdGXHU3NTI4IC50cyBcdTkxNERcdTdGNkUsIFx1OEJFNlx1ODlDMVx1OEJGNFx1NjYwRSBodHRwczovL3YxLnZ1ZXByZXNzLnZ1ZWpzLm9yZy96aC9ndWlkZS90eXBlc2NyaXB0LWFzLWNvbmZpZy5odG1sXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZzRDdXN0b21UaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy9jb25maWdcIjtcbmltcG9ydCB7IFZkb2luZ1RoZW1lQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLXZkb2luZy90eXBlc1wiO1xuaW1wb3J0IHRoZW1lQ29uZmlnIGZyb20gXCIuL2NvbmZpZy90aGVtZVZkb2luZ0NvbmZpZ1wiO1xuaW1wb3J0IG1hcmtkb3duIGZyb20gXCIuL2NvbmZpZy9tYXJrZG93blwiO1xuaW1wb3J0IHBsdWdpbnMgZnJvbSBcIi4vY29uZmlnL3BsdWdpbnNcIjtcbmltcG9ydCBoZWFkIGZyb20gXCIuL2NvbmZpZy9oZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZzRDdXN0b21UaGVtZTxWZG9pbmdUaGVtZUNvbmZpZz4oe1xuICB0aXRsZTogXCJMaWRvJ3MgQmxvZ1wiLCAvL1x1N0FEOVx1NzBCOVx1NjgwN1x1OTg5OCwgXHU1RUZBXHU4QkFFXHU0RkVFXHU2NTM5XG4gIGRlc2NyaXB0aW9uOiBcIkhlbGxvIEJ1Z3MhXCIsIC8vXHU2M0NGXHU4RkYwLCBcdTVFRkFcdThCQUVcdTRGRUVcdTY1MzlcbiAgZGVzdDogXCJkaXN0XCIsIC8vXHU4RjkzXHU1MUZBXHU3NkVFXHU1RjU1LCBcdTlFRDhcdThCQTRcdTY2MkYgZGlzdCxcdTY1RTBcdTk3MDBcdTRGRUVcdTY1MzlcbiAgYmFzZTogXCIvYmxvZy9cIiwgLy9cdTkwRThcdTdGNzJcdTdBRDlcdTcwQjlcdTc2ODRcdTU3RkFcdTc4NDBcdThERUZcdTVGODQsIFx1OUVEOFx1OEJBNFx1NjYyRiAvLCBcdTRFMERcdTYxQzJcdTRFMERcdTg5ODFcdTVGMDBcdTU0MkZcbiAgc2hvdWxkUHJlZmV0Y2g6ICgpID0+IGZhbHNlLCAvL1x1NjYyRlx1NTQyNlx1NUYwMFx1NTQyRlx1OTg4NFx1NTJBMFx1OEY3RCwgXHU1RUZBXHU4QkFFXHU0RTBEXHU1RjAwXHU1NDJGLCBcdTY1RTBcdTk3MDBcdTRGRUVcdTY1MzlcbiAgaGVhZDogaGVhZCwgLy9cdTUxNjhcdTVDNDBcdTU5MzRcdTkwRThcdTRGRTFcdTYwNkZcdTkxNERcdTdGNkUsIFx1NTk4Mlx1OTcwMFx1NEZFRVx1NjUzOVx1OEJGN1x1NEZFRVx1NjUzOSBjb25maWcvaGVhZC50c1xuICB0aGVtZTogXCJ2ZG9pbmdcIiwgLy9cdTRFM0JcdTk4OTgsIFx1NjVFMFx1OTcwMFx1NEZFRVx1NjUzOVxuICB0aGVtZUNvbmZpZywgLy9cdTRFM0JcdTk4OThcdTkxNERcdTdGNkUsIFx1NTk4Mlx1OTcwMFx1NEZFRVx1NjUzOVx1OEJGN1x1NEZFRVx1NjUzOSBjb25maWcvdGhlbWVWZG9pbmdDb25maWcudHNcbiAgbWFya2Rvd24sIC8vbWFya2Rvd24gXHU3NkY4XHU1MTczXHU5MTREXHU3RjZFLCBcdTU5ODJcdTk3MDBcdTRGRUVcdTY1MzlcdThCRjdcdTRGRUVcdTY1MzkgY29uZmlnL21hcmtkb3duLnRzXG4gIHBsdWdpbnMsIC8vXHU2M0QyXHU0RUY2XHU5MTREXHU3RjZFLCBcdTU5ODJcdTk3MDBcdTRGRUVcdTY1MzlcdThCRjdcdTRGRUVcdTY1MzkgY29uZmlnL3BsdWdpbnMudHNcbn0pO1xuIiwgIi8vIG5hdiBcdTkxNERcdTdGNkUsIFx1NTM3M1x1NEUwQVx1NjVCOVx1NUJGQ1x1ODIyQVx1NjgwRlxuXG5pbXBvcnQgeyBOYXZJdGVtIH0gZnJvbSBcInZ1ZXByZXNzL2NvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCA8QXJyYXk8TmF2SXRlbT4+W1xuICB7IHRleHQ6IFwiSG9tZVwiLCBsaW5rOiBcIi9cIiB9LFxuICB7XG4gICAgdGV4dDogXCJHb2xhbmdcIixcbiAgICBsaW5rOiBcIi9nby9cIixcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1Njg0Nlx1NjdCNlwiLFxuICAgICAgICBpdGVtczpbXG4gICAgICAgICAge3RleHQ6XCJHaW5cIixsaW5rOlwiL3BhZ2VzLzNlMTRjYS9cIn1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTVDMEZcdTVERTVcdTUxNzdcIixcbiAgICAgICAgaXRlbXM6W1xuICAgICAgICAgIHt0ZXh0OlwiXHU2NTg3XHU0RUY2XHU0RjIwXHU4RjkzXHVGRjA4XHU1QzQwXHU1N0RGXHU3RjUxXHVGRjA5XCIsbGluazpcIi9wYWdlcy8yNzM1MWYvXCJ9LFxuICAgICAgICAgIHt0ZXh0OlwiXHU4MUVBXHU1MkE4XHU2M0QwXHU0RUE0R2l0aHViXCIsbGluazpcIi9wYWdlcy8yNzM1MmYvXCJ9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1NkRGMVx1NTE2NUdvXCIsXG4gICAgICAgIGl0ZW1zOltcbiAgICAgICAgICB7dGV4dDpcIjAxLnN0cmluZ1x1N0M3Qlx1NTc4QlwiLGxpbms6XCIvcGFnZXMvYjZiYTY3L1wifSxcbiAgICAgICAgICB7dGV4dDpcIjAyLnNsaWNlXHU3QzdCXHU1NzhCXCIsbGluazpcIi9wYWdlcy81YjQyZjcvXCJ9LFxuICAgICAgICAgIHt0ZXh0OlwiMDMuXHU3RUQzXHU2Nzg0XHU0RjUzXHU1NDhDXHU1MTg1XHU1QjU4XHU1QkY5XHU5RjUwXCIsbGluazpcIi9wYWdlcy8yMGQyMzQvXCJ9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIkNQUFwiLFxuICAgIGxpbms6IFwiL2NwcC9cIixcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1OEJFRlx1NTMzQVx1NjAzQlx1N0VEM1wiLFxuICAgICAgICBpdGVtczpbXG4gICAgICAgICAge3RleHQ6XCJcdTVCNTdcdTdCMjZcdTRFMzJcdTRFMEVcdTVCNTdcdTdCMjZcdTUyMURcdTU5Q0JcdTUzMTZcdTUzQ0FcdThGNkNcdTYzNjJcIixsaW5rOlwiL3BhZ2VzL2NmMDdjMy9cIn1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJcdTdCOTdcdTZDRDVcIixcbiAgICBsaW5rOiBcIi9hbGdvcml0aG0vXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTdCOTdcdTZDRDVcdTYyNTNcdTUzNjFcIixcbiAgICAgICAgaXRlbXM6W1xuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MDAtXHU1MUM2XHU1OTA3XCIsbGluazpcIi9wYWdlcy9mYzgwZGQvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MDEtXHU2NTcwXHU3RUM0XCIsbGluazpcIi9wYWdlcy84YWFiN2IvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MDItXHU2NTcwXHU3RUM0XCIsbGluazpcIi9wYWdlcy9mMmQzYWEvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MDMtXHU5NEZFXHU4ODY4XCIsbGluazpcIi9wYWdlcy8yYzUwMDkvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MDQtXHU5NEZFXHU4ODY4XCIsbGluazpcIi9wYWdlcy8xMTVhZjcvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MDUtXHU1NEM4XHU1RTBDXCIsbGluazpcIi9wYWdlcy8zMTFiNmIvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MDYtXHU1NEM4XHU1RTBDXCIsbGluazpcIi9wYWdlcy81ZDRhMmYvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MDctXHU1QjU3XHU3QjI2XHU0RTMyXCIsbGluazpcIi9wYWdlcy8yNmVhZjAvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MDgtXHU1QjU3XHU3QjI2XHU0RTMyXCIsbGluazpcIi9wYWdlcy84ZWYxN2MvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MDktXHU2ODA4XHU0RTBFXHU5NjFGXHU1MjE3XCIsbGluazpcIi9wYWdlcy81YjkxZmEvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MTAtXHU2ODA4XHU0RTBFXHU5NjFGXHU1MjE3XCIsbGluazpcIi9wYWdlcy81MWUwMzYvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MTEtXHU2ODA4XHU0RTBFXHU5NjFGXHU1MjE3XCIsbGluazpcIi9wYWdlcy85ZjFlZDcvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MTItXHU0RThDXHU1M0M5XHU2ODExXCIsbGluazpcIi9wYWdlcy9lNDJmMDYvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MTMtXHU0RThDXHU1M0M5XHU2ODExXCIsbGluazpcIi9wYWdlcy9lMTEwM2MvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MTQtXHU0RThDXHU1M0M5XHU2ODExXCIsbGluazpcIi9wYWdlcy9kMmJmZWEvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MTUtXHU0RThDXHU1M0M5XHU2ODExXCIsbGluazpcIi9wYWdlcy83MTg5MjkvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MTYtXHU0RThDXHU1M0M5XHU2ODExXCIsbGluazpcIi9wYWdlcy9hYTA1NDUvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MTctXHU0RThDXHU1M0M5XHU2ODExXCIsbGluazpcIi9wYWdlcy9kYzlhYzgvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MTgtXHU0RThDXHU1M0M5XHU2ODExXCIsbGluazpcIi9wYWdlcy8yNmUzZWEvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MTktXHU0RThDXHU1M0M5XHU2ODExXCIsbGluazpcIi9wYWdlcy80NWY0MDQvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MjAtXHU0RThDXHU1M0M5XHU2ODExXCIsbGluazpcIi9wYWdlcy8yNWMxN2QvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MjEtXHU1NkRFXHU2RUFGXCIsbGluazpcIi9wYWdlcy9hNzBhY2IvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MjItXHU1NkRFXHU2RUFGXCIsbGluazpcIi9wYWdlcy9jZWRjMTYvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MjMtXHU1NkRFXHU2RUFGXCIsbGluazpcIi9wYWdlcy83ZjczZGEvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MjQtXHU1NkRFXHU2RUFGXCIsbGluazpcIi9wYWdlcy9mMjc5YWUvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MjUtXHU1NkRFXHU2RUFGXCIsbGluazpcIi9wYWdlcy80ODZmMWYvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MjYtXHU1NkRFXHU2RUFGXCIsbGluazpcIi9wYWdlcy85NTk1ODYvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MjctXHU4RDJBXHU1RkMzXCIsbGluazpcIi9wYWdlcy9kMmZmYzMvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MjgtXHU4RDJBXHU1RkMzXCIsbGluazpcIi9wYWdlcy9hYjA4OTMvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MjktXHU1NkRFXHU5ODdFXHU2NTcwXHU3RUM0XHU0RTBFXHU5NEZFXHU4ODY4XCIsbGluazpcIi9wYWdlcy9kM2MxYWMvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MzAtXHU4RDJBXHU1RkMzXCIsbGluazpcIi9wYWdlcy9jNWE4ZTEvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MzEtXHU4RDJBXHU1RkMzXCIsbGluazpcIi9wYWdlcy8xYTc0NDIvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MzItXHU4RDJBXHU1RkMzXCIsbGluazpcIi9wYWdlcy82YjEyN2MvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MzMtXHU4RDJBXHU1RkMzXCIsbGluazpcIi9wYWdlcy80YTVhYjQvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MzQtXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyXCIsbGluazpcIi9wYWdlcy9iYTE0ZGEvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MzUtXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyXCIsbGluazpcIi9wYWdlcy81MDRiODgvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MzYtXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyXCIsbGluazpcIi9wYWdlcy9kNmE5MDQvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MzctXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyXCIsbGluazpcIi9wYWdlcy8yNTdhMDgvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MzgtXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyXCIsbGluazpcIi9wYWdlcy9mYzJiMjgvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5MzktXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyXCIsbGluazpcIi9wYWdlcy9lMmZhMjUvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5NDAtXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyXCIsbGluazpcIi9wYWdlcy81NjdjMTIvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5NDEtXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyXCIsbGluazpcIi9wYWdlcy84YjQ0MzYvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5NDItXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyXCIsbGluazpcIi9wYWdlcy8xNDc0MDQvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5NDMtXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyXCIsbGluazpcIi9wYWdlcy9jOGE1MTEvXCJ9LFxuICAgICAgICAgIC8vIHt0ZXh0OlwiRGF5NDQtXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyXCIsbGluazpcIi9wYWdlcy85ZGYwNjgvXCJ9LFxuICAgICAgICAgIHt0ZXh0OlwiRGF5NDUtXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyXCIsbGluazpcIi9wYWdlcy84ZmNiM2MvXCJ9LFxuICAgICAgICAgIHt0ZXh0OlwiRGF5NDYtXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyXCIsbGluazpcIi9wYWdlcy9hZWQ3NzkvXCJ9LFxuICAgICAgICAgIHt0ZXh0OlwiRGF5NDctXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyXCIsbGluazpcIi9wYWdlcy81Mzc1ZGUvXCJ9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1N0VDRlx1NTE3OFx1N0I5N1x1NkNENVwiLFxuICAgICAgICBpdGVtczpbXG4gICAgICAgICAge3RleHQ6XCJcdTVCNTdcdTdCMjZcIixsaW5rOlwiL3BhZ2VzL2QxZGM0YS9cIn0sXG4gICAgICAgICAge3RleHQ6XCJcdTU2REVcdTZFQUZcIixsaW5rOlwiL3BhZ2VzLzRiMTk3MC9cIn1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJcdTUyMDZcdTRFQUJcIixcbiAgICBsaW5rOiBcIi9zaGFyZXMvXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTY3MDlcdThEQTNcdTc2ODRcdTVFOTNcIixcbiAgICAgICAgaXRlbXM6W1xuICAgICAgICAgIHt0ZXh0OlwiQ2hhdEdQVFx1NjNEMFx1NzkzQVwiLGxpbms6XCIvcGFnZXMvNjhkYzc4L1wifSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTVCOUVcdTc1MjhcdThGNkZcdTRFRjZcIixcbiAgICAgICAgaXRlbXM6W1xuICAgICAgICAgIHt0ZXh0OlwiV2luZG93c1wiLGxpbms6XCIvcGFnZXMvNWQyMDdjL1wifSxcbiAgICAgICAgICB7dGV4dDpcIkFuZHJvaWRcIixsaW5rOlwiL3BhZ2VzLzdkN2I0Yy9cIn0sXG4gICAgICAgICAge3RleHQ6XCJBcHBsZVwiLGxpbms6XCIvcGFnZXMvMjFiNGYyL1wifSxcbiAgICAgICAgICB7dGV4dDpcIkxpbnV4XCIsbGluazpcIi9wYWdlcy84ZjVjYTUvXCJ9LFxuICAgICAgICAgIHt0ZXh0OlwiV2ViXCIsbGluazpcIi9wYWdlcy82YWE0MTkvXCJ9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1NURFNVx1NTE3N1x1NEY3Rlx1NzUyOFwiLFxuICAgICAgICBpdGVtczpbXG4gICAgICAgICAge3RleHQ6XCJHaXRcdTRGN0ZcdTc1MjhcIixsaW5rOlwiL3BhZ2VzL2JmNWFkMy9cIn0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiRW5nbGlzaCBoZWxwZXJcIixcbiAgICAgICAgaXRlbXM6W1xuICAgICAgICAgIHt0ZXh0OlwiRW5nbGlzaCBHcmFtbWFyXCIsbGluazpcIi9wYWdlcy8wOGZhMzUvXCJ9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHt0ZXh0OiAnXHU1RjUyXHU2ODYzJywgbGluazogJy9hcmNoaXZlcy8nfSxcbiAgLy8geyB0ZXh0OiBcIlx1N0I4MFx1NTM4NlwiLCBsaW5rOiBcIi9cIiB9LFxuXTtcbiIsICIvLyBcdTRFM0JcdTk4OThcdTkxNERcdTdGNkVcdUZGMENcdThCRTZcdTg5QzEgaHR0cHM6Ly9kb2MueHVnYW95aS5jb21cblxuaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZcIjtcbmltcG9ydCB7IFZkb2luZ1RoZW1lQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLXZkb2luZy90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCA8VmRvaW5nVGhlbWVDb25maWc+e1xuICBuYXY6IG5hdiwgLy8gXHU0RTBBXHU2NUI5XHU1QkZDXHU4MjJBXHU2ODBGXHU5MTREXHU3RjZFLCBcdTU5ODJcdTk3MDBcdTRGRUVcdTY1MzlcdThCRjdcdTRGRUVcdTY1MzkgbmF2LnRzXG4gIHNpZGViYXJEZXB0aDogMiwgLy8gXHU0RkE3XHU4RkI5XHU2ODBGXHU2NjNFXHU3OTNBXHU2REYxXHU1RUE2XHVGRjBDXHU5RUQ4XHU4QkE0MVx1RkYwQ1x1NjcwMFx1NTkyNzJcdUZGMDhcdTY2M0VcdTc5M0FcdTUyMzBoM1x1NjgwN1x1OTg5OFx1RkYwOVxuICBsb2dvOiBcIi9hc3NldHMvaW1nL2xvZ28ucG5nXCIsIC8vIFx1NUJGQ1x1ODIyQVx1NjgwRkxvZ29cbiAgcmVwbzogXCJaaHVIUi01N1wiLCAvLyBcdTVCRkNcdTgyMkFcdTY4MEZcdTUzRjNcdTRGQTdcdTc1MUZcdTYyMTBHaXRodWJcdTk0RkVcdTYzQTVcbiAgc2VhcmNoTWF4U3VnZ2VzdGlvbnM6IDcsIC8vIFx1NjQxQ1x1N0QyMlx1N0VEM1x1Njc5Q1x1NjYzRVx1NzkzQVx1NjcwMFx1NTkyN1x1NjU3MFxuICBsYXN0VXBkYXRlZDogXCJcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjBcIiwgLy8gXHU2NkY0XHU2NUIwXHU3Njg0XHU2NUY2XHU5NUY0XHVGRjBDXHU1M0NBXHU1MjREXHU3RjAwXHU2NTg3XHU1QjU3ICAgc3RyaW5nIHwgYm9vbGVhbiAoXHU1M0Q2XHU1MDNDXHU0RTNBZ2l0XHU2M0QwXHU0RUE0XHU2NUY2XHU5NUY0KVxuICBkb2NzRGlyOiBcImRvY3NcIiwgLy8gXHU3RjE2XHU4RjkxXHU3Njg0XHU2NTg3XHU0RUY2XHU1OTM5XG4gIGVkaXRMaW5rczogZmFsc2UsIC8vIFx1NTQyRlx1NzUyOFx1N0YxNlx1OEY5MVxuICBlZGl0TGlua1RleHQ6IFwiXHU3RjE2XHU4RjkxXCIsIC8vIFx1N0YxNlx1OEY5MVx1OTRGRVx1NjNBNVx1NjU4N1x1NUI1N1xuXG4gIC8vKioqIFx1NEVFNVx1NEUwQlx1NjYyRlZkb2luZ1x1NEUzQlx1OTg5OFx1NzZGOFx1NTE3M1x1OTE0RFx1N0Y2RVx1RkYwQ1x1NjU4N1x1Njg2M1x1RkYxQWh0dHBzOi8vZG9jLnh1Z2FveWkuY29tL3BhZ2VzL2EyMGNlOC8gKioqLy9cblxuICBjYXRlZ29yeTogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU2MjUzXHU1RjAwXHU1MjA2XHU3QzdCXHU1MjlGXHU4MEZEXHVGRjBDXHU5RUQ4XHU4QkE0dHJ1ZVx1MzAwMiBcdTU5ODJcdTYyNTNcdTVGMDBcdUZGMENcdTRGMUFcdTUwNUFcdTc2ODRcdTRFOEJcdTYwQzVcdTY3MDlcdUZGMUExLiBcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdTc2ODRmcm9udCBtYXR0ZXJcdTUzMDVcdTU0MkJcdTUyMDZcdTdDN0JcdTVCNTdcdTZCQjUgMi5cdTk4NzVcdTk3NjJcdTRFMkRcdTY2M0VcdTc5M0FcdTRFMEVcdTUyMDZcdTdDN0JcdTc2RjhcdTUxNzNcdTc2ODRcdTRGRTFcdTYwNkZcdTU0OENcdTZBMjFcdTU3NTcgMy5cdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdTUyMDZcdTdDN0JcdTk4NzVcdTk3NjJcdUZGMDhcdTU3MjhAcGFnZXNcdTY1ODdcdTRFRjZcdTU5MzlcdUZGMDlcdTMwMDJcdTU5ODJcdTUxNzNcdTk1RURcdUZGMENcdTUyMTlcdTUzQ0RcdTRFNEJcdTMwMDJcbiAgdGFnOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTY4MDdcdTdCN0VcdTUyOUZcdTgwRkRcdUZGMENcdTlFRDhcdThCQTR0cnVlXHUzMDAyIFx1NTk4Mlx1NjI1M1x1NUYwMFx1RkYwQ1x1NEYxQVx1NTA1QVx1NzY4NFx1NEU4Qlx1NjBDNVx1NjcwOVx1RkYxQTEuIFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1NzY4NGZyb250IG1hdHRlclx1NTMwNVx1NTQyQlx1NjgwN1x1N0I3RVx1NUI1N1x1NkJCNSAyLlx1OTg3NVx1OTc2Mlx1NEUyRFx1NjYzRVx1NzkzQVx1NEUwRVx1NjgwN1x1N0I3RVx1NzZGOFx1NTE3M1x1NzY4NFx1NEZFMVx1NjA2Rlx1NTQ4Q1x1NkEyMVx1NTc1NyAzLlx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1NjgwN1x1N0I3RVx1OTg3NVx1OTc2Mlx1RkYwOFx1NTcyOEBwYWdlc1x1NjU4N1x1NEVGNlx1NTkzOVx1RkYwOVx1MzAwMlx1NTk4Mlx1NTE3M1x1OTVFRFx1RkYwQ1x1NTIxOVx1NTNDRFx1NEU0Qlx1MzAwMlxuICBhcmNoaXZlOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTVGNTJcdTY4NjNcdTUyOUZcdTgwRkRcdUZGMENcdTlFRDhcdThCQTR0cnVlXHUzMDAyIFx1NTk4Mlx1NjI1M1x1NUYwMFx1RkYwQ1x1NEYxQVx1NTA1QVx1NzY4NFx1NEU4Qlx1NjBDNVx1NjcwOVx1RkYxQTEuXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwXHU1RjUyXHU2ODYzXHU5ODc1XHU5NzYyXHVGRjA4XHU1NzI4QHBhZ2VzXHU2NTg3XHU0RUY2XHU1OTM5XHVGRjA5XHUzMDAyXHU1OTgyXHU1MTczXHU5NUVEXHVGRjBDXHU1MjE5XHU1M0NEXHU0RTRCXHUzMDAyXG4gIC8vIGJvZHlCZ0ltZzogW1xuICAvLyAgICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gveHVnYW95aS9pbWFnZV9zdG9yZS9ibG9nLzIwMjAwNTA3MTc1ODI4LmpwZWcnLFxuICAvLyAgICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gveHVnYW95aS9pbWFnZV9zdG9yZS9ibG9nLzIwMjAwNTA3MTc1ODQ1LmpwZWcnLFxuICAvLyAgICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gveHVnYW95aS9pbWFnZV9zdG9yZS9ibG9nLzIwMjAwNTA3MTc1ODQ2LmpwZWcnXG4gIC8vIF0sIC8vIGJvZHlcdTgwQ0NcdTY2NkZcdTU5MjdcdTU2RkVcdUZGMENcdTlFRDhcdThCQTRcdTY1RTBcdTMwMDIgXHU1MzU1XHU1RjIwXHU1NkZFXHU3MjQ3IFN0cmluZyB8IFx1NTkxQVx1NUYyMFx1NTZGRVx1NzI0NyBBcnJheSwgXHU1OTFBXHU1RjIwXHU1NkZFXHU3MjQ3XHU2NUY2XHU2QkNGXHU5Njk0MTVcdTc5RDJcdTYzNjJcdTRFMDBcdTVGMjBcdTMwMDJcbiAgLy8gYm9keUJnSW1nT3BhY2l0eTogMC41LCAvLyBib2R5XHU4MENDXHU2NjZGXHU1NkZFXHU5MDBGXHU2NjBFXHU1RUE2XHVGRjBDXHU5MDA5XHU1MDNDIDAuMX4gMS4wLCBcdTlFRDhcdThCQTQwLjVcbiAgLy8gdGl0bGVCYWRnZTogZmFsc2UsIC8vIFx1NjU4N1x1N0FFMFx1NjgwN1x1OTg5OFx1NTI0RFx1NzY4NFx1NTZGRVx1NjgwN1x1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgLy8gdGl0bGVCYWRnZUljb25zOiBbIC8vIFx1NjU4N1x1N0FFMFx1NjgwN1x1OTg5OFx1NTI0RFx1NTZGRVx1NjgwN1x1NzY4NFx1NTczMFx1NTc0MFx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQlx1OTg5OFx1NTE4NVx1N0Y2RVx1NTZGRVx1NjgwN1xuICAvLyAgICdcdTU2RkVcdTY4MDdcdTU3MzBcdTU3NDAxJyxcbiAgLy8gICAnXHU1NkZFXHU2ODA3XHU1NzMwXHU1NzQwMidcbiAgLy8gXSxcbiAgLy8gY29udGVudEJnU3R5bGU6IDEsIC8vIFx1NjU4N1x1N0FFMFx1NTE4NVx1NUJCOVx1NTc1N1x1NzY4NFx1ODBDQ1x1NjY2Rlx1OThDRVx1NjgzQ1x1RkYwQ1x1OUVEOFx1OEJBNFx1NjVFMC4gMSBcdTY1QjlcdTY4M0MgfCAyIFx1NkEyQVx1N0VCRiB8IDMgXHU3QUQ2XHU3RUJGIHwgNCBcdTVERTZcdTY1OUNcdTdFQkYgfCA1IFx1NTNGM1x1NjU5Q1x1N0VCRiB8IDYgXHU3MEI5XHU3MkI2XG4gIC8vIHJpZ2h0TWVudUJhcjogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1NTNGM1x1NEZBN1x1NjU4N1x1N0FFMFx1NTkyN1x1N0VCMlx1NjgwRlx1RkYwQ1x1OUVEOFx1OEJBNHRydWUgKFx1NUM0Rlx1NUJCRFx1NUMwRlx1NEU4RTEzMDBweFx1NEUwQlx1NjVFMFx1OEJCQVx1NTk4Mlx1NEY1NVx1OTBGRFx1NEUwRFx1NjYzRVx1NzkzQSlcbiAgLy8gc2lkZWJhck9wZW46IGZhbHNlLCAvLyBcdTUyMURcdTU5Q0JcdTcyQjZcdTYwMDFcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTVERTZcdTRGQTdcdThGQjlcdTY4MEZcdUZGMENcdTlFRDhcdThCQTR0cnVlXG4gIC8vIHBhZ2VCdXR0b246IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcdTVGRUJcdTYzNzdcdTdGRkJcdTk4NzVcdTYzMDlcdTk0QUVcdUZGMENcdTlFRDhcdThCQTR0cnVlXG5cbiAgc2lkZWJhck9wZW46IHRydWUsIC8vIFx1NTIxRFx1NTlDQlx1NzJCNlx1NjAwMVx1NjYyRlx1NTQyNlx1NjI1M1x1NUYwMFx1NEZBN1x1OEZCOVx1NjgwRlx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgc2lkZWJhcjogeyBtb2RlOiBcInN0cnVjdHVyaW5nXCIsIGNvbGxhcHNhYmxlOiB0cnVlIH0sIC8vIFx1NEZBN1x1OEZCOVx1NjgwRiAgJ3N0cnVjdHVyaW5nJyB8IHsgbW9kZTogJ3N0cnVjdHVyaW5nJywgY29sbGFwc2FibGU6IEJvb2xlYW59IHwgJ2F1dG8nIHwgXHU4MUVBXHU1QjlBXHU0RTQ5XG5cbiAgdXBkYXRlQmFyOiB7XG4gICAgLy8gXHU2NzAwXHU4RkQxXHU2NkY0XHU2NUIwXHU2ODBGXG4gICAgc2hvd1RvQXJ0aWNsZTogZmFsc2UsIC8vIFx1NjYzRVx1NzkzQVx1NTIzMFx1NjU4N1x1N0FFMFx1OTg3NVx1NUU5NVx1OTBFOFx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgICBtb3JlQXJ0aWNsZTogXCIvYXJjaGl2ZXNcIiwgLy8gXHUyMDFDXHU2NkY0XHU1OTFBXHU2NTg3XHU3QUUwXHUyMDFEXHU4REYzXHU4RjZDXHU3Njg0XHU5ODc1XHU5NzYyXHVGRjBDXHU5RUQ4XHU4QkE0Jy9hcmNoaXZlcydcbiAgfSxcblxuICBhdXRob3I6IHtcbiAgICAvLyBcdTY1ODdcdTdBRTBcdTlFRDhcdThCQTRcdTc2ODRcdTRGNUNcdTgwMDVcdTRGRTFcdTYwNkZcdUZGMENcdTUzRUZcdTU3MjgubWRcdTY1ODdcdTRFRjZmcm9udCBtYXR0ZXJcdTRFMkRcdTUzNTVcdTcyRUNcdTkxNERcdTdGNkVcdTZCNjRcdTRGRTFcdTYwNkYgU3RyaW5nIHwge25hbWU6IFN0cmluZywgbGluazogU3RyaW5nfVxuICAgIG5hbWU6IFwiTGlkb1wiLCAvLyBcdTVGQzVcdTk3MDBcbiAgICBsaW5rOiBcImh0dHBzOi8vemh1aHItNTcuZ2l0aHViLmlvL2Jsb2cvXCIsIC8vIFx1NTNFRlx1OTAwOVx1NzY4NFxuICB9LFxuXG4gIC8vIFx1NTM1QVx1NEUzQlx1NEZFMVx1NjA2Rlx1RkYwQ1x1NjYzRVx1NzkzQVx1NTcyOFx1OTk5Nlx1OTg3NVx1NEZBN1x1OEZCOVx1NjgwRlxuICBibG9nZ2VyOiB7XG4gICAgYXZhdGFyOlxuICAgICAgXCJodHRwczovL3MzLmJtcC5vdmgvaW1ncy8yMDIzLzAyLzA0L2ZjZTgxZTczMDM4NzM4ZjAuanBnXCIsXG4gICAgbmFtZTogXCJMaWRvXCIsXG4gICAgc2xvZ2FuOiBcIlx1NjE2Mlx1NjE2Mlx1NEUwMFx1NzBCOVx1NEUwMFx1NzBCOVx1NTA1QVx1NzY4NFx1NjZGNFx1NTk3RFwiLFxuICB9LFxuXG4gIC8vIFx1NzkzRVx1NEVBNFx1NTZGRVx1NjgwNyAoXHU2NjNFXHU3OTNBXHU0RThFXHU1MzVBXHU0RTNCXHU0RkUxXHU2MDZGXHU2ODBGXHU1NDhDXHU5ODc1XHU4MTFBXHU2ODBGXHUzMDAyXHU1MTg1XHU3RjZFXHU1NkZFXHU2ODA3XHVGRjFBaHR0cHM6Ly9kb2MueHVnYW95aS5jb20vcGFnZXMvYTIwY2U4LyNzb2NpYWwpXG4gIHNvY2lhbDoge1xuICAgIC8vIGljb25mb250Q3NzRmlsZTogJy8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTY3ODQ4Ml91NG5ybnA4eHA2Zy5jc3MnLCAvLyBcdTUzRUZcdTkwMDlcdUZGMENcdTk2M0ZcdTkxQ0NcdTU2RkVcdTY4MDdcdTVFOTNcdTU3MjhcdTdFQkZjc3NcdTY1ODdcdTRFRjZcdTU3MzBcdTU3NDBcdUZGMENcdTVCRjlcdTRFOEVcdTRFM0JcdTk4OThcdTZDQTFcdTY3MDlcdTc2ODRcdTU2RkVcdTY4MDdcdTUzRUZcdTgxRUFcdTc1MzFcdTZERkJcdTUyQTBcbiAgICBpY29uczogW1xuICAgICAgLy8ge1xuICAgICAgLy8gICBpY29uQ2xhc3M6IFwiaWNvbi1RUVwiLFxuICAgICAgLy8gICB0aXRsZTogXCJRUVwiLFxuICAgICAgLy8gICBsaW5rOiBcIi9hc3NldHMvaHRtbC9xcS1ncm91cHMuaHRtbFwiLFxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgaWNvbkNsYXNzOiBcImljb24tYmlsaWJpbGlcIixcbiAgICAgIC8vICAgdGl0bGU6IFwiXHU1NEQ0XHU1NEU5XHU1NEQ0XHU1NEU5XCIsXG4gICAgICAvLyAgIGxpbms6IFwiaHR0cHM6Ly9zcGFjZS5iaWxpYmlsaS5jb20vMjg0NzQ2ODJcIixcbiAgICAgIC8vIH0sXG4gICAgICB7XG4gICAgICAgIGljb25DbGFzczogXCJpY29uLWdpdGh1YlwiLFxuICAgICAgICB0aXRsZTogXCJHaXRIdWJcIixcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vWmh1SFItNTdcIixcbiAgICAgIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGljb25DbGFzczogXCJpY29uLXlvdWppYW5cIixcbiAgICAgIC8vICAgdGl0bGU6IFwiXHU1M0QxXHU5MEFFXHU0RUY2XCIsXG4gICAgICAvLyAgIGxpbms6IFwiaGFvcm9uZ3podTdAZ21haWwuY29tXCIsXG4gICAgICAvLyB9LFxuICAgIF0sXG4gIH0sXG4gIGZvb3Rlcjoge1xuICAgIC8vIFx1OTg3NVx1ODExQVx1NEZFMVx1NjA2RiwgXHU4QkY3XHU2ODM5XHU2MzZFXHU1QjlFXHU5NjQ1XHU2MEM1XHU1MUI1XHU0RkVFXHU2NTM5LCBcdTUyMjBcdTYzODlcdTRFMERcdTk3MDBcdTg5ODFcdTc2ODRcdTkwRThcdTUyMDZcbiAgICBjcmVhdGVZZWFyOiAyMDIyLCAvLyBcdTUzNUFcdTVCQTJcdTUyMUJcdTVFRkFcdTVFNzRcdTRFRkRcbiAgICBjb3B5cmlnaHRJbmZvOiBgXG4gICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vWmh1SFItNTcnIHRhcmdldD0nX2JsYW5rJz5MaWRvPC9hPlxuICAgIGAsIC8vIFx1NTM1QVx1NUJBMlx1NzI0OFx1Njc0M1x1NEZFMVx1NjA2Rlx1RkYwQ1x1NjUyRlx1NjMwMWFcdTY4MDdcdTdCN0VcbiAgfSxcbn07XG4iLCAiLy8gXHU5MTREXHU3RjZFXHU4QkY0XHU2NjBFIGh0dHBzOi8vdjEudnVlcHJlc3MudnVlanMub3JnL3poL2NvbmZpZy8jbWFya2Rvd25cblxuaW1wb3J0IHsgTWFya2Rvd25Db25maWcgfSBmcm9tIFwidnVlcHJlc3MvY29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IDxNYXJrZG93bkNvbmZpZz57XG4gIGxpbmVOdW1iZXJzOiB0cnVlLFxuICBwbHVnaW5zOiBbXG4gICAgXCJtYXJrZG93bi1pdC1zdWJcIixcbiAgICBcIm1hcmtkb3duLWl0LXN1cFwiLFxuICAgIFwibWFya2Rvd24taXQtZm9vdG5vdGVcIixcbiAgICBcIm1hcmtkb3duLWl0LXRhc2stbGlzdHNcIixcbiAgICBcIm1hcmtkb3duLWl0LWF0dHJzXCIsXG4gICAgXCJtYXJrZG93bi1pdC1pbXNpemVcIixcbiAgICBcIm1hcmtkb3duLWl0LW1hdGhqYXgzXCIsXG4gICAgXCJtYXJrZG93bi1pdC1hYmJyXCIsXG4gICAgXCJtYXJrZG93bi1pdC1pbnNcIixcbiAgICBcIm1hcmtkb3duLWl0LW11bHRpbWQtdGFibGUtZXh0XCIsXG4gIF0sXG4gIGV4dGVuZE1hcmtkb3duOiAobWQpID0+IHtcbiAgICBtZC5zZXQoeyBicmVha3M6IHRydWUgfSk7XG4gIH0sXG4gIGV4dHJhY3RIZWFkZXJzOiBbXCJoMlwiLCBcImgzXCIsIFwiaDRcIiwgXCJoNVwiLCBcImg2XCJdLCAvLyBcdTYzRDBcdTUzRDZcdTY4MDdcdTk4OThcdTUyMzBcdTRGQTdcdThGQjlcdTY4MEZcdTc2ODRcdTdFQTdcdTUyMkJcdUZGMENcdTlFRDhcdThCQTRbJ2gyJywgJ2gzJ11cbn07XG4iLCAiLy8gXHU2M0QyXHU0RUY2XHU5MTREXHU3RjZFLCBcdThCRTZcdTg5QzEgaHR0cHM6Ly92MS52dWVwcmVzcy52dWVqcy5vcmcvemgvcGx1Z2luL3VzaW5nLWEtcGx1Z2luLmh0bWxcblxuaW1wb3J0IHsgVXNlclBsdWdpbnMgfSBmcm9tIFwidnVlcHJlc3MvY29uZmlnXCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB0eXBlIHsgU21QbGF5ZXJQbHVnaW5PcHRpb24gfSBmcm9tIFwidnVlcHJlc3MtcGx1Z2luLXNtcGxheWVyL3R5cGVzXCI7XG5cbi8vIFx1OTE0RFx1N0Y2RVx1NjNEMlx1NEVGNlx1RkYwQ1x1NjNBOFx1ODM1MFx1NEY3Rlx1NzUyOCBCYWJlbCBcdTVGMEYsIFx1NjgzOVx1NjM2RVx1ODFFQVx1NURGMVx1NjNEMlx1NEVGNlx1NjBDNVx1NTFCNVx1NEZFRVx1NjUzOVx1NjNEMlx1NEVGNlx1OTE0RFx1N0Y2RVxuZXhwb3J0IGRlZmF1bHQgPFVzZXJQbHVnaW5zPltcbiAgW1xuICAgIFwic2l0ZW1hcFwiLFxuICAgIHtcbiAgICAgIGhvc3RuYW1lOiBgaHR0cHM6Ly8ke2ZzLnJlYWRGaWxlU3luYyhcbiAgICAgICAgcmVzb2x2ZShcIkY6XFxcXEJsb2dcXFxcQmxvZ19Ib21lX05ld1xcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWdcIiwgXCIuLi9wdWJsaWNcIiwgXCJDTkFNRVwiKVxuICAgICAgKX1gLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICBcInNtcGxheWVyXCIsXG4gICAge1xuICAgICAgYXJ0cGxheWVyOiB7XG4gICAgICAgIHNyYzoge1xuICAgICAgICAgIHBsYXliYWNrUmF0ZTogdHJ1ZSxcbiAgICAgICAgICB3aGl0ZWxpc3Q6IFtcIipcIl0sXG4gICAgICAgICAgbW9yZVZpZGVvQXR0cjoge1xuICAgICAgICAgICAgcHJlbG9hZDogXCJhdXRvXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSBhcyBTbVBsYXllclBsdWdpbk9wdGlvbixcbiAgXSxcbiAgW1wicGFuZ3VcIl0sXG4gIFtcbiAgICBcIm9uZS1jbGljay1jb3B5XCIsXG4gICAge1xuICAgICAgY29weVNlbGVjdG9yOiBbXG4gICAgICAgICdkaXZbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHByZScsXG4gICAgICAgICdkaXZbY2xhc3MqPVwiYXNpZGUtY29kZVwiXSBhc2lkZScsXG4gICAgICBdLFxuICAgICAgY29weU1lc3NhZ2U6IFwiXHU1OTBEXHU1MjM2XHU2MjEwXHU1MjlGXCIsXG4gICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgIHNob3dJbk1vYmlsZTogZmFsc2UsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIFwiem9vbWluZ1wiLFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiBcIi50aGVtZS12ZG9pbmctY29udGVudCBpbWc6bm90KC5uby16b29tKVwiLCAvLyBcdTYzOTJcdTk2NjRjbGFzc1x1NjYyRm5vLXpvb21cdTc2ODRcdTU2RkVcdTcyNDdcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYmdDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNilcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgW1wiZnVsbHRleHQtc2VhcmNoXCJdLFxuXTtcbiIsICJpbXBvcnQgeyBIZWFkVGFncyB9IGZyb20gXCJ2dWVwcmVzcy9jb25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgPEhlYWRUYWdzPltcbiAgW1wibGlua1wiLCB7IHJlbDogXCJpY29uXCIsIGhyZWY6IFwiL2Zhdmljb24uaWNvXCIgfV0sIC8vXHU3QUQ5XHU3MEI5XHU1NkZFXHU2ODA3LCBcdTlFRDhcdThCQTRcdTRFM0EgcHVibGljL2Zhdmljb24uaWNvXG4gIFtcbiAgICBcIm1ldGFcIixcbiAgICB7XG4gICAgICBuYW1lOiBcInZpZXdwb3J0XCIsXG4gICAgICBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ub1wiLFxuICAgIH0sXG4gIF0sXG5dO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBOzs7QUNFQSxJQUFPLGNBQXdCO0FBQUEsRUFDN0IsRUFBRSxNQUFNLFFBQVEsTUFBTTtBQUFBLEVBQ3RCO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTTtBQUFBLFVBQ0osRUFBQyxNQUFLLE9BQU0sTUFBSztBQUFBO0FBQUE7QUFBQSxNQUdyQjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTTtBQUFBLFVBQ0osRUFBQyxNQUFLLDBEQUFZLE1BQUs7QUFBQSxVQUN2QixFQUFDLE1BQUssa0NBQWEsTUFBSztBQUFBO0FBQUE7QUFBQSxNQUc1QjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTTtBQUFBLFVBQ0osRUFBQyxNQUFLLHlCQUFjLE1BQUs7QUFBQSxVQUN6QixFQUFDLE1BQUssd0JBQWEsTUFBSztBQUFBLFVBQ3hCLEVBQUMsTUFBSyx1REFBYyxNQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtqQztBQUFB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