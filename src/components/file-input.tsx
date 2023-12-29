import Image from 'next/image';
import { ChangeEventHandler, useState } from 'react';
import { FiDownload } from 'react-icons/fi';

interface FileInputProps {
  currentImage?: string;
}

export const FileInput = ({ currentImage }: FileInputProps) => {
  const [image, setImage] = useState<string | null>(currentImage || null);

  const onImageChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="w-full h-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transition">
      <label
        className={
          !image
            ? 'flex justify-center w-full h-full px-11 py-13 transition border-2 border-white  border-dashed  rounded-md  appearance-none cursor-pointer  hover:border-gray-400 focus:outline-none'
            : ''
        }
      >
        {image ? (
          <div className="prose">
            <Image src={image} alt="Uploaded Image" width={700} height={700} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <FiDownload />
            <p>Drop an image here</p>
          </div>
        )}
        <input
          type="file"
          name="file_upload"
          className="hidden"
          onChange={onImageChange}
        />
      </label>
    </div>
  );
};
