import Image from "next/image";
import type { FC } from "react";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  range: string;
}

const ProductCard: FC<ProductCardProps> = ({ image, range, title }) => {
  return (
    <div className="w-full h-[300px] max-w-[250px]  flex flex-col gap-y-4">
      <img
        src={image}
        alt="product image"
        className="object-cover w-full h-[250px] border rounded-2xl"
      />
      <span className="text-xl font-bold text-start">{title}</span>
      <Badge className="w-fit">{range}</Badge>
    </div>
  );
};

export default ProductCard;
