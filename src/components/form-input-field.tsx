import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface FormInputFieldProps {
  error?: boolean;
  width?: string;
}

type ComponentProps =
  | FormInputFieldProps &
      DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >;

export const FormInputField = ({
  width,
  error,
  ...inputProps
}: ComponentProps) => (
  <input
    className={`${
      width ?? 'w-full'
    }  bg-input py-3 px-4 border-2 hover:border-white transition ${
      error ? 'border-error' : 'border-input'
    } rounded-lg placeholder-white`}
    {...inputProps}
  />
);
