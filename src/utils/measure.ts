import React, { useState, useLayoutEffect } from 'react';

export default (divRef: React.RefObject<HTMLDivElement>): DOMRect | undefined => {
  const [rect, setRect] = useState<DOMRect>();
  useLayoutEffect(() => {
    setRect(divRef.current?.getBoundingClientRect());
  }, [divRef]);

  return rect;
};
