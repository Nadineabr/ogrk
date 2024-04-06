import { useEffect, useCallback } from 'react';
import type { RefObject } from 'react';

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
) {
  const handleBodyClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current) {
        if (!ref.current.contains(event.target as HTMLElement)) {
          callback();
        }
      }
    },
    [ref, callback],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.body.addEventListener('click', handleBodyClick);
    });

    return () => {
      clearTimeout(timeoutId);
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [handleBodyClick]);
}
