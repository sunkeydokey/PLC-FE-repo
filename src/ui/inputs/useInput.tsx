import { useState, useCallback } from 'react';

export const useInput = (
  initialInput: string,
): [
  string,
  (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
] => {
  const [input, setInput] = useState(initialInput);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setInput(event.target.value);
    },
    [input],
  );

  return [input, handleChange];
};
