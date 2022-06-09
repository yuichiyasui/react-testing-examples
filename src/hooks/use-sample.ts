import { useEffect, useState } from 'react';

export const useSample = (callback: () => void) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;
    callback();
  }, [isActive]);
  return { setIsActive };
};
