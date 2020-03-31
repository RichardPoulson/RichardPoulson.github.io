import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 * 
 * React Hooks: "They let you use state [e.g. count] and other React features without writing a class."
 * - const [state, setCount] = useState(initialCount);
 *
 * For more information, see the docs:
 * - gatsby-image: https://gatsby.dev/gatsby-image
 * - useStaticQuery: https://www.gatsbyjs.org/docs/use-static-query/
 * - 
 */

const Image = () => {

  /**
   * Since we're using Template Literals ``, we can use embedded expressions like ${expression}.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   */
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
