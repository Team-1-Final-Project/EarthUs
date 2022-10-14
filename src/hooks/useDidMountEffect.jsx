import { useEffect, useRef } from 'react';

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);
  console.log('didMount', didMount);
  useEffect(() => {
    console.log('didMount', didMount);
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export default useDidMountEffect;
