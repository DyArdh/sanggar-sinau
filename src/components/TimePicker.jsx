import * as React from 'react';

import { cn } from '@/lib/utils';

const TimePickerInput = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-y-0 end-0 top-0 flex items-center pe-3.5">
        <svg
          className="h-4 w-4 text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <input
        type="time"
        className={cn(
          'block h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm leading-none ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});

TimePickerInput.displayName = 'TimePickerInput';

export { TimePickerInput };
