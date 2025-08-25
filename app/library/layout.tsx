import Header from '@/components/Header'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1">
      <Header>{children}</Header>
    </div>
  )
}

export default layout
