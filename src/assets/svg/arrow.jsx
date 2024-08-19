import React, { forwardRef, memo } from 'react';

export const Arrow = memo(
  forwardRef((props, ref) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={13} height={20} fill="none" {...props} ref={ref}>
      <path stroke={'currentColor'} strokeWidth={3} d="m2 2 8.51 8.29L2 18.583" />
    </svg>
  )),
);
