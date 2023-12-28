import { FormButton } from '@/components/form-button';

export const EmptyState = () => {
  return (
    <main className="flex flex-col justify-center items-center w-screen h-full p-13 prose">
      <h1>{'empty'}</h1>
      <FormButton>{'addNew'}</FormButton>
    </main>
  );
};
