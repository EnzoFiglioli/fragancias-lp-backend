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
    pictures: [
      'https://http2.mlstatic.com/D_Q_NP_803496-MLA84984525856_052025-O.webp',
    ],
    fragancia: ['Floral', 'Frutal'],
  },
  {
    id: 2,
    name: 'Body Splash Tododia Acerola e Hibisco 200 ml',
    stock: 1,
    price: 23000,
    description:
      'perfumación ligera y refrescante hecha especialmente para el verano.\n• Tododia busca inspiración en la combinación de notas sorprendentes, traducidas en fragancias irresistibles\n• sensación de frescura y ligereza que da el toque final al cuidado de cada día\n• hidratación ligera de la piel: mantiene la hidratación de la piel a lo largo del día\n• fragancia refrescante y alegre con notas frutales y cítricas.',
    category: 'Body Splash',
    pictures: [
      'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw64bea90e/PRODUTOS/NATARG-117800_2.jpg',
    ],
  },
  {
    id: 3,
    name: 'Águas de Natura Frambuesa Fragancia Femenina 150 ml',
    stock: 1,
    price: 25000,
    description:
      'el colorido vibrante de la frambuesa con la flor de hibisco.\n• la explosión colorida y vibrante de la frambuesa fresca se une a un bouquet floral de hibisco\n• cargado de feminidad\n• con un toque de priprioca, ingrediente de la biodiversidad brasileña.',
    category: 'Colonia',
    pictures: [
      'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw3f6a0277/PRODUTOS/NATARG-166370_1.jpg',
    ],
  },
  {
    id: 4,
    name: 'Perfume de Mujer LOV|U',
    stock: 1,
    price: 30000,
    description:
      'Perfume de Mujer Lov u Eau de Parfum, Perfume de Mujer Aroma: Floral Frutal, con notas de frambuesa y rosas combinadas con madera de cashmere Contenido: 50 ml.',
    pictures: [
      'https://production.na01.natura.com/on/demandware.static/-/Sites-avon-ar-storefront-catalog/default/dw48c6bc0a/AVNARG-737478_1.jpg',
    ],
    category: 'Perfumes',
  },
  {
    id: 5,
    name: 'Latin Attitude Mystic Edt 50 ml',
    stock: 1,
    price: 22600,
    description:
      'Vibro alto, comparto mi luz, expreso mi magia\nEquilibra tus sentidos con pétalos de jazmín y fresia morada que dan calidez y brillo.\n\nEl Muguet aporta frescura y tranquilidad, junto con notas balsámicas y semidulces de Crystal Musks que evocan una sensación serena.',
    pictures: [
      'https://production.na01.natura.com/on/demandware.static/-/Sites-avon-ar-storefront-catalog/default/dw408a4474/207711_1.jpg',
    ],
    category: 'Perfumes',
  },
];

export default products;
