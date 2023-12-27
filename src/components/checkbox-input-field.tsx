import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface CheckboxInput {
  text: string;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const CheckboxInputField = ({ text, inputProps }: CheckboxInput) => (
  <label className="flex gap-2">
    <input type="checkbox" {...inputProps} />
    {text}
  </label>
);
