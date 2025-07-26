import React from 'react'

type PlaylistProps = {
  searchParams: {
    list: string
  }
}

const page = (props: PlaylistProps) => {
  return (
    <div>playlist {props.searchParams.list}</div>
  )
}

export default page