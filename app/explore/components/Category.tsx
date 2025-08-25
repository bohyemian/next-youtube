import { TiChartLine } from 'react-icons/ti'
import { RiMusicAiFill } from 'react-icons/ri'
import { PiSmileyMeltingFill } from 'react-icons/pi'

const CategoryMenu = ({
  label,
  icon,
}: {
  label: string
  icon: React.ReactNode
}) => {
  return (
    <button
      type="button"
      className="flex items-center gap-2 py-2 px-4 bg-neutral-700 text-sm rounded-md hover:bg-neutral-800 transition"
    >
      {icon}
      {label}
    </button>
  )
}

const Category = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <CategoryMenu
        label="최신음악"
        icon={<RiMusicAiFill size={20} color="#aaa" />}
      />
      <CategoryMenu
        label="차트"
        icon={<TiChartLine size={20} color="#aaa" />}
      />
      <CategoryMenu
        label="분위기 및 장르"
        icon={<PiSmileyMeltingFill size={20} color="#aaa" />}
      />
    </div>
  )
}

export default Category
