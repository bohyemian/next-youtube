'use client';

import Image from 'next/image';
import IconButton from './IconButton';
import { useRouter } from 'next/navigation';
import { FiMenu } from 'react-icons/fi';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  const { push } = useRouter();

  const handleLogoClick = () => {
    push("/");
  }

  const handleMenuClick = () => {
  }

  return (
    <div className={cn("flex flex-row gap-3", className)}>
      <IconButton icon={<FiMenu size={36} className="p-1 rounded-full transition-[background] hover:bg-slate-500/40 hover:cursor-pointer" onClick={handleMenuClick} />} />
      <Image src="/main-logo.svg" width={100} height={10} alt="logo" className="cursor-pointer" onClick={handleLogoClick} />
    </div>
  )
};

export default Logo;