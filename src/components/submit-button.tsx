import { FormButton } from '@/components/form-button';
import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
  children: ReactNode;
}

export function SubmitButton({ children }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <FormButton type="submit" aria-disabled={pending} disabled={pending}>
      {children}
    </FormButton>
  );
}
