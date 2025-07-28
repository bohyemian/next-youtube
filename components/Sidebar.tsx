import { ReactNode } from 'react'
import Logo from './elements/Logo'
import Navigator from './elements/Navigator'

const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-row h-full">
      <nav className="w-60 border-r border-neutral-600">
        <h1 className="flex items-center gap-x-3 p-6">
          <Logo />
        </h1>
        <Navigator />
      </nav>
      {children}
    </section>
  )
}

export default Sidebar