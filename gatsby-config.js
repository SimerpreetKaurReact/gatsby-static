/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */


module.exports = {
  siteMetadata:{
    title:"tutorial",
    description:"gatsby graphql tutorial",
    author:"@test",
    data:["item 1","item 2","item 3"],
    person:{name:"peter",age:"20"},

  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}