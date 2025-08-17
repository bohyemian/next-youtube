'use client'

import { ReactNode } from 'react'
import Logo from './elements/Logo'
import Navigator from './elements/Navigator'
import usePlayerStore from '@/store/usePlayerStore'
import { cn } from '@/lib/utils'

const Sidebar = ({ children }: { children: ReactNode }) => {
  const isVisiblePlayer = usePlayerStore(s => s.isVisiblePlayer);

  return (
    <section className={cn(isVisiblePlayer && "pb-16", "flex flex-row h-full")}>
      <nav className="hidden lg:block overflow-y-auto w-60 border-r flex-shrink-0">
        <h1><Logo className="p-6" /></h1>
        <Navigator className="hidden" />
      </nav>
      {children}
    </section>
  )
}

export default Sidebar