import Image from "next/image"
import UserIcon from "./UserIcon"
import Logo from "../elements/Logo"
import Navigator from "../elements/Navigator"
import { cn } from './../../lib/utils';
import { FiSearch } from "react-icons/fi"
import { FaChromecast } from "react-icons/fa"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"

const HeaderDrawer = ({ children, triggerClass }: { children: React.ReactNode; triggerClass?: string }) => {
  return (
    <Drawer direction="left">
      <DrawerTrigger className={cn("flex gap-3", triggerClass)}>{children}</DrawerTrigger>
      <DrawerContent className="w-60 h-full">
        <Logo className="p-6" />
        <Navigator className="px-7" />
      </DrawerContent>
    </Drawer>
  )
}

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="relative">
      <div className="absolute w-full h-[400px] before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#0c0a09] before:z-10">
        <Image src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b" className="absolute opacity-30" aria-hidden="true" style={{ objectFit: "cover" }} fill alt="" />
      </div>
      <div className="flex flex-row items-center gap-4 sticky z-10 contents-padding">
        <span className="hidden lg:flex flex-row-reverse items-center gap-2 flex-1 px-4 py-2 bg-white/10 rounded-lg">
          <input type="text" className="flex-1 bg-transparent" />
          <FiSearch size={24} />
        </span>
        <HeaderDrawer triggerClass="mr-auto">
          <Logo className="lg:hidden" />
        </HeaderDrawer>
        <FaChromecast size={24} />
        <UserIcon />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </header>
  )
}

export default Header