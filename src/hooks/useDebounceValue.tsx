import { useState, useEffect } from 'react';

export const useDebounceValue = (value: string) => {
  const DELAY = 275;
  const [debounceValue, setDebounceValue] = useState(value);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, DELAY);
    
    return () => {
      clearTimeout(timeout);
    }
  }, [value]);
  
  return debounceValue;
};
