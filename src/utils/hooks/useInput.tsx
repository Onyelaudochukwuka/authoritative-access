import { ChangeEvent, useState } from 'react';

export type UseInput = [
  string,
  (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  () => void,
];
// eslint-disable-next-line
const useInput = <T,>(initial: string): UseInput => {

  const [value, setValue] = useState<string>(initial);
  return [
    value,
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setValue(e.target.value),
    () => setValue(initial),
  ];
};

export default useInput;
