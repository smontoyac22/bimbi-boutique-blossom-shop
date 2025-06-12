import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast({
        title: "Selección incompleta",
        description: "Por favor selecciona talla y color antes de agregar al carrito.",
        variant: "destructive",
      });
      return;
    }

    addToCart(product, selectedSize, selectedColor, quantity);
    toast({
      title: "¡Producto agregado!",
      description: `${product.name} se agregó al carrito.`,
    });
    onClose();
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-effect bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gradient">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg hover-lift"
            />
            <div className="absolute top-4 left-4">
              <Badge className="badge-gradient">
                {getCategoryLabel(product.category)}
              </Badge>
            </div>
            {product.featured && (
              <div className="absolute top-4 right-4">
                <Badge className="badge-gradient">
                  Destacado
                </Badge>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-2">${product.price}</h2>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Talla</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="hover-lift bg-white">
                  <SelectValue placeholder="Selecciona una talla" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size} className="hover:bg-gray-100">
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Color</label>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger className="hover-lift bg-white">
                  <SelectValue placeholder="Selecciona un color" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {product.colors.map((color) => (
                    <SelectItem key={color} value={color} className="hover:bg-gray-100">
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-2">Cantidad</label>
              <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                <SelectTrigger className="w-24 hover-lift bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()} className="hover:bg-gray-100">
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Stock Status */}
            <div>
              {product.inStock ? (
                <Badge className="badge-gradient">En Stock</Badge>
              ) : (
                <Badge variant="destructive">Agotado</Badge>
              )}
            </div>

            {/* Add to Cart Button */}
            <Button
              className="w-full button-gradient h-12 text-lg"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Agregar al Carrito
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
