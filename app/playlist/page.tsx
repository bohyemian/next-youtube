type searchParamsProps = Promise<{ [key: string]: string | string[] | undefined }>

const page = async (props: { searchParams: searchParamsProps }) => {
  const searchParams = await props.searchParams;

  return (
    <div>playlist {searchParams.list ?? 'searchParam 없음'}</div>
  )
}

export default page