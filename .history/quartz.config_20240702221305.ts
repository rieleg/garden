import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Little Oasis",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "note.yelleis.top",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Noto Sans CJK",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#faf8f8", // #faf8f8
          lightgray: "#e5e5e5", // #e5e5e5
          gray: "#b8b8b8", // #b8b8b8
          darkgray: "#4e4e4e", // #4e4e4e
          dark: "#2b2b2b", // #2b2b2b
          secondary: "#284b63", // #284b63
          tertiary: "#84a59d", // #84a59d
          highlight: "rgba(143, 159, 169, 0.15)", // rgba(143, 159, 169, 0.15)
        },
        darkMode: {
          light: "#1e1e1e", // 页面背景 #161618
          lightgray: "#2e8b5720", // 边框 #393639
          gray: "#646464", // 图形链接，较粗的边框 #646464
          darkgray: "#e0e0e0", // 正文 #d4d4d4
          dark: "#ffffff", // 标题文本和图标 #ebebec
          secondary: "#8fbc8f", // 链接颜色，节点颜色 #7b97aa
          tertiary: "#345e37", // 鼠标指向及已访问过节点 #84a59d
          highlight: "#ffe0c820", // 内部链接背景、突出显示文本、高亮代码 rgba(143, 159, 169, 0.15)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
