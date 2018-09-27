import React from 'react'
import glamorous from 'glamorous'

const editUrl = 'https://github.com/Charterhouse/confluenza/blob/master'

const A = glamorous.a({
  fontFamily: 'Roboto Mono, monospace',
  fontWeight: '100',
  fontSize: '0.8rem',
  color: '#FF55BE',
  ':hover': {
    textDecoration: 'underline',
    color: '#FF55BE'
  }
})

const Wrapper = glamorous.div({
  paddingLeft: '3px'
})

export const EditFile = ({ fileAbsolutePath }) => {
  const match = fileAbsolutePath.match(/.*\/(src.*)$/) || fileAbsolutePath.match(/.*\/(.*)$/)
  if (match && match.length >= 1) {
    const fileRelativePath = match[1]
    return (
      <Wrapper>
        <A href={`${editUrl}/${fileRelativePath}`}>Edit this page</A>
      </Wrapper>
    )
  }
  return null
}
