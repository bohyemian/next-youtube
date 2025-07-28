'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { LiaHamburgerSolid } from 'react-icons/lia';
import IconButton from './IconButton';

const Logo = () => {
  const { push } = useRouter();

  const handleLogoClick = () => {
    push("/");
  }

  const handleMenuClick = () => {
  }

  return (
    <>
      <IconButton icon={<LiaHamburgerSolid size={40} className="p-1 rounded-full transition-[background] hover:bg-slate-500/40 hover:cursor-pointer" onClick={handleMenuClick} />} />
      <Image src="/main-logo.svg" width={100} height={10} alt="logo" className="cursor-pointer" onClick={handleLogoClick} />
    </>
  )
};

export default Logo;