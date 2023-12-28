import { FormInputField } from '@/components/form-input-field';
import { ButtonType, FormButton } from '@/components/form-button';
import { FileInput } from '@/components/file-input';

export default async function EditMovies() {
  return (
    <main className="w-screen h-screen prose px-12 py-11">
      <div className="mb-12">
        <h2>Edit</h2>
      </div>

      <div className="flex gap-13 h-[60%] w-[80%]">
        <div className="w-full h-full">
          <FileInput />
        </div>

        <div className="flex flex-col gap-6 w-[70%]">
          <FormInputField placeholder="Title" />
          <FormInputField placeholder="Publishing year" width="w-[70%]" />

          <div className="flex gap-5 justify-between mt-10">
            <FormButton buttonStyle={ButtonType.ghost}>Cancel</FormButton>
            <FormButton>Submit</FormButton>
          </div>
        </div>
      </div>
    </main>
  );
}
