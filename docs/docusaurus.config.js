module.exports = {
  title: 'Transloco Angular i18n',
  tagline: '🚀 The internationalization (i18n) library for Angular 😍',
  baseUrl: '/transloco/',
  url: 'https://ngneat.github.io',
  favicon: 'img/favicon.ico',
  organizationName: 'ngneat',
  projectName: 'transloco',
  themeConfig: {
    image: 'img/large-logo.png',
    algolia: {
      appId: 'BH4D9OD16A',
      apiKey: '0fe261e8a7d089862d9a959da892561f',
      indexName: 'transloco'
    },
    navbar: {
      title: 'Transloco',
      logo: {
        alt: 'Transloco',
        src: 'img/logo.png',
        srcDark: 'img/logo-white.png'
      },
      items: [
        {
          to: 'docs/installation',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
          className: 'first-nav-element'
        },
        {
          to: 'videoGuides',
          activeBasePath: 'videoGuides',
          label: 'Video Guides',
          position: 'left'
        },
        {
          to: 'sampleApp',
          activeBasePath: 'sampleApp',
          label: 'Sample App',
          position: 'left'
        },
        {
          href: 'https://stackblitz.com/edit/ngneat-transloco',
          label: 'Playground',
          position: 'left',
          className: 'header-playground-link'
        },
        {
          href: 'https://gitter.im/ngneat-transloco/lobby',
          label: ' ',
          position: 'right',
          className: 'header-icon-link header-gitter-link'
        },
        {
          href: 'https://github.com/ngneat/transloco/',
          label: ' ',
          position: 'right',
          className: 'header-icon-link header-github-link'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/installation'
            },
            {
              label: 'Translation',
              to: 'docs/translation-in-the-template'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/transloco'
            },
            {
              label: 'FAQ',
              to: 'docs/faq'
            }
          ]
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Gitter',
              href: 'https://gitter.im/ngneat-transloco/lobby?source=orgpage'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ngneat/transloco/'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/NetanelBasal'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Transloco, Inc. Built with Docusaurus.`
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwlLight'),
      darkTheme: require('prism-react-renderer/themes/nightOwl')
    },
    sidebarCollapsible: true
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ngneat/transloco/edit/master/docs'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};
