import React from 'react'

type ChannenProps = {
  params: {
    id: string;
  }
}

const page = (props: ChannenProps) => {
  return (
    <div>channel/[{props.params.id}]</div>
  )
}

export default page