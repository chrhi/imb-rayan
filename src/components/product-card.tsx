import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  range: string;
  id: string;
}

const ProductCard: FC<ProductCardProps> = ({ image, range, title, id }) => {
  return (
    <div className=" h-[350px] w-full sm:w-[250px] flex flex-col gap-y-4">
      <div className="relative w-full h-[250px]  border aspect-square  rounded-lg">
        <Image
          src={image}
          alt="product image"
          className="object-cover  border rounded-lg w-full h-full "
          fill
        />
      </div>
      <Link href={`/products/${id}`}>
        <span className="text-lg text-[#5B5B5B]  font-bold text-start hover:text-blue-500 hover:underline transition-all">
          {title}
        </span>
      </Link>
    </div>
  );
};

export default ProductCard;
