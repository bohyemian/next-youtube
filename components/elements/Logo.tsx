'use client';

import Image from 'next/image';
import IconButton from '@/components/elements/IconButton';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { FiMenu } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io';

type LogoProps = {
  isInDrawer?: boolean;
  className?: string;
  handleIconClick?: () => void;
}

const Logo = ({ isInDrawer = false, className, handleIconClick }: LogoProps) => {
  const { push } = useRouter();

  const handleLogoClick = () => {
    push("/");
  }

  return (
    <div className={cn("flex flex-row items-center gap-3", className)}>
      <IconButton onIconClick={handleIconClick} icon={
        isInDrawer ?
          <IoIosClose size={36} className="p-1 rounded-full transition-[background] hover:bg-slate-500/40 hover:cursor-pointer" /> :
          <FiMenu size={36} className="lg:hidden p-2 rounded-full transition-[background] hover:bg-slate-500/40 hover:cursor-pointer" />
      } />
      <Image src="/main-logo.svg" width={100} height={30} alt="logo" className="cursor-pointer" onClick={handleLogoClick} />
    </div>
  )
};

export default Logo;