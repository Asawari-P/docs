module.exports = {
  title: 'Hypi Platform Documentation',
  tagline: 'Lowcode application development platform',
  url: 'https://docs.hypi.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hypi-universe', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Hypi',
      logo: {
        alt: 'Hypi Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/hypi-universe/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/authentication/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Support Forum',
              href: 'https://hypi.dev',
            },
            {
              label: 'Platform',
              href: 'https://hypi.app',
            },
            {
              label: 'Website',
              href: 'https://hypi.io',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hypi-universe/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hypi.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/hypi-universe/docs/edit/master/',
          path: "content",
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/hypi-universe/docs/edit/master/',
          path: "blog"
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
