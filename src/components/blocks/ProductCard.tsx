import { Link } from 'react-router-dom';
import { StarRating } from '../ui/StarRating';

export interface Product {
  id: string;
  name: string;
  image: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.discount;

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden aspect-square mb-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-bold text-base lg:text-xl mb-2 group-hover:text-gray-600 transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-3 mb-2">
        <StarRating rating={product.rating} size="sm" />
        <span className="text-sm text-black/60">{product.rating}/5</span>
      </div>
      <div className="flex items-center gap-2.5">
        <span className="font-bold text-xl lg:text-2xl">${product.price}</span>
        {hasDiscount && (
          <>
            <span className="font-bold text-xl lg:text-2xl text-black/40 line-through">
              ${product.originalPrice}
            </span>
            <span className="bg-[#FF33331A] text-[#FF3333] text-xs font-medium px-3.5 py-1.5 rounded-full">
              -{product.discount}%
            </span>
          </>
        )}
      </div>
    </Link>
  );
}