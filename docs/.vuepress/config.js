module.exports = {
  base: "/Laksa-docs/",
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US", // 将会被设置为 <html> 的 lang 属性
      title: "Laksa",
      description: "Zilliqa BlockChain Javascript API"
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Laksa",
      description: "Zilliqa BlockChain Javascript API"
    }
  },
  themeConfig: {
    sidebarDepth: 3,
    displayAllHeaders: true,
    activeHeaderLinks: true,
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        editLinkText: "Edit this page on GitHub",
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: "Intro", link: "/" },
          { text: "Guide", link: "/guide/" },
          { text: "External", link: "https://google.com" }
        ],
        sidebar: {
          "/guide/": ["", "QuickTutorial"],
          "/": [""]
        }
      },
      "/zh/": {
        // 多语言下拉菜单的标题
        selectText: "选择语言",
        // 该语言在下拉菜单中的标签
        label: "简体中文",
        // 编辑链接文字
        editLinkText: "在 GitHub 上编辑此页",
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: "介绍", link: "/zh/" },
          { text: "指南", link: "/zh/guide/" },
          { text: "Google", link: "https://google.com" }
        ],
        sidebar: {
          "/zh/guide/": ["", "QuickTutorial"],
          "/zh/": [""]
        }
      }
    },
    displayAllHeaders: true // 默认值：false
  }
};
