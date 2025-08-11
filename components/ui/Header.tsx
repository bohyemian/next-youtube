'use client'

import Image from "next/image"
import Logo from "@/components/elements/Logo"
import UserIcon from "@/components/ui/UserIcon"
import Navigator from "@/components/elements/Navigator"
import useUIStateStore, { defaultHeaderImage } from "@/app/hooks/useUIState"
import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from '@/lib/utils';
import { FiSearch } from "react-icons/fi"
import { FaChromecast } from "react-icons/fa"
import { Drawer, DrawerTitle, DrawerDescription, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"

const HeaderDrawer = ({ children, triggerClass }: { children: React.ReactNode; triggerClass?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className={cn("flex gap-3", triggerClass)}>{children}</DrawerTrigger>
      <DrawerContent className="w-60 h-full">
        <DrawerTitle className="sr-only">Side Menu</DrawerTitle>
        <DrawerDescription className="sr-only">menu, playlist</DrawerDescription>
        <Logo className="p-6" isInDrawer handleIconClick={() => setIsOpen(false)} />
        <Navigator className="px-7" />
      </DrawerContent>
    </Drawer>
  )
}

const Header = ({ children }: { children: ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLHRElement | null>(null);
  const headerImagesrc = useUIStateStore(s => s.headerImagesrc);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headerRef?.current?.scrollTop;

      setIsScrolled(scrollValue !== 0);
    }

    headerRef?.current?.addEventListener('scroll', handleScroll);

    return () => {
      headerRef?.current?.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header ref={headerRef} className="relative overflow-y-auto h-full">
      <div className="absolute w-full h-[400px] before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#0c0a09] before:z-10">
        <Image src={headerImagesrc || defaultHeaderImage} className="absolute opacity-30" aria-hidden="true" style={{ objectFit: "cover" }} fill alt="" />
      </div>
      <div className={cn("flex flex-row items-center gap-4 sticky top-0 z-50 contents-padding", isScrolled && "bg-[rgba(12,10,9,0.9)] transition-[background]")}>
        <span className="hidden lg:flex flex-row-reverse items-center gap-2 flex-1 max-w-[480px] px-4 py-2 bg-white/10 rounded-lg">
          <input type="text" className="flex-1 bg-transparent placeholder:text-sm placeholder:text-neutral-300" placeholder="노래, 앨범, 아티스트, 팟캐스트 검색" />
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