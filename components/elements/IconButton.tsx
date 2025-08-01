import { ReactNode } from 'react';

const IconButton = ({ icon, onIconClick }: { icon: ReactNode; onIconClick?: () => void }) => {
  return <div onClick={onIconClick}>{icon}</div>
};

export default IconButton