
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onShopNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopNow }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-bimbi-pink/20 via-bimbi-blue/20 to-bimbi-purple/20 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Bimbi</span>
                <br />
                <span className="text-foreground">Moda para toda</span>
                <br />
                <span className="text-foreground">la familia</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Descubre nuestra colección de ropa cómoda y moderna para niños, niñas y mujeres. 
                Calidad premium con diseños únicos que acompañan cada momento especial.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-black px-8 py-6 text-lg group"
                onClick={onShopNow}
              >
                Comprar Ahora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover-lift"
              >
                Ver Colección
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Productos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                <div className="text-sm text-muted-foreground">Clientes Felices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5★</div>
                <div className="text-sm text-muted-foreground">Calificación</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-bimbi-pink/30 p-6 rounded-2xl animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop"
                    alt="Niñas"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-purple-800">Para Niñas</h3>
                  <p className="text-sm text-purple-600">Vestidos y conjuntos adorables</p>
                </div>
                <div className="bg-bimbi-blue/30 p-6 rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop"
                    alt="Niños"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-blue-800">Para Niños</h3>
                  <p className="text-sm text-blue-600">Ropa cómoda y resistente</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-primary/20 p-6 rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop"
                    alt="Mujeres"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-pink-800">Para Mujeres</h3>
                  <p className="text-sm text-pink-600">Elegancia y comodidad</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-bimbi-yellow/30 rounded-full animate-pulse-soft"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-bimbi-purple/30 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
