
import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProductCard } from '@/components/ProductCard';
import { ProductDetail } from '@/components/ProductDetail';
import { ProductFilters } from '@/components/ProductFilters';
import { CartProvider } from '@/context/CartContext';
import { products } from '@/data/products';
import { Product } from '@/types/product';

interface FilterOptions {
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
  inStock: boolean;
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showHero, setShowHero] = useState(true);
  const [filters, setFilters] = useState<FilterOptions>({
    sizes: [],
    colors: [],
    priceRange: [0, 100],
    inStock: false
  });

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !product.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Stock filter
      if (filters.inStock && !product.inStock) {
        return false;
      }

      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Size filter
      if (filters.sizes.length > 0 && !filters.sizes.some(size => product.sizes.includes(size))) {
        return false;
      }

      // Color filter
      if (filters.colors.length > 0 && !filters.colors.some(color => product.colors.includes(color))) {
        return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, filters]);

  const handleShopNow = () => {
    setShowHero(false);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCartFromCard = (product: Product) => {
    setSelectedProduct(product);
  };

  const clearFilters = () => {
    setFilters({
      sizes: [],
      colors: [],
      priceRange: [0, 100],
      inStock: false
    });
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header 
          onSearch={setSearchQuery}
          onCategoryChange={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        
        {showHero && (
          <HeroSection onShopNow={handleShopNow} />
        )}

        <main className="container mx-auto px-4 py-8" id="products">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <ProductFilters
                filters={filters}
                onFiltersChange={setFilters}
                onClearFilters={clearFilters}
              />
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">
                    {selectedCategory === 'all' ? 'Todos los Productos' : 
                     selectedCategory === 'ninos' ? 'Para Niños' :
                     selectedCategory === 'ninas' ? 'Para Niñas' : 'Para Mujeres'}
                  </h2>
                  <p className="text-muted-foreground">
                    {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-32 h-32 mx-auto mb-4 opacity-20">
                    <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                      <span className="text-4xl">👗</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No se encontraron productos</h3>
                  <p className="text-muted-foreground mb-4">
                    Intenta ajustar tus filtros o busca algo diferente
                  </p>
                  <button 
                    onClick={clearFilters}
                    className="text-primary hover:underline"
                  >
                    Limpiar todos los filtros
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewDetails={handleViewDetails}
                      onAddToCart={handleAddToCartFromCard}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>

        <ProductDetail
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />

        {/* Footer */}
        <footer className="bg-secondary/50 border-t mt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <h3 className="text-xl font-bold text-gradient">Bimbi</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Moda cómoda y moderna para toda la familia. Calidad premium con diseños únicos.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Categorías</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Niños</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Niñas</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Mujeres</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Atención al Cliente</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Contacto</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Envíos</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Devoluciones</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Guía de Tallas</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold">@</span>
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold">in</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
              <p>&copy; 2024 Bimbi. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
