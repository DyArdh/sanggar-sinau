import React, { forwardRef } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CustomSelect = forwardRef(({ name, options, placeholder, onValueChange }, ref) => (
  <Select ref={ref} onValueChange={onValueChange}>
    <SelectTrigger>
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {options.map((option, index) => (
        <SelectItem key={index} value={option}>
          {option}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
));

CustomSelect.displayName = 'CustomSelect';

export default CustomSelect;
