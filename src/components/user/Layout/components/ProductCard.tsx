import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from "@/components/user/context/CartContext";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { useWishlist } from '../../context/wishlistContext';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  discount: string;
  description: string;
}

export function ProductCard({ id, name, price, image, description , discount }: ProductCardProps) {
  const { addToCart, } = useCart();
  const { addToWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart({
      id, name, price, image,
      discount,
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist({ id, name, price, image , discount });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <Image
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
          width={800}
          height={400}
        />
        <div className="absolute top-4 left-4  hover:bg-orange-300 text-black p-2 rounded-lg" >
          {discount}
        </div>
        <Button
          className="absolute top-4 right-4 bg-transparent hover:bg-orange-300 text-black px-4 py-2 rounded-lg"
          onClick={handleAddToWishlist}
        >
          <Heart size={20} />
        </Button>
      </div>

      <div className="p-4">
 
        <h3 className="mt-2 text-center font-semibold min-h-[48px] line-clamp-2 overflow-hidden">{name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className=" bg-whit hover:bg-orange-300 px-1 py-1 rounded-md      text-sm font-bold text-[#ff7f2a]">Rs. {price}</span>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-md hover:bg-orange-300 transition-colors"
          >
            <ShoppingCart size={20} />
          
          </button>
        </div>
      </div>
    </div>
  );
}
