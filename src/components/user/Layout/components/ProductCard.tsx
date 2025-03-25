import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from "@/components/user/context/CartContext";
import Image from "next/image";
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  const { addToCart  , addToWishlist} = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  const handleAddToWishlist = () => {
    addToWishlist({ id, name, price, image });
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
        <Button
          className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
          onClick={handleAddToWishlist}
        >
          <Heart size={20} />
        </Button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[#ff7f2a]">Rs. {price}</span>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-[#ff7f2a] text-white px-3 py-2 rounded-md hover:bg-[#ff9f5a] transition-colors"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
