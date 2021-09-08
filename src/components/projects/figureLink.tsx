import * as React from 'react';

type FigureProps = {
  link: string
  children:
  | React.ReactChild
  | React.ReactChild[]
}

export default function FigureLink({ link, children }: FigureProps) {
  return (
    <a href={link} target="_blank">
      {children}
    </a>
  )
}