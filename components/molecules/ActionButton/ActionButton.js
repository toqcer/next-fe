import { useState } from 'react';
import { Tooltip } from '@components/molecules';

const ActionButton = ({ className = '', Icon, text = '', onClick }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <button
      className={`py-1 px-3 ${className} text-white relative`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={onClick}
    >
      {Icon}
      <Tooltip text={text} isShown={isShown} />
    </button>
  );
};

export default ActionButton;
