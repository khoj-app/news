// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const organizationName = 'khoj-app';
const projectName = 'news';

/** @type {import('@docusaurus/types').Config} */
const config = {
    markdown: {
        mermaid: true,
    },
    title: 'Khoj',
    tagline: 'News',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://news.khoj.app',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName, // Usually your GitHub org/user name.
    projectName, // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'hi'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                gtag: {
                    trackingID: 'G-PJQWH3EXTC',
                },
                docs: false,
                blog: {
                    routeBasePath: '/',
                    showReadingTime: false,
                    blogSidebarTitle: 'Recent News',
                    blogSidebarCount: 50,
                    feedOptions: {
                        type: 'all',
                        copyright: `Copyright © ${new Date().getFullYear()} Khoj - Shah Nanji Nagsi`,
                        createFeedItems: async (params) => {
                            const {blogPosts, defaultCreateFeedItems, ...rest} = params;
                            const blogPostImages = blogPosts.map(post => {
                                return {
                                    id: post.id,
                                    image: post.metadata.frontMatter.image,
                                }
                            });
                            console.log(blogPostImages);
                            return (await defaultCreateFeedItems({
                                // keep only the 10 most recent blog posts in the feed
                                blogPosts: blogPosts
                                    .filter(item => item.metadata.frontMatter.image !== undefined && item.metadata.frontMatter.image.length > 0)
                                    .filter((item, index) => index < 10),
                                ...rest,
                            })).map(item => {
                                return {
                                    ...item,
                                    image: blogPostImages.filter(post => item.id.indexOf(post.id) > 0)[0]?.image,
                                }
                            });
                        }
                    }
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    /** editUrl:
                     `https://github.com/${organizationName}/${projectName}/tree/main/`, */
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/social-banner.jpg',
            navbar: {
                title: 'News - Khoj',
                logo: {
                    alt: 'Khoj',
                    src: 'img/logo.png',
                    /** srcDark: '', // TODO: Add your dark mode logo here */
                },
                items: [
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    }
                ],
            },
            footer: {
                style: 'dark',
                copyright: `Copyright © ${new Date().getFullYear()} Khoj - Shah Nanji Nagsi`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
