/**
 * @author Richard Poulson <contact@richardpoulson.com>
 * @version 0.1.0
 * @see {@link https://github.com/gatsbyjs/gatsby-starter-default/blob/master/src/components/seo.js original file}
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

/**
 * give your users and these websites additional data to embed your website with more data 
 * @see {@link https://www.gatsbyjs.org/docs/add-seo-component/ Adding an SEO Component | Gatsby}
 * @see {@link https://www.gatsbyjs.org/docs/use-static-query/ Querying Data in Components with the useStaticQuery Hook | Gatsby}
 * @see {@link https://github.com/nfl/react-helmet#readme React Helmet readme | GitHub}
 * @see {@link https://ogp.me/#metadata Basic Metadata | The Open Graph protocol}
 */
function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
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
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
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
