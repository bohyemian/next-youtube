import { ReactNode, ComponentProps } from 'react';

const IconButton = ({ type, icon, className, onIconClick }: ComponentProps<"button"> & { icon: ReactNode; className?: string; onIconClick?: () => void }) => {
  return <button type={type || "button"} className={className} onClick={onIconClick}>{icon}</button>
};

export default IconButton