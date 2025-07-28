import React from 'react'

type searchParamsProps = Promise<{ [key: string]: string | [] | undefined }>

const page = async (props: { searchParams: searchParamsProps }) => {
  const searchParams = await props.searchParams;

  console.log(searchParams)
  return (
    <div>playlist </div>
  )
}

export default page