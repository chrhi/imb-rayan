import { Plus } from "lucide-react";
import type { Dispatch, FC, SetStateAction } from "react";

interface ImageUploaderProps {
  setImage: Dispatch<SetStateAction<string | null>>;
  image: string;
}

const ImageUploader: FC<ImageUploaderProps> = ({ image, setImage }) => {
  return (
    <div className="w-full h-[100px] bg-muted flex items-center justify-center cursor-default rounded-2xl ">
      <Plus />
    </div>
  );
};

export default ImageUploader;
