import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, onAddToCart }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ninos': return 'bg-bimbi-blue text-blue-800';
      case 'ninas': return 'bg-bimbi-purple text-purple-800';
      case 'mujeres': return 'bg-primary/20 text-primary-foreground';
      default: return 'bg-secondary';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'ninos': return 'Niños';
      case 'ninas': return 'Niñas';
      case 'mujeres': return 'Mujeres';
      default: return category;
    }
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-lg card-hover h-[420px] flex flex-col">
      <div className="relative overflow-hidden h-64">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge className={`${getCategoryColor(product.category)} badge-gradient`}>
            {getCategoryLabel(product.category)}
          </Badge>
        </div>
        {product.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="badge-gradient">
              Destacado
            </Badge>
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive" className="text-lg">
              Agotado
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 h-14">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2 h-10">{product.description}</p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-gradient">${product.price}</span>
          <div className="flex space-x-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border-2 border-black shadow-sm hover:scale-110 transition-transform"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs">+{product.colors.length - 3}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-x-2 mt-auto">
        <Button 
          variant="outline" 
          className="flex-1 hover-lift"
          onClick={() => onViewDetails(product)}
        >
          Ver Detalles
        </Button>
        <Button 
          className="flex-1 button-gradient"
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Agregar
        </Button>
      </CardFooter>
    </Card>
  );
};
