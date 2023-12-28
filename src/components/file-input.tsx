import { FiDownload } from 'react-icons/fi';

export const FileInput = () => (
  <div className="w-full h-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transition">
    <label
      className="flex justify-center w-full h-full px-11 py-13
                 transition 
                 border-2
                 border-white 
                 border-dashed 
                 rounded-md 
                 appearance-none
                 cursor-pointer 
                 hover:border-gray-400
                 focus:outline-none"
    >
      <div className="flex flex-col items-center justify-center">
        <FiDownload />
        <p>Drop an image here</p>
      </div>
      <input type="file" name="file_upload" className="hidden" />
    </label>
  </div>
);
