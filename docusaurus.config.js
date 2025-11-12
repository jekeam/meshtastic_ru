// @ts-check

require("dotenv").config();
import remarkDefList from "remark-deflist";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Meshtastic",
  tagline:
    "Автономная децентрализованная ячеистая сеть с открытым исходным кодом, созданная для работы на доступных устройствах с низким энергопотреблением.",
  url: "https://meshcraft.ru",
  baseUrl: "/meshtastic/",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "design/web/favicon.ico",
  organizationName: "meshtastic",
  projectName: "meshtastic",
  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Meshtastic Logo",
        src: "design/logo/svg/Mesh_Logo_Black.svg",
        srcDark: "design/logo/svg/Mesh_Logo_White.svg",
      },
      items: [
        {
          label: "Блог",
          to: "blog",
        },
        {
          label: "Документация",
          to: "docs/introduction",
        },
        {
          label: "Загрузки",
          to: "downloads",
        },
        {
          label: "Об Meshtastic",
          position: "right",
          items: [
            {
              label: "Введение",
              to: "docs/introduction",
            },
            {
              label: "Быстрый старт",
              to: "docs/getting-started",
            },
            {
              label: "Разработка",
              to: "docs/contributing",
            },
            {
              label: "Закон",
              to: "docs/legal",
            },
            {
              label: "FAQs",
              to: "docs/faq",
            },
          ],
        },
        {
          href: "https://github.com/jekeam/meshtastic_ru",
          position: "right",
          className: "header-github-link", "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      copyright: `Рускоязычная версия сайта <a href="https://github.com/meshtastic/meshtastic">Meshtastic</a>`
    },
    algolia: {
      appId: "IG2GQB8L3V",
      apiKey: "2e4348812173ec7ea6f7879c7032bb21",
      indexName: "meshtastic",
      contextualSearch: true,
      searchPagePath: "search",
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    mermaid: {
      theme: {light: "base", dark: "base"},
      options: {
        themeVariables: {
          primaryColor: "#67EA94",
          primaryTextColor: "var(--tw-prose-headings)",
          primaryBorderColor: "#4D4D4D",
          lineColor: "#EAD667",
          secondaryColor: "#EA67BD",
          tertiaryColor: "#677CEA",
        },
      },
    },
    prism: {
      additionalLanguages: ["shell-session", "bash"],
    },
  },
  plugins: [
    () => {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  scripts: [
    ...(process.env.COOKIEYES_CLIENT_ID
      ? [
        {
          src: `https://cdn-cookieyes.com/client_data/${process.env.COOKIEYES_CLIENT_ID}/script.js`,
          async: true,
        },
      ]
      : []),
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {type: 'text/javascript'},
      innerHTML: `
        (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105185668', 'ym');    
        ym(105185668, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
      `,
    },
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/jekeam/meshtastic_ru/edit/master/",
          breadcrumbs: false,
          showLastUpdateAuthor: true,
          remarkPlugins: [remarkDefList],
        },
        blog: {
          blogTitle: "Meshtastic Блог",
          blogDescription:
            "Получите подробную информацию от разработчиков и сопровождающих, включая обновления и изменения проекта. Узнайте мнение сообщества об их проектах и идеях.",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  customFields: {
    API_URL: process.env.API_URL,
  },
  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
    localeConfigs: {
      ru: {
        label: "Русский",
        direction: "ltr",
        htmlLang: "ru-RU",
      },
    },
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  future: {
    experimental_faster: true,
  },
};

module.exports = config;
