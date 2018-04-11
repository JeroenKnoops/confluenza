import React from 'react'

const editUrl =
  'https://github.com/Charterhouse/confluenza/' +
  'blob/master/src/pages'

export const EditFile = ({ fileAbsolutePath }) => {
  const fileName = fileAbsolutePath.split('/').pop()
  return <div>
    <a href={`${editUrl}/${fileName}`}>Edit this page</a>
  </div>
}
