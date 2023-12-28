import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export enum ButtonType {
  main = 'main',
  ghost = 'ghost',
}

interface FormButtonProps {
  children: ReactNode;
  buttonStyle?: ButtonType;
}

type ComponentProps =
  | FormButtonProps &
      DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >;

export const FormButton = ({
  children,
  buttonStyle = ButtonType.main,
  ...buttonProps
}: ComponentProps) =>
  buttonStyle === ButtonType.main ? (
    <button
      className="bg-primary rounded-lg p-4 w-full  hover:bg-white/20 transition"
      {...buttonProps}
    >
      <b>{children}</b>
    </button>
  ) : (
    <button
      className="border-2 border-white bg-transparent rounded-lg p-4 w-full hover:bg-white/20 transition"
      {...buttonProps}
    >
      <b>{children}</b>
    </button>
  );
