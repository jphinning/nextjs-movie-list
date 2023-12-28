import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface CheckboxInput {
  text: string;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

type ComponentProps =
  | CheckboxInput &
      DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >;

export const CheckboxInputField = ({ text, ...inputProps }: ComponentProps) => (
  <label className="flex gap-3 items-center">
    <input
      className="relative peer shrink-0 appearance-none bg-input w-5 h-5 rounded checked:bg-bg checked:border-2"
      type="checkbox"
      {...inputProps}
    />
    <p>{text}</p>
    <svg
      className="
      absolute 
      w-5 h-5
      hidden peer-checked:block 
      pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </label>
);
