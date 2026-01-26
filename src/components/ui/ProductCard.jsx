import { Link } from 'react-router-dom'
import Rating from './Rating'

export default function ProductCard({ product }) {
  const { id, name, image, price, originalPrice, discount, rating } = product

  return (
    <Link to={`/product/${id}`} className="group block">
      <div className="aspect-square bg-neutral-100 rounded-xl overflow-hidden mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <h3 className="font-bold text-base mb-2 line-clamp-1">
        {name}
      </h3>

      <div className="flex items-center gap-2 mb-2">
        <Rating rating={rating} size="sm" />
        <span className="text-sm text-neutral-600">{rating}/5</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-bold text-lg">${price}</span>
        {originalPrice && (
          <>
            <span className="text-lg text-neutral-400 line-through">${originalPrice}</span>
            {discount && (
              <span className="px-3 py-1 bg-red-500/10 text-red-500 text-xs font-medium rounded-full">
                -{discount}%
              </span>
            )}
          </>
        )}
      </div>
    </Link>
  )
}
