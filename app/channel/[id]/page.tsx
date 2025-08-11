import React from 'react'

type ParamsProps = Promise<{ id: string[] }>;

const page = async (props: { params: ParamsProps }) => {
  const params = await props.params;

  return (
    <div>channel/[{params.id}]</div>
  )
}

export default page