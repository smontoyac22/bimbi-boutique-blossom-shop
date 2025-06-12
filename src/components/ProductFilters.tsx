import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

interface FilterOptions {
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
  inStock: boolean;
}

interface ProductFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onClearFilters: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFiltersChange,
  onClearFilters
}) => {
  const availableSizes = ['2', '4', '6', '8', '10', '12', 'XS', 'S', 'M', 'L', 'XL'];
  const availableColors = ['Blanco', 'Negro', 'Rosa', 'Azul', 'Verde', 'Rojo', 'Amarillo', 'Morado'];

  const handleSizeChange = (size: string, checked: boolean) => {
    const newSizes = checked 
      ? [...filters.sizes, size]
      : filters.sizes.filter(s => s !== size);
    
    onFiltersChange({ ...filters, sizes: newSizes });
  };

  const handleColorChange = (color: string, checked: boolean) => {
    const newColors = checked
      ? [...filters.colors, color]
      : filters.colors.filter(c => c !== color);
    
    onFiltersChange({ ...filters, colors: newColors });
  };

  const handlePriceChange = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: [value[0], value[1]] });
  };

  const hasActiveFilters = filters.sizes.length > 0 || 
                          filters.colors.length > 0 || 
                          filters.priceRange[0] > 0 || 
                          filters.priceRange[1] < 100 ||
                          filters.inStock;

  return (
    <Card className="sticky top-24 glass-effect">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-gradient">Filtros</CardTitle>
          {hasActiveFilters && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClearFilters}
              className="text-muted-foreground hover:text-foreground hover-lift"
            >
              Limpiar
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Stock Filter */}
        <div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="inStock"
              checked={filters.inStock}
              onCheckedChange={(checked) => 
                onFiltersChange({ ...filters, inStock: !!checked })
              }
              className="hover-lift"
            />
            <label htmlFor="inStock" className="text-sm font-medium">
              Solo productos en stock
            </label>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="font-medium mb-3 text-gradient">Rango de Precio</h4>
          <div className="px-2">
            <Slider
              value={filters.priceRange}
              onValueChange={handlePriceChange}
              max={100}
              min={0}
              step={5}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h4 className="font-medium mb-3 text-gradient">Tallas</h4>
          <div className="grid grid-cols-3 gap-2">
            {availableSizes.map(size => (
              <div key={size} className="flex items-center space-x-2">
                <Checkbox
                  id={`size-${size}`}
                  checked={filters.sizes.includes(size)}
                  onCheckedChange={(checked) => handleSizeChange(size, !!checked)}
                  className="hover-lift"
                />
                <label htmlFor={`size-${size}`} className="text-sm">
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div>
          <h4 className="font-medium mb-3 text-gradient">Colores</h4>
          <div className="space-y-2">
            {availableColors.map(color => (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox
                  id={`color-${color}`}
                  checked={filters.colors.includes(color)}
                  onCheckedChange={(checked) => handleColorChange(color, !!checked)}
                  className="hover-lift"
                />
                <label htmlFor={`color-${color}`} className="text-sm">
                  {color}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Active Filters Summary */}
        {hasActiveFilters && (
          <div>
            <h4 className="font-medium mb-3 text-gradient">Filtros Activos</h4>
            <div className="flex flex-wrap gap-1">
              {filters.sizes.map(size => (
                <Badge key={size} variant="secondary" className="text-xs badge-gradient">
                  Talla {size}
                </Badge>
              ))}
              {filters.colors.map(color => (
                <Badge key={color} variant="secondary" className="text-xs badge-gradient">
                  {color}
                </Badge>
              ))}
              {filters.inStock && (
                <Badge variant="secondary" className="text-xs badge-gradient">
                  En stock
                </Badge>
              )}
              {(filters.priceRange[0] > 0 || filters.priceRange[1] < 100) && (
                <Badge variant="secondary" className="text-xs badge-gradient">
                  ${filters.priceRange[0]}-${filters.priceRange[1]}
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
