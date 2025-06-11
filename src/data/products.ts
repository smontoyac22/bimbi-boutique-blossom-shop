
import { Product } from '@/types/product';

export const products: Product[] = [
  // Niños
  {
    id: '1',
    name: 'Conjunto Deportivo Niño',
    description: 'Conjunto deportivo cómodo y moderno para niños. Incluye camiseta y pantalón de algodón orgánico.',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop',
    category: 'ninos',
    sizes: ['4', '6', '8', '10', '12'],
    colors: ['Azul', 'Verde', 'Gris'],
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Camisa Casual Niño',
    description: 'Camisa de algodón perfecta para ocasiones casuales y formales.',
    price: 24.99,
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=500&fit=crop',
    category: 'ninos',
    sizes: ['4', '6', '8', '10'],
    colors: ['Blanco', 'Azul claro', 'Beige'],
    inStock: true
  },
  {
    id: '3',
    name: 'Jeans Niño Clásico',
    description: 'Jeans resistentes y cómodos para el día a día.',
    price: 34.99,
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=500&fit=crop',
    category: 'ninos',
    sizes: ['4', '6', '8', '10', '12'],
    colors: ['Azul oscuro', 'Negro'],
    inStock: true
  },

  // Niñas
  {
    id: '4',
    name: 'Vestido Princesa',
    description: 'Hermoso vestido con tul y detalles brillantes, perfecto para ocasiones especiales.',
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop',
    category: 'ninas',
    sizes: ['4', '6', '8', '10'],
    colors: ['Rosa', 'Lila', 'Blanco'],
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Conjunto Unicornio',
    description: 'Conjunto adorable con estampado de unicornio, súper suave y cómodo.',
    price: 27.99,
    imageUrl: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&h=500&fit=crop',
    category: 'ninas',
    sizes: ['2', '4', '6', '8'],
    colors: ['Rosa', 'Celeste', 'Morado'],
    inStock: true
  },
  {
    id: '6',
    name: 'Falda Tutu',
    description: 'Falda tutu esponjosa perfecta para bailar y jugar.',
    price: 19.99,
    imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=500&fit=crop',
    category: 'ninas',
    sizes: ['2', '4', '6', '8', '10'],
    colors: ['Rosa', 'Dorado', 'Plata'],
    inStock: true
  },

  // Mujeres
  {
    id: '7',
    name: 'Blusa Elegante',
    description: 'Blusa de seda perfecta para la oficina o ocasiones especiales.',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop',
    category: 'mujeres',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blanco', 'Negro', 'Nude'],
    inStock: true,
    featured: true
  },
  {
    id: '8',
    name: 'Vestido Casual',
    description: 'Vestido cómodo y versátil para el día a día.',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop',
    category: 'mujeres',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Azul marino', 'Verde', 'Burdeos'],
    inStock: true
  },
  {
    id: '9',
    name: 'Pantalón de Vestir',
    description: 'Pantalón elegante de corte recto, ideal para el trabajo.',
    price: 45.99,
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=500&fit=crop',
    category: 'mujeres',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Negro', 'Gris', 'Azul marino'],
    inStock: true
  },
  {
    id: '10',
    name: 'Chaqueta Denim',
    description: 'Chaqueta de denim clásica, perfecta para cualquier ocasión.',
    price: 54.99,
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=500&fit=crop',
    category: 'mujeres',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Azul claro', 'Azul oscuro'],
    inStock: true
  }
];
