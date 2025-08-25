'use client'

import useUIStateStore from '@/store/useUIStore'
import { homeCategoryList } from '@/lib/dummyData'
import { cn } from '@/lib/utils'

const Category = () => {
  const homeCategory = useUIStateStore((s) => s.homeCategory)
  const setHomeCategory = useUIStateStore((s) => s.setHomeCategory)
  const setHeaderImageSrc = useUIStateStore((s) => s.setHeaderImageSrc)

  const onClickCategory = ({ label, src }: { label: string; src: string }) => {
    if (homeCategory === label) {
      setHomeCategory('')
      setHeaderImageSrc('')
    } else {
      setHomeCategory(label)
      setHeaderImageSrc(src)
    }
  }

  return (
    <ul className="flex flex-row overflow-x-auto gap-4 max-w-full">
      {homeCategoryList.map((item) => {
        return (
          <li
            key={item.label}
            onClick={() => onClickCategory(item)}
            className={cn(
              'flex items-center min-w-fit px-3 py-1.5 borader border-transparent text-xs rounded-lg bg-slate-300/10 hover:bg-slate-300/30 cursor-pointer',
              homeCategory === item.label &&
                'bg-white text-neutral-900 hover:bg-white'
            )}
          >
            {item.label}
          </li>
        )
      })}
    </ul>
  )
}

export default Category
