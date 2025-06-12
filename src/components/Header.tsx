import React, { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { CartDrawer } from './CartDrawer';

interface HeaderProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, onCategoryChange, selectedCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { itemCount } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const categories = [
    { id: 'all', label: 'Todo', color: 'bg-bimbi-pink' },
    { id: 'ninos', label: 'Niños', color: 'bg-bimbi-blue' },
    { id: 'ninas', label: 'Niñas', color: 'bg-bimbi-purple' },
    { id: 'mujeres', label: 'Mujeres', color: 'bg-bimbi-yellow' }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 glass-effect border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 hover-lift">
              <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <h1 className="text-2xl font-bold text-gradient">Bimbi</h1>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 glass-effect hover:border-primary/50 transition-colors"
                />
              </div>
            </form>

            {/* Cart Button */}
            <Button
              variant="outline"
              size="icon"
              className="relative hover-lift"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs badge-gradient">
                  {itemCount}
                </Badge>
              )}
            </Button>
          </div>

          {/* Categories */}
          <div className="flex space-x-2 mt-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category.id)}
                className={`${selectedCategory === category.id ? category.color : ''} hover-lift transition-all`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
