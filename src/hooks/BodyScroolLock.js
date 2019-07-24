import { useLayoutEffect } from 'react';

function useLockBodyScroll() {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';


    return () => {
      document.body.style.overflow = '';
    };
    // return function cleanup() {
    //   document.body.style.overflow = '';
    // }
  }, []);
}

export { useLockBodyScroll };