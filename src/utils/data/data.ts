import { Product } from 'src/features/products/interfaces/product.interface';

const products: Product[] = [
  {
    id: 1,
    name: 'LOV|U Connected',
    stock: 1,
    price: 32000,
    description:
      'LOV | U Connected de Avon es una fragancia de la familia olfativa Floral Frutal para Mujeres. LOV | U Connected se lanzó en 2024. Las Notas de Salida son naranja tangerina, pera, limón (lima ácida) y notas acuosas; las Notas de Corazón son nenúfar (lirio de agua), aceite de rosas y raíz de lirio; las Notas de Fondo son Amberwood, sándalo y flor del algodonero.',
    category: 'Perfumes',
    pictures: ['dark-375x500.91817.avif'],
    fragancia: ['Floral', 'Frutal'],
  },
];

export default products;
