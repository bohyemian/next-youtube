import { ReactNode } from 'react'
import Logo from '../elements/Logo'
import Navigator from '../elements/Navigator'

const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-row h-full">
      <nav className="hidden lg:block w-60 border-r border-neutral-600">
        <h1><Logo className="p-6" /></h1>
        <Navigator className="hidden" />
      </nav>
      {children}
    </section>
  )
}

export default Sidebar