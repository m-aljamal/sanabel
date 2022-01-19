require("dotenv").config({ path: ".env" })
module.exports = {
  siteMetadata: {
    title: `Sanabel Al Amal Foundation is a non-governmental, non-profit, non-political`,
    arDescription: `
    هــي منظمــة إنســانية، غيــر ربحيــة وغيــر سياســية، تعنــى بالتعليــم ورعايــة الأيتــام، بالإضافــة إلــى كفالــة العوائــل المهجــرة والفقــراء، وتقديــم المســاعدات الطبيــة والإغاثية للأسر المحتاجة


    `,
    enDescription: `Sanabel Al Amal Foundation is a non-governmental, non-profit, non-political`,
    trDescription: `Sanabel Al Amal derneği, insani sivil bir dernektir. Kâr amacı gütmeyen, siyasetten bağımsız bir kuruluştur.`,
    author: `mohammadjamol@gmail.com`,
    twitterUserName: `@Sanabelamalorg`,
    siteUrl: `https://www.sanabelalamal.org`,
    image:
      "https://res.cloudinary.com/mohammadjamal/image/upload/v1601918924/zva02fyq8gydsbp5i46a.webp",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/icons/logo.webp`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `hdeakz1f`,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: "ar",
        langKeyForNull: "ar",
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
    "gatsby-plugin-postcss",
  ],
}
