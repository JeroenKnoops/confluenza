import React from 'react'
import Helmet from 'react-helmet'
import { EditFile } from '../components/Editing'
import glamorous from 'glamorous'
import graphql from 'graphql'

const Template = ({ data: { doc } }) => {
  const { html, fileAbsolutePath, frontmatter: { title } } = doc
  return (
    <div>
      <Helmet title={title} />
      <EditFile fileAbsolutePath={fileAbsolutePath} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const pageQuery = graphql`
  query MarkdownByPath($path: String!) {
    doc: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      fileAbsolutePath
      frontmatter {
        title
      }
    }
  }
`

export default Template
