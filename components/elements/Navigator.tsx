'use client';

import Link from 'next/link';
import PlayListNav from './PlayListNav';
import { ComponentProps, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { FaMusic, FaRegCompass } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { cn } from '@/lib/utils';
import { FiPlus } from 'react-icons/fi';
import { dummyPlaylistArray } from '@/lib/dummyData';

const Navigator = (props: ComponentProps<"div">) => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      { icon: <IoHome size={22} />, label: "HOME", isActive: pathname === "/", href: "/" },
      { icon: <FaRegCompass size={22} />, label: "둘러보기", isActive: pathname === "/explore", href: "/explore" },
      { icon: <FaMusic size={22} />, label: "보관함", isActive: pathname === "/library", href: "/library" },
    ]
  }, [pathname]);

  return (
    <div className="px-7">
      <span className="flex flex-col gap-y-4">
        {routes.map(route => {
          return (
            <Link href={route.href} key={route.label} className={cn("flex flex-row items-center gap-x-4 text-neutral-500", route.isActive && "text-white")}>
              {route.icon}
              <span className="text-md hover:underline">{route.label}</span>
            </Link>
          )
        })}
      </span>
      <hr className="my-6 border-t" />
      <button type="button" className="flex items-center justify-center gap-1 w-full px-2 py-1.5 bg-neutral-700 text-sm rounded-2xl">
        <FiPlus size={20} />새 재생목록
      </button>
      <ul className="mt-6">
        {dummyPlaylistArray.map(list => {
          return <PlayListNav key={list.id} playlist={list} />
        })}
      </ul>
    </div>
  )
}

export default Navigator