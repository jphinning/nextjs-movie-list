import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export const FormInputField = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => <input className="bg-input rounded-lg p-2" {...props} />;
