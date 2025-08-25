'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { FaCaretDown } from 'react-icons/fa'

const Category = () => {
  const libraryCategory = ['재생목록', '팟캐스트', '노래', '앨범']
  const [position, setPosition] = useState('option1')

  return (
    <div className="flex justify-between">
      <ul className="flex flex-row overflow-x-auto gap-4 max-w-full">
        {libraryCategory.map((item) => (
          <li
            key={item}
            className="flex items-center min-w-fit px-3 py-1.5 borader border-transparent text-xs rounded-lg bg-slate-300/10 hover:bg-slate-300/30 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="px-4 py-1.5 border-transparent bg-slate-300/10 text-xs rounded-3xl hover:bg-slate-300/15"
          >
            최근 활동
            <FaCaretDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52 bg-slate-300/10">
          <DropdownMenuLabel>정렬 기준</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="option1">
              최근 활동
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option2">
              최근에 저장됨
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option3">
              최근 재생한 음악
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Category
