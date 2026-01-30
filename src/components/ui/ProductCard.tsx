import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 !== 0;

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="relative overflow-hidden rounded-2xl bg-neutral-100 mb-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="font-bold text-base mb-2 group-hover:underline">{product.name}</h3>

      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < fullStars
                  ? 'fill-yellow-400 text-yellow-400'
                  : i === fullStars && hasHalfStar
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-none text-neutral-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-neutral-600">{product.rating}/5</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-bold text-xl">${product.price}</span>
        {product.originalPrice && (
          <>
            <span className="text-neutral-400 line-through text-lg">
              ${product.originalPrice}
            </span>
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
              -{product.discount}%
            </span>
          </>
        )}
      </div>
    </Link>
  );
}
