import { forwardRef } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CustomSelect = forwardRef(({ id, name, options, placeholder, onChange, initialData }, ref) => (
  <Select id={id} name={name} ref={ref} onValueChange={onChange} defaultValue={initialData}>
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
