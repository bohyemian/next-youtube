'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { FaMusic, FaRegCompass } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { cn } from '@/lib/utils';
import { FiPlus } from 'react-icons/fi';

const Navigator = () => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      { icon: <IoHome size={24} />, label: "HOME", isActive: pathname === "/", href: "/" },
      { icon: <FaRegCompass size={24} />, label: "둘러보기", isActive: pathname === "/explore", href: "/explore" },
      { icon: <FaMusic size={20} />, label: "보관함", isActive: pathname === "/library", href: "/library" },
    ]
  }, [pathname]);

  return (
    <div className="px-8">
      <span className="flex flex-col gap-y-4">
        {routes.map(route => {
          return (
            <Link href={route.href} key={route.label} className={cn("flex flex-row items-center gap-x-4 text-stone-500", route.isActive && "text-white")}>
              {route.icon}
              <span className="text-md">{route.label}</span>
            </Link>
          )
        })}
      </span>
      <hr className="my-6 border-t" />
      <button type="button" className="flex items-center justify-center gap-1 w-full px-2 py-1.5 bg-neutral-700 text-sm rounded-2xl">
        <FiPlus size={20} />
        새 재생목록
      </button>
    </div>
  )
}

export default Navigator