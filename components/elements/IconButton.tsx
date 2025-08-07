import { ReactNode } from 'react';

const IconButton = ({ icon, className, onIconClick }: { icon: ReactNode; className?: string; onIconClick?: () => void }) => {
  return <div className={className} onClick={onIconClick}>{icon}</div>
};

export default IconButton