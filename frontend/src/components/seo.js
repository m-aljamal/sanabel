import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ lang, meta, title, children, location }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            arDescription
            enDescription
            trDescription
            siteUrl
            title
            image
            twitterUserName
          }
        }
      }
    `
  )

  const metaDescription =
    lang === "ar"
      ? site.siteMetadata.arDescription
      : lang === "en"
      ? site.siteMetadata.enDescription
      : site.siteMetadata.trDescription
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.image,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUserName,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: site.siteMetadata.image,
        },
        {
          name: `image`,
          content: site.siteMetadata.image,
        },
        {
          name: `keywords`,
          content: `alresala organization, alresala foundation, مؤسسة الرسالة, منظمة الرسالة , كلس , منظمات  `,
        },
        {
          name: `robots`,
          content: `index,follow`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `ar`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
